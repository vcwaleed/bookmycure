import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Consultant from "@/models/Consultant";

export async function GET(request, { params }) {
  try {
    await dbConnect();
    const consultant = await Consultant.findById(params.id);
    if (!consultant) {
      return NextResponse.json({ message: "Consultant not found" }, { status: 404 });
    }
    return NextResponse.json(consultant);
  } catch (error) {
    return NextResponse.json({ message: "Error fetching consultant", error }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  try {
    await dbConnect();
    const data = await request.json();
    const updatedConsultant = await Consultant.findByIdAndUpdate(params.id, data, { new: true });
    return NextResponse.json(updatedConsultant);
  } catch (error) {
    return NextResponse.json({ message: "Error updating consultant", error }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    await dbConnect();
    await Consultant.findByIdAndDelete(params.id);
    return NextResponse.json({ message: "Consultant deleted successfully" });
  } catch (error) {
    return NextResponse.json({ message: "Error deleting consultant", error }, { status: 500 });
  }
}
