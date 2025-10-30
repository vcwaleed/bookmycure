import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import HealthPackage from "@/models/HealthPackage";

export async function PUT(request, { params }) {
  await dbConnect();
  const { id } = params;
  try {
    const { title, tests, price, oldPrice, discount, address } = await request.json();
    const updatedHealthPackage = await HealthPackage.findByIdAndUpdate(
      id,
      { title, tests, price, oldPrice, discount, address },
      { new: true }
    );
    if (!updatedHealthPackage) {
      return NextResponse.json({ message: "Health package not found" }, { status: 404 });
    }
    return NextResponse.json(updatedHealthPackage);
  } catch (error) {
    return NextResponse.json({ message: "Error updating health package", error }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  await dbConnect();
  const { id } = params;
  try {
    const deletedHealthPackage = await HealthPackage.findByIdAndDelete(id);
    if (!deletedHealthPackage) {
      return NextResponse.json({ message: "Health package not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Health package deleted" });
  } catch (error) {
    return NextResponse.json({ message: "Error deleting health package", error }, { status: 500 });
  }
}