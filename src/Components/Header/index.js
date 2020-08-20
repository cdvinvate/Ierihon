import React from 'react';
import {Navbar, Nav, Col} from "react-bootstrap";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import StatisticsPage from '../../Pages/StatisticsPage';
import "./style.css";
import Pointsofsales from '../../Pages/Pointsofsales';

function Header() {
    return (
        <>
            <Navbar variant="light" className={"nav-header"}>


                <Col md={9}><Navbar.Brand>"CBJ - Иерихон"</Navbar.Brand></Col>
                <Col md={3}>
                    <Nav>
                        <Nav.Link href="/">Статистика</Nav.Link>
                        <Nav.Link href="/pointsofsales">Точки продаж</Nav.Link>
                        <Nav.Link href="/#">...</Nav.Link>
                    </Nav>
                </Col>


            </Navbar>

            <Router>
                <Switch>
                    <Route exact path="/" component={StatisticsPage}/>
                    <Route exact path="/pointsofsales" component={Pointsofsales}/>


                </Switch>

            </Router>
        </>
    )
}

export default Header;