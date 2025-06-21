import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const data = Object.fromEntries(formData.entries());

    const txnid = data.txnid as string;
    const status = data.status as string;
    const errorMessage = data.error_Message as string;

    console.log(`Payment failed for transaction ID: ${txnid}, Status: ${status}, Message: ${errorMessage}`);

    // Redirect to the frontend failure page with details
    const failureUrl = new URL('/price/failure', req.url);
    failureUrl.searchParams.set('txnid', txnid || 'N/A');
    failureUrl.searchParams.set('status', status || 'N/A');
    failureUrl.searchParams.set('message', errorMessage || 'No message provided');
    
    return NextResponse.redirect(failureUrl);

  } catch (error) {
    console.error('Error in payment failure callback:', error);
    // Redirect to a generic failure page if something goes wrong in the callback itself
    return NextResponse.redirect(new URL('/price/failure?error=server_error', req.url));
  }
}
