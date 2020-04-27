import React from 'react';
import PropTypes from 'prop-types';
import {Card} from 'react-bootstrap';
import '../assets/styles/CarouselItem.scss';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';

const CarouselItem = ({ cover, title, year, contentRating, duration }) => (
<Card className="carousel-item">
    <Card.Img className="carousel-item__img" variant="top" src={cover} alt={title} />
    <Card.Body className="carousel-item__details">
    <div>
        <img className="carousel-item__details--img" src={playIcon} alt="Play Icon" />
        <img className="carousel-item__details--img" src={plusIcon} alt="Plus Icon" />
      </div>
      <Card.Text className="carousel-item__details--title">{title}</Card.Text>
      <Card.Text className="carousel-item__details--subtitle">{`${year} ${contentRating} ${duration}`}</Card.Text>      
    </Card.Body>
  </Card>
);

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number
}

export default CarouselItem;