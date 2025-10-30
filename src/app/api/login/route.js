import { NextResponse } from "next/server";

const adminUser = {
  id: 2,
  name: "Jane Smith",
  email: "jane.smith@example.com",
  password: "1234",
};

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    if (email === adminUser.email && password === adminUser.password) {
      // In a real application, you would generate a JWT here
      return NextResponse.json({ message: "Login successful" });
    } else {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json({ message: "Error logging in", error }, { status: 500 });
  }
}
