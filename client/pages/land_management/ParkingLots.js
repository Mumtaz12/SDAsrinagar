import React from 'react'
import { Container,Header,Table } from 'semantic-ui-react'

let DATA = [
    {
        loc:"Multilevel parking at Sheikh Bagh (under construction)",
        land:"13.11 kanals",
        capacity:"430 four- wheelers 50 two- wheelers"
    },

    {
        loc:"Multilevel parking at Old State Motor Garages (under construction)",
        land:"13.2 kanals",
        capacity:"467 four wheelers 130 two wheelers"
    },

    {
        loc:"Residency Road near SBI Lalchowk",
        land:"1.9 kanals",
        capacity:"40-50 vehicles"
    },
    {
        loc:"Poloview Lalchowk",
        land:"1.10 kanals",
        capacity:"50-60 vehicles"
    },
    {
        loc:"Old KMD Bus Stand, Lalchowk (Macanized Parking)",
        land:"10.7 kanals",
        capacity:"286 four- wheelers"
    },
    {
        loc:"Nehru Park, Boulevard",
        land:"4.6 kanals",
        capacity:"100-110 vehicles"
    },
    {
        loc:"I.G. Road near Exhibition",
        land:"9.15 kanals",
        capacity:"100 four wheelers"
    },
    {
        loc:"Batamaloo, near baqa masjid",
        land:"6.5 kanals",
        capacity:"150 four wheelers"
    },

]

export default function ParkingLots() {
    return (
        <div style={{padding:"2rem"}}>
            <Header>
                SDA Parking Lots
            </Header>

            <Container>

        <Table celled unstackable>
          <Table.Header>
            <Table.Row textAlign="center">
              <Table.HeaderCell width={1}>S.No</Table.HeaderCell>
              <Table.HeaderCell>Location of Parking Lots</Table.HeaderCell>
              <Table.HeaderCell>Land Measuring (approx.)</Table.HeaderCell>
              <Table.HeaderCell>Capacity of Parking Vehicles</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {DATA.map((item, index) => {
              return (
                <Table.Row textAlign="center">
                  <Table.Cell>{index + 1}</Table.Cell>
                  <Table.Cell>{item["loc"]}</Table.Cell>
                  <Table.Cell>{item["land"]}</Table.Cell>
                  <Table.Cell>{item["capacity"]}</Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
            </Container>
        </div>
    )
}
