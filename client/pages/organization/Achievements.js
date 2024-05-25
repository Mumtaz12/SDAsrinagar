import React from "react";

import { Header, Container } from "semantic-ui-react";

import Markdown from "../../components/Markdown/Markdown";

import styles from "../../styles/TextAlign.module.css";

import { backend } from "../../constants/constants";

export default function Achievements(props) {
  return (
    <div style={{ padding: "2rem 0" }}>
      <Container className={styles["wrapper"]}>
        <Header as='h3'> Achievements</Header>
        <Markdown markdown={props["data"]["desc"]} />
      </Container>
    </div>
  );
}

export async function getServerSideProps(context) {
  const response = await fetch(backend + "achievement");
  let data = await response.json();
  console.log(data);
  return {
    props: {
      data: data,
    },
  };
}
