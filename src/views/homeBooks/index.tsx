import { API_BASE_URL } from "@/utils";
import Link from "next/link";

const getBooksList = async () => {
  const res = await fetch(`${API_BASE_URL}/books`);
  if (!res.ok) {
    throw new Error("Something went worng");
  }
  return res.json();
};

export default async function HomeBooks() {
  const books = await getBooksList();
  return (
    <div className="container grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-8">
      {books?.map((item: any) => (
        <Link href={`/bookDetails/${item.id}`} key={item.id}>
          <div className="item">
            <img src="https://picsum.photos/400/300" alt="" />
            <div>
              <h2>{item.name}</h2>
              <p>Type: {item.type}</p>
              <p className="font-bold flex  ">
                Available: {item.available ? <p className="mx-auto m-0">Yes</p> : <p className="mx-auto m-0 text-red-400">No</p>}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
