import React from 'react';
import {Table, Button, Form} from 'react-bootstrap';
function DataTable ({arr}) {


    const options = arr.map(r => (
        <tr key={r.id} >
            <td>{r.id}</td>
            <td>{r.name}</td>
            <td>{r.username}</td>
            <td>{r.address.street}</td>
        </tr>
    ))
    return(
        <Form>
    <Table striped bordered hover size>
        <thead>
        <tr>
            <th>File Name</th>
            <th>Parent Directory</th>
            <th>Creation Date</th>
            <th>Access Date</th>
        </tr>
        </thead>
        <tbody>
        {options}
        </tbody>
    </Table>
            <Button variant="secondary">Добавить новую точку продаж</Button>
        </Form>
    )
}

export default DataTable;