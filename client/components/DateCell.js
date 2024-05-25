// DateCell.js

import React from 'react';
import {Label, Table} from "semantic-ui-react";

function DateCell({ date }) {
    const currentDate = new Date();
    const month = date.toLocaleDateString('en-US', { month: 'short' });
    const day = date.toLocaleDateString('en-US', { day: 'numeric' });
    const year = date.toLocaleDateString('en-US', { year: 'numeric' });


    // Check if the date is the same as the current date
    // const isNew = date.toDateString() === currentDate.toDateString();
    const diffMonths = (currentDate.getFullYear() - date.getFullYear()) * 12 + (currentDate.getMonth() - date.getMonth());

    // Check if the date is up to 2 months old
    const isNew = diffMonths <= 2;

    return (
        <Table.Cell>
            <div className="date-cell" style={{ fontSize: '0.8em' }}>
                {isNew && <Label style={{ fontSize: '.8em', backgroundColor: '#0070f3', color:'white', borderRadius:'10px' }}>New</Label>}
                <div style={{ fontSize: '1em' }}>{month}</div>
                <div style={{ fontSize: '1.5em', fontWeight: 'bold', color:'#0070f3'  }}>{day}</div>
                <div style={{ fontSize: '0.8em',fontWeight: 'bold' }}>{year}</div>
            </div>
        </Table.Cell>
    );
}

export default DateCell;