import React from 'react';
import {Form, InputGroup, Container, Col, Row, Button} from 'react-bootstrap';
import DatePick from ".././DatePicker";
import "./style.css";

function Filters() {
    return (

        <Form className={"container-form"}>
            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Row>
                        <Form.Group as={Col} md="6" controlId="validationCustom01">
                            <Form.Label>Область*</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Костромская область"
                                defaultValue=""
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom02">
                            <Form.Label>Категория товара</Form.Label>
                            <Form.Control as="select" defaultValue="Choose...">
                                <option>Не выбрано..</option>
                                <option>...</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="6" controlId="validationCustom01">
                            <Form.Label>Город*</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Кострома"
                                defaultValue=""
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom02">
                            <Form.Label>Выберите период формирования статистики*</Form.Label>
                            <Form.Row>
                                <Form.Group as={Col} md="6" controlId="validationCustom02">
                                    <Row> <Col md="2"><Form.Label>От</Form.Label></Col>
                                        <Col md="10"><DatePick controlId="validationCustom02"/></Col></Row>
                                </Form.Group>
                                <Form.Group as={Col} md="6" controlId="validationCustom02">
                                    <Row> <Col md="2"><Form.Label>До</Form.Label></Col>
                                        <Col md="10"><DatePick/></Col></Row>
                                </Form.Group>
                            </Form.Row>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="6" controlId="validationCustom01">
                            <Form.Label>Точка продажи*</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="ул.Советская 119А"
                                defaultValue=""
                            />
                        </Form.Group>
                    </Form.Row>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom02">
                    <Form.Label>Бренд</Form.Label>
                    <Form.Control as="select" multiple>
                        <option>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Бренд 1"/>
                            </Form.Group>
                        </option>
                        <option>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="2"/>
                            </Form.Group>
                        </option>
                        <option>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox"/>
                            </Form.Group>
                        </option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                </Form.Group>

            </Form.Row>
            <Button variant="outline-dark" type="submit">
                Получить статистику
            </Button>
        </Form>

    );
}

export default Filters;
