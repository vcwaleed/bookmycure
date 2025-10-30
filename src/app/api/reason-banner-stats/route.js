import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import ReasonBannerStat from "@/models/ReasonBannerStat";

export async function GET() {
  await dbConnect();
  try {
    const stat = await ReasonBannerStat.findOne();
    return NextResponse.json(stat);
  } catch (error) {
    return NextResponse.json({ message: "Error fetching stats", error }, { status: 500 });
  }
}

export async function POST(request) {
  await dbConnect();
  try {
    const { happyCustomers, googleRating, testsBooked, cities } = await request.json();
    let stat = await ReasonBannerStat.findOne();
    if (stat) {
      stat.happyCustomers = happyCustomers;
      stat.googleRating = googleRating;
      stat.testsBooked = testsBooked;
      stat.cities = cities;
    } else {
      stat = new ReasonBannerStat({
        happyCustomers,
        googleRating,
        testsBooked,
        cities,
      });
    }
    await stat.save();
    return NextResponse.json(stat, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error creating or updating stat", error }, { status: 500 });
  }
}
