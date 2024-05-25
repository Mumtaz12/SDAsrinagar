import React from "react";

import { Container, Header, Divider } from "semantic-ui-react";

import InformationTable from "../../components/InformationTable/InfoTable";

import PageContainer from "../../components/PageContainer/PageContainer";

import { backend } from "../../constants/constants";

export default function Page(props) {
  return (
    <PageContainer>
      <Header as='h3'>{props.title}</Header>
      <Divider />
      <InformationTable data={props.data} />
    </PageContainer>
  );
}

export async function getServerSideProps(context) {
  const { params, req, res } = context;
  let page = params.page;

  let url = "";
  let title = "";

  switch (page) {
    case "Notices":
      url = "public-notices?_sort=date:DESC";
      title = "Public Notices";
      break;

    case "Tenders":
      url = "tenders?_sort=date:DESC";
      title = "Tenders";
      break;

    case "Circular_Order":
      url = "circular-and-orders?_sort=date:DESC";
      title = "Circulars and Orders";
      break;

    case "EOI":
      url = "eois?_sort=date:DESC";
      title = "Expression of Interest";
      break;

    case "STQ":
      url = "short-term-quotations?_sort=date:DESC";
      title = "Short Term Quotations";
      break;

    default:
      url = "public-notices?_sort=date:DESC";
      break;
  }

  let data = await (await fetch(backend + url)).json();

  return {
    props: { data, title },
  };
}
