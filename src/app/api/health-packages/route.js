import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import HealthPackage from "@/models/HealthPackage";

export async function GET(request) {
  await dbConnect();
  try {
    const { searchParams } = new URL(request.url);
    const city = searchParams.get('city');
    const sortBy = searchParams.get('sortBy');
    const searchQuery = searchParams.get('search');

    let filter = {};
    if (city) {
      filter.address = { $regex: city, $options: 'i' };
    }

    if (searchQuery) {
      filter.$or = [
        { title: { $regex: searchQuery, $options: 'i' } },
        { tests: { $regex: searchQuery, $options: 'i' } },
      ];
    }

    let sort = {};
    if (sortBy === 'low-to-high') {
      sort.price = -1;
    } else if (sortBy === 'high-to-low') {
      sort.price = 1;
    }

    const healthPackages = await HealthPackage.find(filter).sort(sort);
    return NextResponse.json(healthPackages);
  } catch (error) {
    return NextResponse.json({ message: "Error fetching health packages", error }, { status: 500 });
  }
}

export async function POST(request) {
  await dbConnect();
  try {
    const { title, tests, price, oldPrice, discount, address } = await request.json();
    const newHealthPackage = new HealthPackage({
      title,
      tests,
      price,
      oldPrice,
      discount,
      address,
    });
    await newHealthPackage.save();
    const savedPackage = await HealthPackage.findById(newHealthPackage._id);
    return NextResponse.json(savedPackage, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error creating health package", error }, { status: 500 });
  }
}