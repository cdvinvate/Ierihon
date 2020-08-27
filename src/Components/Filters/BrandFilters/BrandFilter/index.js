import React, {Component} from 'react';
import {Form} from 'react-bootstrap'
export default ({brand})=> {
    return (
        <div>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label={brand}/>
            </Form.Group>
        </div>
    );
}

