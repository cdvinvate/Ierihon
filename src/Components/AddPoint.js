import React from 'react';
import {Form, InputGroup, Container, Col, Row, Button} from 'react-bootstrap';
import "./AddPoint.css";
function AddPoint() {
    return (
        <Form className = {"form-addpoint"}>
            <Form.Group as = {Row} controlId="validationCustom01">
                <Col md ="2">
                <Form.Label >Название</Form.Label>
                </Col>
                <Col md ="3">
                    <Form.Control
                    required
                    type="text"
                    defaultValue=""
                />
                </Col>
            </Form.Group>

            <Form.Group as = {Row} controlId="validationCustom01">
                <Col md ="2">
                    <Form.Label >Область</Form.Label>
                </Col>
                <Col md ="3">
                    <Form.Control
                        required
                        type="text"
                        defaultValue=""
                    />
                </Col>
            </Form.Group>

            <Form.Group as = {Row} controlId="validationCustom01">
                <Col md ="2">
                    <Form.Label >Город</Form.Label>
                </Col>
                <Col md ="3">
                    <Form.Control
                        required
                        type="text"
                        defaultValue=""
                    />
                </Col>
            </Form.Group>

            <Form.Group as = {Row} controlId="validationCustom01">
                <Col md ="2">
                    <Form.Label >Адрес</Form.Label>
                </Col>
                <Col md ="3">
                    <Form.Control
                        required
                        type="text"
                        defaultValue=""
                    />
                </Col>
            </Form.Group>

            <Form.Group as = {Row} controlId="validationCustom01">
                <Col md ="2">
                    <Form.Label >Номер телефона</Form.Label>
                </Col>
                <Col md ="3">
                    <Form.Control
                        required
                        type="text"
                        defaultValue=""
                    />
                </Col>
            </Form.Group>
            <Button variant="outline-dark" className = {"button-addpoint"}>
                Назад
            </Button>
            <Button variant="secondary" className = {"button-addpoint"}>
                Сохранить
            </Button>
        </Form>
    );
}

export default AddPoint;
