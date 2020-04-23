import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown  } from "react-bootstrap";


const Header = () => {
	return (

	<div>
		<Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
			  <Navbar.Brand href="#home">
			      <img
			        src="../assets/images/logo-platzi-video.png"
			        width="30"
			        height="30"
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