'use client';

import React, { useState } from 'react';
import Menu from '@/app/menu';
import Footer from '@/app/footer';
import '../globals.css';

const Page = () => {
  const [url, setUrl] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [downloadLink, setDownloadLink] = useState<string | null>(null);
  const [downloadFilename, setDownloadFilename] = useState<string | null>(null);
  const [fileContent, setFileContent] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
      setUrl('');
    }
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
    setFile(null);
  };

  const handleScrap = async () => {
    if (!url && !file) {
      setError('Please provide either a URL or upload a file.');
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(null);
    setDownloadLink(null);
    setDownloadFilename(null);
    setFileContent(null);

    try {
      const formData = new FormData();
      if (url) {
        formData.append('url', url);
      } else if (file) {
        formData.append('file', file);
      }

      const res = await fetch('/api/scrape', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        const blob = await res.blob();
        const text = await blob.text();
        setFileContent(text);

        const downloadUrl = window.URL.createObjectURL(blob);
        const contentDisposition = res.headers.get('content-disposition');
        let fileName = 'scraped_data.csv';
        if (contentDisposition) {
            const fileNameMatch = contentDisposition.match(/filename=\"(.+)\"/);
            if (fileNameMatch && fileNameMatch.length === 2) {
                fileName = fileNameMatch[1];
            }
        }
        setDownloadLink(downloadUrl);
        setDownloadFilename(fileName);
        setSuccess(`Scraping successful! Your file is ready for download.`);
      } else {
        const result = await res.json();
        setError(result.error || 'An unknown error occurred during scraping.');
      }
    } catch (err: any) {
      setError(err.message || 'An unknown error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-900 via-black to-black text-white">
      <Menu />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold mb-4 tracking-wide">Scrape Smarter, Not Harder</h1>
          <p className="text-lg text-gray-300 mb-8">Enter a URL or upload a CSV/Excel file to begin your scraping journey.</p>

          <div className="bg-black/30 backdrop-blur-md rounded-xl p-8 shadow-2xl mb-8 border border-purple-800">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <input
                type="text"
                className="flex-grow bg-gray-800 text-white border border-purple-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter a URL"
                value={url}
                onChange={handleUrlChange}
                disabled={loading}
              />
              <label className="bg-purple-700 hover:bg-purple-600 text-white px-4 py-3 rounded-lg cursor-pointer transition">
                {file ? file.name : 'Upload File'}
                <input type="file" accept=".csv,.xlsx" onChange={handleFileChange} className="hidden" disabled={loading} />
              </label>
            </div>
            <button
              className="bg-pink-600 hover:bg-pink-500 text-white font-bold py-3 px-6 w-full rounded-lg transition"
              onClick={handleScrap}
              disabled={loading}
            >
              {loading ? 'Scraping...' : 'Start Scraping'}
            </button>
          </div>

          {error && (
            <div className="bg-red-900/50 border border-red-700 text-red-300 rounded-lg p-4">
              <p><strong>Error:</strong> {error}</p>
            </div>
          )}

          {success && (
             <div className="bg-green-900/50 border border-green-700 text-green-300 rounded-lg p-4">
              <p>{success}</p>
            </div>
          )}

          {downloadLink && downloadFilename && (
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 mt-4 text-left">
              <div className="flex justify-between items-center mb-2">
                <p className="text-white">Your file is ready:</p>
                <a
                  href={downloadLink}
                  download={downloadFilename}
                  className="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-lg transition inline-block"
                >
                  Download {downloadFilename}
                </a>
              </div>
              {fileContent && (
                <pre className="bg-black/50 p-4 rounded-lg overflow-auto max-h-96 text-sm text-gray-300"><code>{fileContent}</code></pre>
              )}
            </div>
          )}

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
