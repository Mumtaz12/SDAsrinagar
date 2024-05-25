import React from "react";

import styles from "./People.module.css";
import Card from "./Card/Card";

export default function People() {
    return (
        <div className={styles["main_wrapper"]}>
            {/* First Card */}
            <Card
                img="/assets/ps.jpg"
                alt="Portrait of Ms. Mandeep Kaur, IAS"
                name="Ms. Mandeep Kaur, IAS"
                designation="Commissioner Secretary to Govt, Housing and UD Dept JK"
            />

            {/* Second Card */}
            <Card
                img="/assets/vc.jpeg"
                alt="Portrait of Dr. Owais Ahmed, IAS"
                name="Dr. Owais Ahmed, IAS"
                designation="Vice Chairman, Srinagar Development Authority"
            />
        </div>
    );
}
