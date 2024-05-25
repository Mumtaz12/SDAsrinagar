import React from "react";
import { Divider, Container, Table, Header } from "semantic-ui-react";

import { backend, main_backend_path } from "../../constants/constants";

import PageContainer from "../../components/PageContainer/PageContainer";
import DateCell from "../../components/DateCell";

export default function BOCAMinutes({ data }) {
  return (
      <PageContainer>
        <Divider />
        <Header>BOCA Minutes</Header>

        <Table celled unstackable>
          <Table.Header>
            <Table.Row textAlign='center'>
              <Table.HeaderCell width={1}>S.No</Table.HeaderCell>
              <Table.HeaderCell width={3}>Dated</Table.HeaderCell>
              <Table.HeaderCell>Title of Download File</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {data.map((item, index) => {

              return (
                  <Table.Row key={index} textAlign='center'>
                    <Table.Cell>{index + 1}</Table.Cell>

                      <DateCell date={new Date(item.date)} />

                    <Table.Cell>
                      <a
                          target='_blank'
                          href={main_backend_path + item["file"]["url"]}
                      >
                        {item["title"]}
                      </a>
                    </Table.Cell>
                  </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </PageContainer>
  );
}

export async function getServerSideProps(context) {
  try {
    let result = await fetch(backend + "boca-minutes?_sort=date:DESC");

    if (!result.ok) {
      throw new Error("Failed to fetch data");
    }

    let data = await result.json();

    return {
      props: { data },
    };
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return {
      props: { data: [] }, // Return an empty array if fetching fails
    };
  }
}
