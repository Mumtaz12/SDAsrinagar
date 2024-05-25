import React from "react";
import { Container, Header, Table } from "semantic-ui-react";
import PageContainer from "../../components/PageContainer/PageContainer";

let members = [
  {
    name: "Director Land Management",
    designation: "Chairman",
  },
  {
    name: "Financial Advisor/CAO",
    designation: "Member",
  },
  {
    name: "Joint Director (M&P) Industries & Commerce",
    designation: "Member",
  },
  {
    name: "Dy. Director, Enforcement",
    designation: "Member",
  },
  {
    name: "Executive Engineer",
    designation: "Member",
  },
  {
    name: "Administrative Officer",
    designation: "Member Secretary",
  },
];

export default function PurchaseCommittee() {
  return (
      <PageContainer>
        <Header>Purchase Committee</Header>

        <p>
          SDA Purchase Committee has been re-constituted vide SDA Order No.
          SDA/VC/476 dated 04/03/2020 and comprises of following officers:
        </p>
        <Table celled unstackable>
          <Table.Header>
            <Table.Row textAlign="center">
              <Table.HeaderCell width={1}>S.No</Table.HeaderCell>
              <Table.HeaderCell>Member</Table.HeaderCell>
              <Table.HeaderCell>Designation</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {members.map((member, index) => (
                <Table.Row key={index} textAlign="center">
                  <Table.Cell>{index + 1}</Table.Cell>
                  <Table.Cell>{member["name"]}</Table.Cell>
                  <Table.Cell>{member["designation"]}</Table.Cell>
                </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </PageContainer>
  );
}
