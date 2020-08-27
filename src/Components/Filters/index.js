import React, {useEffect,useState}from 'react';
import {Form, InputGroup, Container, Col, Row, Button} from 'react-bootstrap';
import DatePick from ".././DatePicker";
import "./style.css";
import BrandFilters from './BrandFilters/index'
import ProductCategories from './ProductCategories/index'

function Filters(props) {
    const [arr,setArr]= useState([]);
    const asyncAction = async () =>{
        const res = await (await fetch(`https://jsonplaceholder.typicode.com/users`)).json();
        setArr(res);
    }
    useEffect(()=>{
       asyncAction();
    });
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
                                <ProductCategories categories = {arr.map(task => task.name)}/>
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
                <Form.Group as={Col} md="3" className={"checkbox-style"} controlId="validationCustom02">
                    <Form.Label>Бренд</Form.Label>
                    <BrandFilters brands={arr.map(task => task.name)} />
                </Form.Group>

            </Form.Row>
            <Button variant="outline-dark" type="submit">
                Получить статистику
            </Button>
        </Form>

    );
}

export default Filters;
