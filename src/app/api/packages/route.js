
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Package from '@/models/Package';

export async function GET() {
  await dbConnect();
  try {
    const packages = await Package.find({});
    return NextResponse.json({ success: true, data: packages });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

export async function POST(request) {
  await dbConnect();
  try {
    const body = await request.json();
    const newPackage = await Package.create(body);
    return NextResponse.json({ success: true, data: newPackage }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
