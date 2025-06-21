import { NextRequest, NextResponse } from 'next/server';
import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';
import os from 'os';

// Helper to parse multipart/form-data
async function parseMultipartFormData(req: NextRequest) {
    const formData = await req.formData();
    const file = formData.get('file') as File | null;
    const url = formData.get('url') as string | null;

    let inputPath: string | null = null;
    if (file) {
        const buffer = Buffer.from(await file.arrayBuffer());
        inputPath = path.join(os.tmpdir(), file.name);
        await fs.promises.writeFile(inputPath, buffer);
    }

    return { url, file, inputPath };
}

export async function POST(req: NextRequest) {
    try {
        const { url, file, inputPath } = await parseMultipartFormData(req);

        const backendDir = path.resolve(process.cwd(), 'src', 'app', 'abackend');
        const outputsDir = path.join(os.tmpdir(), 'outputs');
        await fs.promises.mkdir(outputsDir, { recursive: true });

        let pythonScript: string;
        let pythonArgs: string[] = [];
        let outputPath: string = '';

        if (url) {
            outputPath = path.join(outputsDir, `single_output_${Date.now()}.csv`);
            pythonScript = path.join(backendDir, 'web.py');
            pythonArgs = [pythonScript, url, outputPath];
        } else if (file && inputPath) {
            outputPath = path.join(outputsDir, `${file.name}_output.csv`);
            pythonScript = path.join(backendDir, 'process.py');
            pythonArgs = [pythonScript, inputPath, outputPath];
        } else {
            return NextResponse.json({ error: 'No URL or file provided.' }, { status: 400 });
        }

        const python = spawn('python', pythonArgs);

        let stdout = '';
        let stderr = '';

        python.stdout.on('data', (data) => {
            stdout += data.toString();
        });

        python.stderr.on('data', (data) => {
            stderr += data.toString();
        });

        const closePromise = new Promise<number | null>((resolve) => {
            python.on('close', resolve);
        });

        const code = await closePromise;

        if (code !== 0) {
            console.error(`Python script failed with code ${code}:\nstdout: ${stdout}\nstderr: ${stderr}`);
            return NextResponse.json({ error: 'Python script failed to execute.', details: stderr }, { status: 500 });
        }

        if (!fs.existsSync(outputPath)) {
             return NextResponse.json({ error: 'Processing failed: Output file not created.', details: stderr }, { status: 500 });
        }

        const fileBuffer = await fs.promises.readFile(outputPath);
        const headers = new Headers();
        headers.append('Content-Disposition', `attachment; filename="${path.basename(outputPath)}"`);
        headers.append('Content-Type', 'text/csv');

        // Clean up temp files
        if (inputPath) await fs.promises.unlink(inputPath);
        await fs.promises.unlink(outputPath);

        return new NextResponse(fileBuffer, { headers });

    } catch (e: any) {
        console.error('An unexpected error occurred in the scrape handler:', e);
        return NextResponse.json({ error: 'An unexpected server error occurred.', details: e.message }, { status: 500 });
    }
}
