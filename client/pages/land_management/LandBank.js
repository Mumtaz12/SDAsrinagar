import React from 'react';
import { Header, Table, Divider, Container } from 'semantic-ui-react';

const DETAILS = [
    {
        loc: 'Bemina',
        area: '5217 Kanals',
        purpose: 'Development of Bemina Barthana Housing colony and Govt. Office Note: the land was originally Rakh land',
    },
    {
        loc: 'Parimpora',
        area: '325 kanals-3 marlas-204 sft',
        purpose: 'Development of fruit Mandi Parimpora',
    },
    {
        loc: 'Parimpora',
        area: '274 Kanals of land at Parimpora',
        purpose: 'Development of truck terminal Parimpora',
    },
    {
        loc: 'Nallahmar Road',
        area: '119 Kanal 6 Marlas from Khanyar to Noorbagh (Nallamar Project)',
        purpose: 'Dev. Of 4 Km. Nallamar road and construction of shops',
    },
    {
        loc: 'Bemina',
        area: '7.19Kanals at Bemina',
        purpose: 'Dev. Of 4 Km. Nallamar road and construction of shops',
    },
];

export default function LandBank() {
    return (
        <Container>
            <Divider />

            <Table celled unstackable>
                <Table.Header>
                    <Table.Row textAlign="center">
                        <Table.HeaderCell width={1}>S.No</Table.HeaderCell>
                        <Table.HeaderCell>Location</Table.HeaderCell>
                        <Table.HeaderCell>Area</Table.HeaderCell>
                        <Table.HeaderCell>Purpose</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {DETAILS.map((member, index) => (
                        <Table.Row key={index} textAlign="center">
                            <Table.Cell>{index + 1}</Table.Cell>
                            <Table.Cell>{member.loc}</Table.Cell>
                            <Table.Cell>{member.area}</Table.Cell>
                            <Table.Cell>{member.purpose}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>

            <Divider />
        </Container>
    );
}
