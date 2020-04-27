import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import "../assets/styles/Contacto.scss";

const Contactanos = () => (
	<div>
       <Row>
       		<Col xs={12} md={7} className="text-center text-gray">
	            <p className="font-italic w-50 mx-auto lead">
	            Si tienes cualquier pregunta puedes contáctarnos y nos ponemos en contacto contigo a la menor brevedad posible.
	            </p>
       		</Col>
       		<Col xs={12} md={5} className="text-sm-center text-md-left text-gray"> 
          <ul className="social-network social-circle">
            <li>
              <a href="#" className="icoMail" title="E-mail">
                <FontAwesomeIcon className="fa-lg text-body" icon={faEnvelope} />
              </a> 
              <span className="pl-2">correoelectronico@platzi.com</span>
            </li>
            <li>
              <a href="https://www.instagram.com/platzi/" className="icoMail text-decoration-none" title="Instagram" target="_blank" rel="noopener">
                <FontAwesomeIcon className="fa-lg text-body" icon={faInstagram} />
              </a>
              <span className="pl-2">Platzi</span>
            </li>
          </ul>
       		</Col>
       </Row>
	</div>
);

export default Contactanos;