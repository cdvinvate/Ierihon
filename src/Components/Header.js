import React from 'react';
import { Navbar, Nav, Col} from "react-bootstrap";
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import Statistics from '../Pages/Statistics';
import Pointsofsales from '../Pages/Pointsofsales';
function Header() {
    return (
        <>
        <Navbar variant="light">

            
                <Col md={9}><Navbar.Brand href="/">"CBJ - Иерихон"</Navbar.Brand></Col>
                <Col md={3}>
                    <Nav>
                        <Nav.Link href="/statistics">Статистика</Nav.Link>
                        <Nav.Link href="/pointsofsale">Точки продаж</Nav.Link>
                        <Nav.Link href="/#">...</Nav.Link>
                    </Nav>
                </Col>
            

        </Navbar>

        <Router>
<Switch>
    <Route exact path = "/statistics" component = {Statistics} />
    <Route exact path = "/pointsofsale" component = {Pointsofsales} />
    
        
    
</Switch>

        </Router>
        </>
    )
}
export default Header;