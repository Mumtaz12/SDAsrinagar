import React from "react";

import Link from "next/link";

import { Header, Container, Image } from "semantic-ui-react";

import { main_backend_path } from "../../constants/constants";

import styles from "./LandUseSection.module.css";


export default function LandUseSection() {
  return (
    <div className={styles["main_wrapper"]}>
      <Container>
        <div className={styles["sub_wrapper"]}>
          <a
            target='_blank'
            href={
              main_backend_path + "/uploads/Final_Landuse_Plan_0eed3696ed.pdf"
            }>
            <div className={styles["map_wrapper"]}>
              <Header style={{ color: "white", textAlign: "center" }} as='h3'>
                LAND USE MAP-2035
              </Header>
              <Image rounded src='/assets/land_use_map.png' size='medium' />
            </div>
          </a>

          <Link href='/gallery/607ebaaccab21b743ae11521' legacyBehavior>
            <div className={styles["map_wrapper"]}>
              <Header style={{ color: "white" }} as='h3'>
                HOUSING PROJECTS
              </Header>
              <Image rounded src='/assets/housing.jpeg' size='medium' />
            </div>
          </Link>

          <Link href='/gallery/607ebb53cab21b743ae1153d' legacyBehavior>
            <div className={styles["map_wrapper"]}>
              <Header style={{ color: "white" }} as='h3'>
                COMMERCIAL PROJECTS
              </Header>
              <Image rounded src='/assets/commercial.jpeg' size='medium' />
            </div>
          </Link>
        </div>
      </Container>
    </div>
  );
}
