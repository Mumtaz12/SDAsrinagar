import React from "react";
import { Header, Container, Divider, Table } from "semantic-ui-react";

import { backend, main_backend_path } from "../../constants/constants";

import PageContainer from "../../components/PageContainer/PageContainer";
import DateCell from "../../components/DateCell";

export default function Applications(props) {
  return (
    <div>
      <PageContainer>
        <Header>RTI Applications</Header>
        <Divider />
        <Container>
          <Table celled unstackable>
            <Table.Header>
              <Table.Row textAlign='center'>
                <Table.HeaderCell width={1}>S.No</Table.HeaderCell>
                <Table.HeaderCell width={3}>Dated</Table.HeaderCell>
                <Table.HeaderCell>Title of Download File</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {props.downloads.map((download, index) => {
                return (

                  <Table.Row textAlign='center'>
                    <Table.Cell>{index + 1}</Table.Cell>

                      <DateCell date={new Date(download.date)} />

                    <Table.Cell>
                      <a
                        target='_blank'
                        href={main_backend_path + download["file"]["url"]}>
                        {download["title"]}
                      </a>
                    </Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table>
        </Container>
      </PageContainer>
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    let result = await fetch(backend + "rti-applications");

    let data = await result.json();

    return {
      props: { downloads: data },
    };
  } catch (error) {
    return {
      props: {},
    };
  }
}
