import React from "react";

import {Header} from "semantic-ui-react"

import styles from "./AboutSection.module.css"

export default function AboutSection() {
  return (
    <div className={styles["main_wrapper"]}>
      <Header textAlign="center" style={{color:"#03045e"}} as="h3">Srinagar Development Authority</Header>
      <p>
        The Srinagar Development Authority was constituted under section 3 of
        Jammu and Kashmir Development Act, 1970, (enforced w.e.f. 31st October
        1970 by Notification S.R.O 518 dated 31-10-1970), the Local Area
        delineated vide SRO 43 dated 2nd February 1971 for the purpose of this
        Act formed the area of jurisdiction of the Authority. First Master Plan
        of the said Local area was approved by Government and notified vide SRO
        754 dated 22nd November 1976. The second Master Plan (2000 – 2021) was
        approved by Government vide Cabinet Decision No. 11/1 dated 16-01-2003
        and notified vide SRO-28 dated 30th January 2003. The Master Plan 2035
        is a third statutory document, wherein Srinagar Metropolitan planning
        limits have been increased from 416 sq kms too 766 sq kms. The Master
        Plan 2035 was approved by State Administrative Council(SAC) and
        subsequently notified Vide SRO 160 dated 07.03.2019
      </p>
    </div>
  );
}
