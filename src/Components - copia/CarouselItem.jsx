import React from 'react';
import {Card} from 'react-bootstrap';
import '../assets/styles/CarouselItem.scss';

const CarouselItem = () => (
<Card className="carousel-item">
    <Card.Img className="carousel-item__img" variant="top" src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260" />
    <Card.Body className="carousel-item__details">
      <div>
        <img className="carousel-item__details--img" src="../assets/play-icon.png" alt="Play Icon" />
        <img className="carousel-item__details--img" src="../assets/plus-icon.png" alt="Plus Icon" />
      </div>
      <Card.Text className="carousel-item__details--title">Título descriptivo</Card.Text>
      <Card.Text className="carousel-item__details--subtitle">Título descriptivo 2019 16+ 114 minutos</Card.Text>      
    </Card.Body>
  </Card>
);

export default CarouselItem;