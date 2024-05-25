import React from "react";

import styles from "../../styles/TextAlign.module.css";

import { Container, Header } from "semantic-ui-react";

export default function FutureLandPolicy() {
  return (
    <div>
      <Container style={{ padding: "3rem" }} className={styles["wrapper"]}>
        <Header>Future Land Policy</Header>
        <Header as='h4'>Future Land Acquisition Proposals</Header>
        <p>
          Housing : In view of huge gap in demand and supply, the price of land
          has gone terribly high and the residents of the city especially the
          economically the weaker section, Low Income Groups and even the Middle
          Income Groups are unable to purchase the land in the open market .
          Besides, the land purchased in open market is undeveloped without any
          basic infrastructure like roads, drains, water supply, electric
          infrastructure and sanitation and finally the State Government
          provides the infrastructure in these areas at the cost of other major
          infrastructure of the state. The supply and demand gap has also lead
          to encroachment on River and Nallah Banks and other State Lands
          including greenbelts and water bodies.
        </p>

        <p>
          The Srinagar Development Authority has initiated acquisition of 4200
          kanals of Rakhs land in Village Rakh-i-Gund-Aksha which has been
          transferred by the Government to SDA but the land is under the
          possession of kamas for which the SDA has to pay Rs. 1700.00 lacs as
          compensation to kamas. This entire land has been proposed to be
          developed in to a township .
        </p>

        <p>
          So far the land measuring 440 Kanals -10 marlas have been taken over
          by the SDA.
        </p>

        <p>
          The applications are invited for the categories specifically indicated
          from general public and are registered in such category separately.
          The No. of plots available are being allotted amongst different
          categories as per percentages indicated above and distributed by lots
          in public in presence of the applicants. Whenever the number of
          applications in any category is less than the No. of plots available
          in that category, the excess plots available in that category will be
          transferred to the general pool.
        </p>
      </Container>
    </div>
  );
}
