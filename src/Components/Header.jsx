import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown  } from "react-bootstrap";
import logo from '../assets/static/logo-platzi-video-BW2.png'
import userIcon from '../assets/static/user-icon.png';

const Header = () => {
	return (
	<div>
		<Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
			  <Navbar.Brand href="#home">
			      <img
			        src={logo}
			        width="150"
			        className="d-inline-block align-top"
			        alt="Logo"
			      />
		      </Navbar.Brand>
			  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
			  <Navbar.Collapse id="responsive-navbar-nav">
			    <Nav className="ml-auto">
			      <NavDropdown title="Perfil" id="collasible-nav-dropdown" drop="left" >
			        <NavDropdown.Item href="#action/3.1">Cuenta</NavDropdown.Item>
			        <NavDropdown.Item href="#action/3.2">Cerrar Sesión</NavDropdown.Item>
			      </NavDropdown>
			    </Nav>
			  </Navbar.Collapse>
			</Navbar>
		</div>
	);
}

export default Header;