import React from "react";

import { Container, Header, Divider, Table } from "semantic-ui-react";

let CONTACT = [
  {
    name: "Dr.Owais Ahmed,IAS",
    designation: "Vice Chairman",
    phone: "0194-2493191",
    mobile: "NA",
    email: "vcsda-jk[at]nic[dot]in",
  },
{
    name: "Ms. Sumera Shamim, JKAS",
    designation: "Director Land Management (FAA)",
    phone: "0194-2490442 ",
    mobile: "NA",
    email: "srinagardevelopmentauthority[at]gmail[dot]com",
  },

 {
    name: "Mr. Peerzada Ahtisham-ul-Haq",
    designation: "Financial Advisor/CAO",
    phone: "0194-2493199",
    mobile: "NA",
    email: "srinagardevelopmentauthority[at]gmail[dot]com",
  },
{
    name: " ",
    designation: "Secretary",
    phone: "0194-2493122",
    mobile: "NA",
    email: "srinagardevelopmentauthority[at]gmail[dot]com",
  },

    {
    name: "Showkat Ahmad Mattoo",
    designation: "Dy. Director Land Management",
    phone: "0194-2490443",
    mobile: "NA",
    email: "mattoo.showkat[at]yahoo[dot]in",
  },



];

export default function Contact() {
  return (
    <div style={{ padding: "2rem" }}>
      <Container>
        <Header>Contact Us</Header>
        <Divider />
        <Table celled unstackable selectable>
          <Table.Header>
            <Table.Row textAlign='center'>
              <Table.HeaderCell width={1}>S.No</Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Designation</Table.HeaderCell>
              <Table.HeaderCell>Phone</Table.HeaderCell>
              <Table.HeaderCell>Mobile</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {CONTACT.map((member, index) => {
              return (
                <Table.Row textAlign='center'>
                  <Table.Cell>{index + 1}</Table.Cell>
                  <Table.Cell>{member["name"]}</Table.Cell>
                  <Table.Cell>{member["designation"]}</Table.Cell>
                  <Table.Cell>{member["phone"]}</Table.Cell>
                  <Table.Cell>{member["mobile"]}</Table.Cell>
                  <Table.Cell>{member["email"]}</Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </Container>
    </div>
  );
}
