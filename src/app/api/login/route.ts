import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const res = await request.json();

  if (res.email === "admin@gmail.com") {
    return Response.json({
      data: { name: "Admin", email: "admin@gmail.com" },
      errors: null,
      isSuccess: true,
      status: "Ok",
    });
  }

  return Response.json({
    data: null,
    errors: [{ code: "invalid_credentials", message: "Invalid Credentials" }],
    isSuccess: false,
    status: "Bad Request",
  });
}
