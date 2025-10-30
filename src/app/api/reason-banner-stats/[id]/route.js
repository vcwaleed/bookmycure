import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import ReasonBannerStat from "@/models/ReasonBannerStat";

export async function GET(request, { params }) {
  await dbConnect();
  try {
    const stat = await ReasonBannerStat.findById(params.id);
    if (!stat) {
      return NextResponse.json({ message: "Stat not found" }, { status: 404 });
    }
    return NextResponse.json(stat);
  } catch (error) {
    return NextResponse.json({ message: "Error fetching stat", error }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  await dbConnect();
  try {
    const { happyCustomers, googleRating, testsBooked, cities } = await request.json();
    const updatedStat = await ReasonBannerStat.findByIdAndUpdate(
      params.id,
      { happyCustomers, googleRating, testsBooked, cities },
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
  try {
    const deletedStat = await ReasonBannerStat.findByIdAndDelete(params.id);
    if (!deletedStat) {
      return NextResponse.json({ message: "Stat not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Stat deleted successfully" });
  } catch (error) {
    return NextResponse.json({ message: "Error deleting stat", error }, { status: 500 });
  }
}
