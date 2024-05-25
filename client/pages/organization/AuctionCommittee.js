import React from "react";
import { Container, Header, Table } from "semantic-ui-react";
import PageContainer from "../../components/PageContainer/PageContainer";

let members = [
  {
    name: "Vice Chairman / Chairperson, SDA",
    designation: "Chairman",
  },
  {
    name: "Director, Land Management",
    designation: "Member",
  },
  {
    name: "Senior Town Planner, SDA",
    designation: "Member",
  },
  {
    name: "Secretary, SDA",
    designation: "Member",
  },
  {
    name: "Financial Advisor/CAO, SDA",
    designation: "Member",
  },
  {
    name: "Executive Engineer, SDA",
    designation: "Member",
  },
];

export default function AuctionCommittee() {
  return (
      <PageContainer>
        <Header>Auction Committee</Header>
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
                  <Table.Cell>{member.name}</Table.Cell>
                  <Table.Cell>{member.designation}</Table.Cell>
                </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </PageContainer>
  );
}
