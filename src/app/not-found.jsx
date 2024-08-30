import Link from "next/link";
import React from "react";

export default function notfound() {
  return (
    <>
      <div className="h-screen flex justify-center items-center flex-col gap-5">
        <h2 className="text-3xl">Not Found 404</h2>
        <Link href={"/"} className="mx-2 bg-customPurple p-1 rounded-lg">
          {" "}
          {"<"} Back to home page
        </Link>
      </div>
    </>
  );
}
