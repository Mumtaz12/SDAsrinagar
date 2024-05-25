import React from "react";
import { Table, Header } from "semantic-ui-react";
import PageContainer from "../../components/PageContainer/PageContainer";

let members = [
      {
        name:
            "Administrative Secretary to the Government, Housing  &  Urban Development Department",
        designation: "Chairman",
      },

      {
        name: "Principal Secretary to the Government,Forest,Ecology and Environment Department",
        designation: "Vice Chairman",
      },
      {
        name: "Secretary to the Government,Revenue Department",
        designation: "Member",
      },
      {
        name: "Secretary to the Government,Planning Development & Monitoring Department",
        designation: "Member",
      },
      {
        name: "Divisional Commissioner, Kashmir",
        designation: "Member",
      },

      {
        name: "Deputy Commissioner, Srinagar",
        designation: "Member",
      },

      {
        name: "Commissioner, Srinagar Municipal Corporation",
        designation: "Member",
      },
      {
        name: "Vice Chairman Srinagar Development Authority",
        designation: "Member Secretary",
      },

      {
        name: "Chief Town Planner,Kashmir",
        designation: "Member",
      },

      {
        name: "Representative of the Finance Department not below the rank of Additional Secretary",
        designation: "Member",
      },

      {
        name: "Chief Architect,J&K",
        designation: "Member",
      },
      {
        name: "Chief Engineer (R&B), Kashmir",
        designation: "Member",
      },

    ];

export default function Board() {
  return (
      <PageContainer>
        <Header>SDA Board Members</Header>
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
