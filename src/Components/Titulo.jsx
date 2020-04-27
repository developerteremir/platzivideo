import React from 'react';
import { Row, Col } from 'react-bootstrap';


const Titulo = ({ children, title }) => {
	return (
		<Row>
		    <Col xs={12} className="mx-auto text-center">
		    	<h1 className="display-4 text-gray">{title}</h1>
		    	<hr className="w-25 pb-5 py-3 line-br" />
		    </Col>
		    {children}
		  </Row>
	);
};

export default Titulo;