// /src/app/api/subscribe/route.js
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

// Instantiate Prisma Client once and reuse it
// This is more efficient for serverless environments
const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const { email } = await request.json();
    if (!email) {
      return NextResponse.json({ error: 'Email is required.' }, { status: 400 });
    }

    // Use Prisma to find if the subscriber already exists
    const existingSubscriber = await prisma.subscribers.findUnique({
      where: { email },
    });

    if (existingSubscriber) {
      return NextResponse.json({ message: 'You are already subscribed!' }, { status: 200 });
    }

    // Create a new subscriber record in the database
    await prisma.subscribers.create({
      data: { email },
    });

    return NextResponse.json({ message: 'Subscription successful!' }, { status: 201 });
  } catch (error) {
    console.error('API Error:', error);

    // Handle known Prisma error for unique constraint violation
    if (error.code === 'P2002') {
      return NextResponse.json({ message: 'You are already subscribed!' }, { status: 200 });
    }

    // Return a generic error for other issues
    return NextResponse.json({ error: 'An internal server error occurred.' }, { status: 500 });
  }
  // No need for finally { await prisma.$disconnect() } in serverless functions
  // The connection is managed by the serverless environment lifecycle.
}
