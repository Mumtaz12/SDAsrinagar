import React from "react";

import { Header, Container, Divider } from "semantic-ui-react";

import { main_backend_path } from "../../constants/constants";
import Link from "next/link";

export default function RTI() {
  return (
    <div style={{ padding: "2rem" }}>
      <Divider />
      <Container>
        <Header as='h2'>Right To Information (RTI)</Header>
        <Header>Right To Information</Header>
        <p>
          The right to information Act, 2005 is a landmark legislation passed by
          the government of India. It is one of very most powerful tool for
          promoting transparency and accountability in the working of every
          public authority with an objective of ushering in good governance.
        </p>

        <Header>RTI PDF DOWNLOADABLE FILES</Header>
        <ul>
	 <li>
            <Link
              href={
                main_backend_path + "/uploads/RTI_DESIGNATED_OFFICERS_a229287926.pdf"
	              }>
             List of Officers Designated  as FAA, PIO and APIO(S)
            </Link>
          </li>

          <li>
            <Link
              href={
                main_backend_path + "/uploads/JK_RTI_Act_2005_bdf32ec4a9.pdf"
              }>
              RTI ACT 2005
            </Link>
          </li>

          <li>
            <Link href={main_backend_path + "/uploads/rtiforms1_5e085cde29.pdf"}>
              RTI FORM
            </Link>
          </li>

          <li>
            <Link
              href={
                main_backend_path +
                "/uploads/handbook10april2021_b490062f24.pdf"
              }>
              RTI HANDBOOK
            </Link>
          </li>
        </ul>


      </Container>
    </div>
  );
}
