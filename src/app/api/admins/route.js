import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Admin from "@/models/Admin";

export async function GET() {
  await dbConnect();
  try {
    const admins = await Admin.find({});
    return NextResponse.json(admins);
  } catch (error) {
    return NextResponse.json({ message: "Error fetching admins", error }, { status: 500 });
  }
}

export async function POST(request) {
  await dbConnect();
  try {
    const { name, email, role, password } = await request.json();
    const newAdmin = new Admin({
      name,
      email,
      role,
      password,
    });
    await newAdmin.save();
    return NextResponse.json(newAdmin, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error creating admin", error }, { status: 500 });
  }
}
