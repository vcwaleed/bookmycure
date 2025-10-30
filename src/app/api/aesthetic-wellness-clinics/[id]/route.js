import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import AestheticWellnessClinic from "@/models/AestheticWellnessClinic";

export async function GET(request, { params }) {
  await dbConnect();
  try {
    const clinic = await AestheticWellnessClinic.findById(params.id);
    if (!clinic) {
      return NextResponse.json({ message: "Clinic not found" }, { status: 404 });
    }
    return NextResponse.json(clinic);
  } catch (error) {
    return NextResponse.json({ message: "Error fetching clinic", error }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  await dbConnect();
  try {
    const { title, services, price, oldPrice, discount,address } = await request.json();
    const updatedClinic = await AestheticWellnessClinic.findByIdAndUpdate(
      params.id,
      { title, services, price, oldPrice, discount,address },
      { new: true }
    );
    if (!updatedClinic) {
      return NextResponse.json({ message: "Clinic not found" }, { status: 404 });
    }
    return NextResponse.json(updatedClinic);
  } catch (error) {
    return NextResponse.json({ message: "Error updating clinic", error }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  await dbConnect();
  try {
    const deletedClinic = await AestheticWellnessClinic.findByIdAndDelete(params.id);
    if (!deletedClinic) {
      return NextResponse.json({ message: "Clinic not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Clinic deleted successfully" });
  } catch (error) {
    return NextResponse.json({ message: "Error deleting clinic", error }, { status: 500 });
  }
}
