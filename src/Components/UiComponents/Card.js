import React from 'react';
import '../Styles/Card.css';
import Img from '../Assets/product1.jpg';

const Card = ({image, title, description, stocks}) => {
  return (
    <div className='card'>
        <div className='card__header'>
            <img src={image} className='card__img'/>
        </div>
        <div className='card__body'>
            <div className='card__title-wrapper'>
              <h5 className='card__title'>{title}</h5>
              <p className='card__description'>{description}</p>
              {/* <p className='card__categories'>{description}</p> */}
            </div>
            <div className='card__stocks-wrapper'>
              <p className='card__stocks'>Stocks: {stocks}</p>
            </div>       
        </div>
    </div>      
  )
}

export default Card
