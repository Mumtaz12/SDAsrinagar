import PageContainer from "../components/PageContainer/PageContainer";
import { Header, Table, Divider } from "semantic-ui-react";
import { backend, main_backend_path } from "../constants/constants";

export default function Applications({ downloads }) {
  return (
      <PageContainer>
        <Header>Submission of Applications at Single Window</Header>
        <Divider />
        <Table celled unstackable>
          <Table.Header>
            <Table.Row textAlign='center'>
              <Table.HeaderCell width={1}>S.No</Table.HeaderCell>
              <Table.HeaderCell>Title of Download File</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {downloads.map((download, index) => (
                <Table.Row key={index} textAlign='center'>
                  <Table.Cell>{index + 1}</Table.Cell>
                  <Table.Cell>
                    <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href={main_backend_path + download.file.url}>
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

export async function getServerSideProps() {
  try {
    const result = await fetch(backend + "applications");
    const data = await result.json();
    return {
      props: { downloads: data },
    };
  } catch (error) {
    console.error("Error fetching application data:", error);
    return {
      props: { downloads: [] }, // Provide empty downloads array
    };
  }
}
