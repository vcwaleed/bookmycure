import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import HealthPackage from "@/models/HealthPackage";

export async function DELETE() {
  await dbConnect();
  try {
    const result = await HealthPackage.deleteMany({});
    return NextResponse.json({ message: "All health packages deleted successfully", result });
  } catch (error) {
    return NextResponse.json({ message: "Error deleting health packages", error }, { status: 500 });
  }
}
