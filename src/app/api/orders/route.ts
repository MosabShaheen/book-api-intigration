import { API_BASE_URL } from "@/utils";
import { NextRequest, NextResponse } from "next/server";
const orderApiCall = async (body: any, token: any) => {
  try {
    const res = await fetch(`${API_BASE_URL}/orders/`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: token },
      body: JSON.stringify(body),
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error(await res.json());
    }
    return res.json();
  } catch (error) {
    return error;
  }
};

export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log(body);
  const token = request.headers.get("Authorization");
  console.log(token);
  try {
    const result = await orderApiCall(body, token);
    console.log(result.orderId)
    return new NextResponse(JSON.stringify(result), { status: 200 });
  } catch (error) {
    return new NextResponse(JSON.stringify(error), { status: 404 });
  }
}