import React from "react";
import { Header, Container, Divider, Table, Button } from "semantic-ui-react";

import { backend, main_backend_path } from "../../constants/constants";

import PageContainer from "../../components/PageContainer/PageContainer";
import DateCell from "../../components/DateCell";

export default function SeniorityList({ downloads }) {
  return (
      <PageContainer>
        <Header>Seniority List of SDA Employees</Header>
        <Divider />

        <Table celled unstackable>
          <Table.Header>
            <Table.Row textAlign='center'>
              <Table.HeaderCell width={1}>S.No</Table.HeaderCell>
              <Table.HeaderCell width={3}>Dated</Table.HeaderCell>
              <Table.HeaderCell>Title of Download File</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {downloads.map((download,index) => (
                <Table.Row key={download.id} textAlign='center'>
                  <Table.Cell>{index + 1}</Table.Cell>
                  <DateCell date={new Date(download.date)} />
                  <Table.Cell>
                    <a
                        href={main_backend_path + download.file.url}
                        rel="noopener noreferrer" // for security
                    >
                      {download.title}
                    </a>
                  </Table.Cell>
                </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </PageContainer>
  );
}

export async function getServerSideProps(context) {
  try {
    const result = await fetch(backend + "seniority-lists");

    if (!result.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await result.json();

    return {
      props: { downloads: data },
    };
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return {
      props: { downloads: [] },
    };
  }
}
