import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { email, subject, message } = await request.json();

    // Here you would typically send the email using a service like SendGrid, Nodemailer, etc.
    // For now, we'll just log it and return success
    console.log('New contact form submission:');
    console.log('Email:', email);
    console.log('Subject:', subject);
    console.log('Message:', message);

    // In a real application, you would send the email here
    // Example with nodemailer or sendgrid would go here

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { message: 'Failed to send message' },
      { status: 500 }
    );
  }
}