"use client";

let me: number;
export async function OrderIdPass({ params }: { params: { id: number } }) {
  me = params.id;
}
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function SubmitOrder() {
  const router = useRouter();
  const [form, setForm] = useState({
    bookId: me,
    customerName: "",
  });
  console.log(form.bookId);
  const handleChange = (event: any) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
    console.log(form.bookId);
  };
  const handleSubmit = async (e: any) => {
    console.log(e.preventDefault());

    const authToken = localStorage.getItem("authToken");
    try {
      const response = await fetch(`/api/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify(form),
        cache: "no-store",
      });
      if (!response.ok) {
        throw new Error("Something went Wrong");
      }
      const result = await response.json();
      console.log(result);
      alert(`Your order Id is: ${result.orderId}`);
      router.push("/");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="flex justify-center gap-2">
      <form onSubmit={handleSubmit}>
        <label className="block text-sm font-medium text-gray-900">
          Client Name
        </label>
        <input
          type="text"
          name="customerName"
          placeholder="Enter Client Name"
          value={form.customerName}
          required
          onChange={handleChange}
        />
        <button
          type="submit"
          className="mt-3 bg-green-700 font-medium rounded-md text-sm text-white p-2 "
        >
          Submit
        </button>
      </form>
    </div>
  );
}
