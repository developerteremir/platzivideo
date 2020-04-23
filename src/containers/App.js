import React from 'react';
import Header from '../Components/Header.jsx';
import { Container, Row, Col } from 'react-bootstrap';

import'../assets/styles/App.scss';

const App = () => {
	return (

		<Container fluid>
		  <Row>
		    <Col ><Header /></Col>
		  </Row>
		</Container>
	)
}

export default App;