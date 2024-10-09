import { NextResponse } from 'next/server';

export function serverErrorHandler(e: unknown, message = 'An error occurred') {
  console.error(message, e);
  return NextResponse.json(
    {
      message,
      error: e instanceof Error ? e.message : 'Unknown error',
    },
    { status: 500 }
  );
}
