
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Package from '@/models/Package';
import HealthPackage from '@/models/HealthPackage';
import AestheticWellnessClinic from '@/models/AestheticWellnessClinic';

export async function GET(request, { params }) {
  await dbConnect();
  try {
    let singlePackage = await Package.findById(params.id);
    if (!singlePackage) {
      singlePackage = await HealthPackage.findById(params.id);
    }
    if (!singlePackage) {
      singlePackage = await AestheticWellnessClinic.findById(params.id);
    }

    if (!singlePackage) {
      return NextResponse.json({ success: false, message: 'Package not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: singlePackage });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

export async function PUT(request, { params }) {
  await dbConnect();
  try {
    const body = await request.json();
    const updatedPackage = await Package.findByIdAndUpdate(params.id, body, {
      new: true,
      runValidators: true,
    });
    if (!updatedPackage) {
      return NextResponse.json({ success: false, message: 'Package not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: updatedPackage });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

export async function DELETE(request, { params }) {
  await dbConnect();
  try {
    const deletedPackage = await Package.deleteOne({ _id: params.id });
    if (deletedPackage.deletedCount === 0) {
      return NextResponse.json({ success: false, message: 'Package not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: {} });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
