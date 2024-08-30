import Link from "next/link";
import { redirect } from "next/navigation";

import React from "react";

export async function generateStaticParams() {
  const products = await fetch("https://fakestoreapi.com/products/").then(
    (res) => res.json()
  );

  return products.map((ele) => ({
    productId: ele.productId,
  }));
}

export default async function page({ params }) {
  const { productId } = params;
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${productId}`);

    if (!res.ok) {
      redirect("/not-found");
    }
    const data = await res.json();
    const { title, price, image, category, description } = data;

    return (
      <>
        <div className="pt-5">
          <Link href={"/"} className="mx-2 bg-customPurple p-2 rounded-lg">
            {" "}
            {"<"} Back
          </Link>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <div className="w-full sm:w-1/2 flex justify-center sm:justify-end mb-4 sm:mb-0">
              <img
                src={image}
                alt={title}
                className="w-full max-w-md md:max-w-lg lg:max-w-lg h-[500px] object-contain rounded-lg bg-white"
              />
            </div>
            <div className="md:w-1/2 text-center md:text-left md:pr-8">
              <h2 className="text-2xl font-bold">{title}</h2>
              <p className="mb-3">*{category}</p>
              <p className="text-lg text-gray-400 ">${price}</p>

              <h3 className="text-xl font-bold my-3">Details : </h3>
              <p className="text-gray-400 px-10 sm:px-0">{description}</p>

              <div className="mt-10 flex gap-5 flex-col items-center sm:items-start [&>*]:cursor-pointer mb-10">
                {/* cONSIDER BOth as a dummy buttons in real app it has anothe consideration to put buttons since there is ssr rules and csr  */}
                <p className="bg-customPurple text-white px-4 py-2 rounded w-60 text-center">
                  Add to WishList
                </p>
                <p className="bg-customPurple text-white px-4 py-2 rounded w-60 text-center">
                  Add to Cart
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } catch (err) {
    if (err) {
      redirect("/not-found");
    }
  }
}
