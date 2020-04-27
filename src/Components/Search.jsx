import React from 'react';
import { Form } from 'react-bootstrap';
import '../assets/styles/Search.scss';

const Search = () => (
	<Form className="main">
	  <Form.Group controlId="formBasicEmail">
	    <Form.Label className="main__title">¿Qué quieres ver hoy?</Form.Label>
	    <Form.Control className="input" type="text" placeholder="Buscar..." />
	  </Form.Group>
	</Form>
);

export default Search;