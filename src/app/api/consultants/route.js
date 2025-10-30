import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const consultants = await prisma.consultant.findMany();
    return NextResponse.json(consultants);
  } catch (error) {
    return NextResponse.json({ message: "Error fetching consultants", error }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const { name, specialization, location, address, description, whatsapp } = await request.json();
    const newConsultant = await prisma.consultant.create({
      data: {
        name,
        specialization,
        location,
        address,
        description,
        whatsapp,
      },
    });
    return NextResponse.json(newConsultant, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error creating consultant", error }, { status: 500 });
  }
}
