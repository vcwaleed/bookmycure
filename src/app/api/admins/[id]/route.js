import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Admin from "@/models/Admin";

export async function GET(request, { params }) {
  await dbConnect();
  try {
    const admin = await Admin.findById(params.id);
    if (!admin) {
      return NextResponse.json({ message: "Admin not found" }, { status: 404 });
    }
    return NextResponse.json(admin);
  } catch (error) {
    return NextResponse.json({ message: "Error fetching admin", error }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  await dbConnect();
  try {
    const { name, email, role } = await request.json();
    const updatedAdmin = await Admin.findByIdAndUpdate(
      params.id,
      { name, email, role },
      { new: true }
    );
    if (!updatedAdmin) {
      return NextResponse.json({ message: "Admin not found" }, { status: 404 });
    }
    return NextResponse.json(updatedAdmin);
  } catch (error) {
    return NextResponse.json({ message: "Error updating admin", error }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  await dbConnect();
  try {
    const deletedAdmin = await Admin.findByIdAndDelete(params.id);
    if (!deletedAdmin) {
      return NextResponse.json({ message: "Admin not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Admin deleted successfully" });
  } catch (error) {
    return NextResponse.json({ message: "Error deleting admin", error }, { status: 500 });
  }
}
