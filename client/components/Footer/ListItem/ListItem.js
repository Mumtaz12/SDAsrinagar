import React from "react";

import styles from "./ListItem.module.css";



export default function ListItem({ data, title }) {
  return (
    <div className={styles["main_wrapper"]}>
      <h5>{title}</h5>
      <ul>
        {data.map((link) => {
          return (
            <li>
              <a href={link["link"]}>{link["title"]}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
