import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import styles from "./Products.module.css";

export default async function Products() {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/`);

    if (!res.ok) {
      redirect("/not-found");
    }
    const data = await res.json();

    return (
      <>
        <div className="">
          <header className={styles.productsHeader}>
            <h1>Our Products</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusantium maxime, quo non quia soluta sed! Facere possimus
              accusantium et impedit quo nemo, optio ipsum harum quis
              perferendis autem exercitationem numquam.
            </p>
          </header>
          <div className={styles.products}>
            {data.map((ele) => (
              <Link href={`/products/${ele.id}`} key={ele.id}>
                <div className={styles.productsBox}>
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      position: "relative",
                    }}
                  >
                    <img src={ele.image} alt={ele.title} />
                  </div>
                  <p>{ele.title}</p>
                  <p className="text-gray-400">${ele.price}</p>
                </div>

                <br></br>
              </Link>
            ))}
          </div>
        </div>
      </>
    );
  } catch (err) {
    if (err) {
      redirect("/not-found");
    }

    return;
  }
}
