import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import AestheticWellnessClinic from "@/models/AestheticWellnessClinic";

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
        { services: { $regex: searchQuery, $options: 'i' } },
      ];
    }

    let sort = {};
    if (sortBy === 'low-to-high') {
      sort.price = 1;
    } else if (sortBy === 'high-to-low') {
      sort.price = -1;
    }

    const clinics = await AestheticWellnessClinic.find(filter).sort(sort);
    return NextResponse.json(clinics);
  } catch (error) {
    return NextResponse.json({ message: "Error fetching clinics", error }, { status: 500 });
  }
}

export async function POST(request) {
  await dbConnect();
  try {
    const { title, services, price, oldPrice, discount,address } = await request.json();
    const newClinic = new AestheticWellnessClinic({
      title,
      services,
      price,
      oldPrice,
      discount,
      address,
    });
    await newClinic.save();
    return NextResponse.json(newClinic, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error creating clinic", error }, { status: 500 });
  }
}
