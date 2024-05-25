import React from "react";

import PageContainer from "../components/PageContainer/PageContainer";

import { Divider, Header } from "semantic-ui-react";

export default function About() {
  return (
    <PageContainer>
      <Header>Mission of Srinagar Development Authority(SDA)</Header>
      <Divider />

      <p>
        The mission of the SDA is to implement the Master Plan proposals so that
        the city is developed  in a planned manner. Master Plan is an overall
        plan prepared for the horizon period of twenty years as per the J&K
        Development Act 1970, covering all aspects like Housing, Traffic &
        Transportation, physical infrastructure e.g, electricity, Sewerage,
        Drainage, Water Supply etc; social  infrastructure like education,
        health security, religious etc, Tourism, Trade & Commerce, Industry,
        Commercial recreation  etc. The new colonies/amusement
        parks/recreational facilities/ Shopping Malls/parking Lots are developed
        as per the prescribed planning norms so as to put a check on the
        haphazard growth.
      </p>

      <Divider />

      <Header>Objectives of Srinagar Development Authority (SDA)</Header>
      <p>
        Objectives of the Authority:- The Objectives of the Authority shall be
        to promote and secure the development of the local area for which it is
        constituted, according to plan and for that purpose the Authority shall
        have the power to acquire, hold, manage and dispose of land and other
        property, to carry out building, engineering and other operations, to
        execute works in connection with supply of water and electricity,
        disposal of sewerage and other services and amenities and generally to
        do anything necessary or expedient for purposes of such development and
        for purposes incidental thereto;
      </p>
    </PageContainer>
  );
}
