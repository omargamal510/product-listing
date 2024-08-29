import React from "react";
import styles from "./Slider.module.css";
import Image from "next/image";

const imageStyle = {
  width: "100%",
  height: "100%",
};

export default function Slider() {
  return (
    <>
      <div className="slider">
        <div className={styles.sliderContainer}></div>
      </div>
    </>
  );
}
