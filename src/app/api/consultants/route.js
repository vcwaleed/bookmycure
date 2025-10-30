import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Consultant from "@/models/Consultant";

export async function GET() {
  try {
    await dbConnect();
    const consultants = await Consultant.find({});
    return NextResponse.json(consultants);
  } catch (error) {
    return NextResponse.json({ message: "Error fetching consultants", error }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await dbConnect();
    const { name, specialization, location, address, description, whatsapp } = await request.json();
    const newConsultant = await Consultant.create({
      name,
      specialization,
      location,
      address,
      description,
      whatsapp,
    });
    return NextResponse.json(newConsultant, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error creating consultant", error }, { status: 500 });
  }
}
