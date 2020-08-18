import React from 'react';
import {Form, InputGroup, Container, Col,Row} from 'react-bootstrap';
import DatePick from "./DatePicker";
import "./Filters.css";

function Filters() {
    return (
        <Container className={"container-form"}>
            <Form.Group>
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
                                        <Col md="10"><DatePick/></Col></Row>
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
                        <Form.Label>Last name</Form.Label>
                        <Form.Control as="select" multiple>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
            </Form.Group>
        </Container>

    );
}

export default Filters;
