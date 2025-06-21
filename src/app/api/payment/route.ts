import { NextRequest } from 'next/server';
import crypto from 'crypto';

// POST route to initiate payment
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { amount, firstname, email, phone } = body;

    // Get PayU credentials from environment
    const key = process.env.PAYU_MERCHANT_KEY;
    const salt1 = process.env.PAYU_MERCHANT_SALT; // SALT1: For generating request hash
    const baseURL = process.env.PAYU_BASE_URL;

    // Check all required credentials
    if (!key || !salt1 || !baseURL) {
      console.error('Missing PayU configuration', { key, salt1, baseURL });
      return new Response('Server misconfiguration: missing PayU credentials', { status: 500 });
    }

    // Transaction details
    const txnid = `Txn${Date.now()}`;
    const productinfo = 'Premium Plan';
    const surl = 'http://localhost:3000/price/success'; // Success URL
    const furl = 'http://localhost:3000/price/failure'; // Failure URL

    // Hash string generation
    const hashString = `${key}|${txnid}|${amount}|${productinfo}|${firstname}|${email}|||||||||||${salt1}`;
    const hash = crypto.createHash('sha512').update(hashString).digest('hex');

    console.log('PayU Debug Info:', {
      key,
      txnid,
      amount,
      firstname,
      email,
      phone,
      productinfo,
      hashString,
      hash,
      surl,
      furl,
      baseURL,
    });

    // Generate the HTML form that auto-submits to PayU
    const formHTML = `
      <html>
        <head><title>Redirecting to PayU</title></head>
        <body onload="document.forms[0].submit();">
          <form method="post" action="${baseURL}">
            <input type="hidden" name="key" value="${key}" />
            <input type="hidden" name="txnid" value="${txnid}" />
            <input type="hidden" name="amount" value="${amount}" />
            <input type="hidden" name="firstname" value="${firstname}" />
            <input type="hidden" name="email" value="${email}" />
            <input type="hidden" name="phone" value="${phone}" />
            <input type="hidden" name="productinfo" value="${productinfo}" />
            <input type="hidden" name="surl" value="${surl}" />
            <input type="hidden" name="furl" value="${furl}" />
            <input type="hidden" name="hash" value="${hash}" />
          </form>
          <p>Redirecting to PayU...</p>
        </body>
      </html>
    `;

    return new Response(formHTML, {
      headers: { 'Content-Type': 'text/html' },
      status: 200,
    });
  } catch (err) {
    console.error('Payment route error:', err);
    return new Response('Internal Server Error', { status: 500 });
  }
}


