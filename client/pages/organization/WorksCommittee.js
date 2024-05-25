import React from "react";

import { Container, Header, Table } from "semantic-ui-react";

let members = [
  {
    name: "Vice Chairman/Chairperson,SDA",
    designation: "Chairman",
  },

  {
    name: "Director, land Management,SDA",
    designation: "Member",
  },
  {
    name: "Senior Town Planner",
    designation: "Member",
  },
  {
    name: "Secretary,SDA",
    designation: "Member",
  },
  {
    name: "Executive Engineer",
    designation: "Member",
  },
  {
    name: "Financial Advisor/CAO,SDA",
    designation: "Member",
  },
];

export default function WorksCommittee() {
  return (
    <div style={{ padding: "3.5rem" }}>
      <Container>
        <Header>Works Committee</Header>

        <p>
          The works Committee of the Srinagar Development Authority was
          constituted in the year 1998,vide Order No.SDA/VC/203 of 1998
          dated;23-03-1998 to ensure effective implementation of the Works
          Programme of the Organization and its monitoring /supervision by a
          Competitive body. However the said order has been modified vide Order
          No.SDA/VC/397 dated;28-03-2011 because some Members of the said
          Committee have either been re-designated or abolished, therefore the
          revival of the Works Committee became immenent to be made as per the
          present dispensation. Now, the Works Committee of the SDA has been
          revived and shall be comprised upon of the following officers as
          members of the said Committee.
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
            {members.map((member, index) => {
              return (
                  <Table.Row key={index} textAlign="center">
                    <Table.Cell>{index + 1}</Table.Cell>
                    <Table.Cell>{member["name"]}</Table.Cell>
                    <Table.Cell>{member["designation"]}</Table.Cell>
                  </Table.Row>
              );
            })}
          </Table.Body>

        </Table>
      </Container>
    </div>
  );
}
