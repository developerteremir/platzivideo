import React, { useState, useEffect } from 'react';
import Header from '../Components/Header.jsx';
import { Container, Row, Col } from 'react-bootstrap';
import Search from '../Components/Search.jsx';
import'../assets/styles/App.scss';
import Categories from '../Components/Categories.jsx';
import Carousel from '../Components/Carousel.jsx';
import CarouselItem from '../Components/CarouselItem.jsx';
import Footer from '../Components/Footer.jsx';
import useInitialState from '../hooks/useInitialState.js';

const API = 'http://localhost:3000/initalState';


import Titulo from "../Components/Titulo.jsx";
import Contactanos from "../Components/Contactanos.jsx";

const App = () => {
	const initialState= useInitialState(API);
	
	return (
		<Container fluid>
		  <Row>
		    <Col><Header /></Col>
		  </Row>
		  <Row>
		    <Col><Search /></Col>
		  </Row>
		  {initialState.mylist?.length > 0  && (
		  	<Row>
		  		<Col>
			    	<Categories title="Mi Lista">
			          <Carousel>
			            {initialState.mylist.map(item => 
			          		<CarouselItem key={item.id} {...item}  />
			          	)}
			          </Carousel>
			        </Categories>
			    </Col>
		  	</Row>
		  )}
		  <Row>
		    <Col>
		    	<Categories title="Tendencias">
		          <Carousel>
		             {initialState.trends?.map(item => 
			          	<CarouselItem key={item.id} {...item}  />
			          )}
		          </Carousel>
		        </Categories>
		    </Col>
		  </Row>
		  <Row>
		  	<Col>
		    	<Categories title="Originales de Platzi Video">
		          <Carousel>
		            {initialState.originals?.map(item => 
			          	<CarouselItem key={item.id} {...item}  />
			        )}
		          </Carousel>
		        </Categories>
		    </Col>
		  </Row>
		  <div className="fondo-servicio">
		  </div>
		  <section id="tagContacto" className="pb-5 pt-5">
				<Container>
					<Titulo title="Contáctanos">
						<Contactanos />
					</Titulo>
				</Container>
			</section>
		   <Row>
		    <Col><Footer /></Col>
		  </Row>
		</Container>
	)
}

export default App;
