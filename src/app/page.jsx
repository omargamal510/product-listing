import Link from "next/link";
import Navbar from "./components/Navbar/Navbar";

export default async function Home() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  return (
    <>
      <Navbar />
    </>
  );
}
