import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Stat from "@/models/Stat";

export async function GET() {
  await dbConnect();
  try {
    const stats = await Stat.find({});
    return NextResponse.json(stats);
  } catch (error) {
    return NextResponse.json({ message: "Error fetching stats", error }, { status: 500 });
  }
}

export async function POST(request) {
  await dbConnect();
  try {
    const { icon, title, subtitle } = await request.json();
    const newStat = new Stat({
      icon,
      title,
      subtitle,
    });
    await newStat.save();
    return NextResponse.json(newStat, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error creating stat", error }, { status: 500 });
  }
}