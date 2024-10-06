import { NextResponse } from 'next/server';

export const DEFAULT_RES_HEADERS = {
  'Access-Control-Allow-Credentials': 'true',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
  'Access-Control-Allow-Headers': '*',
};

export async function OPTIONS() {
  return NextResponse.json(null, { headers: DEFAULT_RES_HEADERS });
}
