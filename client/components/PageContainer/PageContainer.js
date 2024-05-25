import React from "react";

import styles from "./PageContainer.module.css";

export default function PageContainer(props) {

  return(
  <div className={styles["main_wrapper"]} >
    {props.children}
  </div>);

}
