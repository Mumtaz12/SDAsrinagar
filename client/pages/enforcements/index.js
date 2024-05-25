import React from "react";
import { Header, Container, Divider, Table } from "semantic-ui-react";
import { backend, main_backend_path } from "../../constants/constants";
import PageContainer from "../../components/PageContainer/PageContainer";
import DateCell from "../../components/DateCell";

export default function Downloads({ downloads }) {
  return (
      <PageContainer>
        <Divider />
        <Container>
          <Header>Encroachment cases/Action taken</Header>
          <Divider />
          <Table celled unstackable>
            <Table.Header>
              <Table.Row textAlign='center'>
                <Table.HeaderCell width={1}>S.No</Table.HeaderCell>
                <Table.HeaderCell width={3}>Dated</Table.HeaderCell>
                <Table.HeaderCell>Title of the File</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {downloads.map((download, index) => (
                  <Table.Row key={index} textAlign='center'>
                    <Table.Cell>{index + 1}</Table.Cell>
                      <DateCell date={new Date(download.date)} />

                    <Table.Cell>
                      <a
                          href={main_backend_path + download.file.url}
                          target='_blank'
                          rel='noopener noreferrer'
                      >
                        {download.title}
                      </a>
                    </Table.Cell>
                  </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Container>
      </PageContainer>
  );
}

export async function getStaticProps() {
  try {
    let result = await fetch(backend + "enforcements");
    if (!result.ok) {
      throw new Error("Failed to fetch enforcements");
    }
    let data = await result.json();
    return {
      props: { downloads: data },
    };
  } catch (error) {
    console.error("Error fetching enforcements:", error);
    return {
      props: { downloads: [] }, // Return empty downloads array in case of error
    };
  }
}
