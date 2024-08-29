import Link from "next/link";
import Navbar from "./components/Navbar/Navbar";
import Products from "./products/page";
import Slider from "./components/Slider/Slider";

export default async function Home() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  return (
    <>
      {/* <div>
        <h2>Welcome to X-Products</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
          doloremque pariatur nulla, vel iusto quo reiciendis corporis iste quos
          tenetur cumque dolor error quam placeat a! Sequi nihil minus magnam.
        </p>

        <Link href={"/products"}>Click here to show products</Link>
      </div> */}

      <Products />
    </>
  );
}
