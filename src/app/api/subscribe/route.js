import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

// Initialize a single instance of Prisma Client for database interactions.
const prisma = new PrismaClient();

/**
 * Handles POST requests to subscribe a new user.
 * @param {Request} request - The incoming request object from the client.
 * @returns {NextResponse} A JSON response indicating success or failure.
 */
export async function POST(request) {
  try {
    // 1. Parse the request body to get the email.
    const { email } = await request.json();

    // 2. Validate that an email was provided.
    if (!email) {
      return NextResponse.json({ error: 'Email is required.' }, { status: 400 });
    }

    // 3. Check if the email already exists in the database.
    const existingSubscriber = await prisma.subscribers.findUnique({
      where: { email },
    });

    // If the user is already subscribed, return a success message without creating a new entry.
    if (existingSubscriber) {
      return NextResponse.json({ message: 'You are already subscribed!' }, { status: 200 });
    }

    // 4. If the email is new, create a new subscriber record.
    await prisma.subscribers.create({
      data: { email },
    });

    // 5. Return a success response.
    return NextResponse.json({ message: 'Subscription successful!' }, { status: 201 });

  } catch (error) {
    // Log the full error for debugging purposes on the server.
    console.error('API Error:', error);

    // Specifically handle Prisma's unique constraint violation error (P2002).
    // This is a fallback in case the `findUnique` check fails due to a race condition.
    if (error.code === 'P2002') {
      return NextResponse.json({ message: 'You are already subscribed!' }, { status: 200 });
    }

    // For all other errors, return a generic 500 internal server error.
    return NextResponse.json({ error: 'An internal server error occurred.' }, { status: 500 });
  }
}