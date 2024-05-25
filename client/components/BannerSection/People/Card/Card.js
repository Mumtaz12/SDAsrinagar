import React from "react";

import styles from "./Card.module.css";



export default function Card(props) {
  return (
    <div className={styles["main_wrapper"]}>
      <div
        style={{
          backgroundImage: `url(${props.img})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className={styles["image"]}></div>

      <div className={styles["information"]}>
        <h5>{props.name}</h5>
        <p>{props.designation}</p>
      </div>
    </div>
  );
}
