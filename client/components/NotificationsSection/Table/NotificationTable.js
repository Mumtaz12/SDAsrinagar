
import React from "react";
import { Table } from "semantic-ui-react";
import { main_backend_path } from "../../../constants/constants";
import DateCell from "../../DateCell"; // Assuming this is the correct import for backend path

console.log(main_backend_path);

export default function NotificationTable(props) {
    return (
        <Table celled unstackable>
            <Table.Header>
                <Table.Row textAlign='center'>
                    <Table.HeaderCell width={1}>S.No</Table.HeaderCell>
                    <Table.HeaderCell width={3}>Dated</Table.HeaderCell>
                    <Table.HeaderCell>Title of Download File</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <tbody>
            { props.data && props.data.map((item, index) => {

                return (
                    <tr key={index} style={{textAlign: 'center'}} >
                        <td>{index + 1}</td>
                        <DateCell date={new Date(item.date)} />
                        <td style={{textAlign: 'left'}}>
                            {item && item["file"] && item["file"]["url"] ? (
                                <a
                                    href={main_backend_path + item["file"]["url"]}
                                    target='_blank' // Add target='_blank' here for external links
                                    rel='noopener noreferrer' // Add rel='noopener noreferrer' for security reasons
                                >
                                    {item["title"]}
                                </a>
                            ) : (
                                item["title"]
                            )}
                        </td>
                    </tr>
                );
            })}
            </tbody>
        </Table>
    );
}
