import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const { email } = await request.json();
    if (!email) {
      return NextResponse.json({ error: 'Email is required.' }, { status: 400 });
    }

    const existingSubscriber = await prisma.subscribers.findUnique({
      where: { email },
    });

    if (existingSubscriber) {
      return NextResponse.json({ message: 'You are already subscribed!' }, { status: 200 });
    }

    await prisma.subscribers.create({
      data: { email },
    });

    return NextResponse.json({ message: 'Subscription successful!' }, { status: 201 });
  } catch (error) {
    console.error('API Error:', error);
    if (error.code === 'P2002') {
      return NextResponse.json({ message: 'You are already subscribed!' }, { status: 200 });
    }
    return NextResponse.json({ error: 'An internal server error occurred.' }, { status: 500 });
  }
}