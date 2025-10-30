import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Stat from "@/models/Stat";

export async function PUT(request, { params }) {
  await dbConnect();
  const { id } = params;
  try {
    const { icon, title, subtitle } = await request.json();
    const updatedStat = await Stat.findByIdAndUpdate(
      id,
      { icon, title, subtitle },
      { new: true }
    );
    if (!updatedStat) {
      return NextResponse.json({ message: "Stat not found" }, { status: 404 });
    }
    return NextResponse.json(updatedStat);
  } catch (error) {
    return NextResponse.json({ message: "Error updating stat", error }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  await dbConnect();
  const { id } = params;
  try {
    const deletedStat = await Stat.findByIdAndDelete(id);
    if (!deletedStat) {
      return NextResponse.json({ message: "Stat not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Stat deleted" });
  } catch (error) {
    return NextResponse.json({ message: "Error deleting stat", error }, { status: 500 });
  }
}