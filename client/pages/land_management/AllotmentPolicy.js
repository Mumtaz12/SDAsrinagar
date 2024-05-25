import React from "react";

import styles from "../../styles/TextAlign.module.css";

import { Container, Header, Table } from "semantic-ui-react";

let HOUSING = [
  {
    cat: "Scheduled Cast/Tribes",
    percentage: 5,
  },

  {
    cat: "Families of Govt. Servants and other Govt. servants who die in harness",
    percentage: 5,
  },
  {
    cat: "Serving Defense Personal",
    percentage: 2,
  },

  {
    cat: "Ex-Servicemen",
    percentage: 2,
  },
  {
    cat: "War Widows",
    percentage: 1,
  },
  {
    cat: "Families of innocent victims of terrorist violence and Law & Order situation",
    percentage: 4,
  },
  {
    cat: "Severly disabled persons/handicapped person",
    percentage: 2,
  },
  {
    cat: "Recent window (window within one year prior to the date of applications deserving compassionate treatment",
    percentage: 2,
  },
  {
    cat: "Outstanding performers in Arts/Culture/Sports winners of gallantry awards honours of state/central govt.",
    percentage: 2,
  },
];

export default function AllotmentPolicy() {
  return (
    <Container style={{ padding: "3rem" }} className={styles["wrapper"]}>
      <Header>Allotment Policy</Header>

      <Header as='h4'>Housing</Header>
      <p>
        The Government has already laid down a comprehensive policy on
        development of Housing Colonies by Development Authorities and its
        allotments. The policy provides equal opportunity of ‘housing to all’
        categories on self sustenance basis with elements of cross subsidization
        so that the weaker section is provided plots on 50% cost subsidy. The
        distribution of plots is on first come first serve basis or by draw of
        lots barring 5% plots to be allotted under the Discretionary Quota of
        the Government out of the allotment of residential plots in the Housing
        Colonies. The balance 95% plots in housing colony, 75% are to be
        disposed off among the general public and 25 % among different
        categories of people specified below
      </p>

      <div>
        <Table>
          <Table.Header>
            <Table.Row textAlign='center'>
              <Table.HeaderCell width={1}>S.No</Table.HeaderCell>
              <Table.HeaderCell>Category</Table.HeaderCell>
              <Table.HeaderCell>Percentage</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {HOUSING.map((item, index) => {
              return (
                <Table.Row textAlign='center'>
                  <Table.Cell>{index + 1}</Table.Cell>
                  <Table.Cell>{item["cat"]}</Table.Cell>
                  <Table.Cell>{item["percentage"] + "%"}</Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>
      <p style={{ paddingTop: "1.6rem" }}>
        The applications are invited from the categories specifically indicated
        for the general public and are registered in such category separately.
        The No. of plots available are being allotted amongst different
        categories as per percentages indicated above and distributed by lots in
        public in presence of the applicants. Whenever the number of
        applications in any category is less than the No. of plots available in
        that category, the excess plots available in that category will be
        transferred to the general pool.
      </p>

      <Header as='h4'> COMMERCIAL :- </Header>
      <Header as='h5'>
        HOW TO APPLY FOR SHOP / SHOP SITE / COMMERCIAL SPACE.
      </Header>

      <p>
        The Shops / Shopsites and Commercial spaces are allotted through auction
        for a period of 20 years in the first instance on lease / license basis.
      </p>

      <p>
        The Minimum Reserve Premium (Development Charges, Non-Refundable) are
        always indicated in the Auction Notice and the intending applicants /
        bidders are required to file their bids through E-Auction/e-tendering.
      </p>

      <p>
        The bids received are subject to acceptance of the Auction Committee,
        Srinagar Development Authority and usually the highest bids received are
        accepted.
      </p>

      <p>
        The rate of monthly rentals for Shops and Commercial Spaces are fixed
        for a period of five years and subject to increased by 10% after every
        three years. Likewise the annual ground rentals for Commercial sites are
        also fixed (20) twenty years.
      </p>

      <p>
        The Auction Notices are given wide publicity in local leading daily
        newspapers, on electric media and are also available on SDA website.
      </p>
    </Container>
  );
}
