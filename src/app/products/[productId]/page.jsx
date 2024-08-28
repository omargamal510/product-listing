import { redirect } from "next/navigation";

import React from "react";

export default async function page({ params }) {
  //   const res = await fetch(
  //     `https://fakestoreapi.com/products/${params.productId}`
  //   );
  //   const data = await res.json();

  try {
    const res = await fetch(
      `https://fakestoreapi.com/products/${params.productId}`
    );

    if (!res.ok) {
      redirect("/not-found");
    }
    const data = await res.json();

    return <div>{data?.id}</div>;
  } catch (err) {
    if (err) {
      redirect("/not-found");
    }
  }
}
