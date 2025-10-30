import { NextResponse } from "next/server";

let adminUser = {
  id: 2,
  name: "Jane Smith",
  email: "jane.smith@example.com",
  password: "1234",
};

export async function GET() {
  return NextResponse.json(adminUser);
}

export async function PUT(request) {
  try {
    const { name, email, password } = await request.json();
    if (name) {
      adminUser.name = name;
    }
    if (email) {
      adminUser.email = email;
    }
    if (password) {
      adminUser.password = password;
    }
    return NextResponse.json(adminUser);
  } catch (error) {
    return NextResponse.json({ message: "Error updating admin", error }, { status: 500 });
  }
}
