import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <header>
          <h1 className={styles.navTitle}>
            {" "}
            <Link href={"/"}>X-Products</Link>
          </h1>
        </header>

        <ul className={styles.navbarUl1}>
          <li>Cart</li>
          <li>Wishlist</li>
        </ul>
      </nav>
    </>
  );
}
