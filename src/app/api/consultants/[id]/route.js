import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request, { params }) {
  try {
    const consultant = await prisma.consultant.findUnique({
      where: { id: params.id },
    });
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
    const data = await request.json();
    const updatedConsultant = await prisma.consultant.update({
      where: { id: params.id },
      data,
    });
    return NextResponse.json(updatedConsultant);
  } catch (error) {
    return NextResponse.json({ message: "Error updating consultant", error }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    await prisma.consultant.delete({
      where: { id: params.id },
    });
    return NextResponse.json({ message: "Consultant deleted successfully" });
  } catch (error) {
    return NextResponse.json({ message: "Error deleting consultant", error }, { status: 500 });
  }
}
