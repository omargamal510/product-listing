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
        <div>
          <h1>Our Products</h1>
          <div className={styles.products}>
            {data.map((ele) => (
              <Link href={`/products/${ele.id}`}>
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
                  <p>{ele.price}</p>
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
