import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const data = Object.fromEntries(formData.entries());

    const salt = process.env.PAYU_MERCHANT_SALT_V2; // SALT2: For verifying response hash
    const key = process.env.PAYU_MERCHANT_KEY;

    if (!salt || !key) {
      console.error('Missing PayU configuration for response handling');
      return NextResponse.redirect(new URL('/price/failure?error=config', req.url));
    }

    const status = data.status as string;
    const txnid = data.txnid as string;
    const amount = data.amount as string;
    const productinfo = data.productinfo as string;
    const firstname = data.firstname as string;
    const email = data.email as string;
    const receivedHash = data.hash as string;

    // The order of fields for the response hash is critical and specified by PayU.
    const hashString = `${salt}|${status}|||||||||||${email}|${firstname}|${productinfo}|${amount}|${txnid}|${key}`;
    const generatedHash = crypto.createHash('sha512').update(hashString).digest('hex');

    if (receivedHash !== generatedHash) {
      console.error('Payment hash mismatch');
      // Redirect to a failure page if the hash doesn't match
      return NextResponse.redirect(new URL('/price/failure?error=hash_mismatch', req.url));
    }

    if (status === 'success') {
      // Here you would typically update your database, mark the order as paid, etc.
      console.log(`Payment successful for transaction ID: ${txnid}`);
      
      // Redirect to the frontend success page
      return NextResponse.redirect(new URL(`/price/success?txnid=${txnid}`, req.url));
    } else {
      // Handle cases where status is not 'success' but lands on the success URL
      return NextResponse.redirect(new URL(`/price/failure?txnid=${txnid}&status=${status}`, req.url));
    }

  } catch (error) {
    console.error('Error in payment success callback:', error);
    return NextResponse.redirect(new URL('/price/failure?error=server_error', req.url));
  }
}
