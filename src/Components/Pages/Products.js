import React from 'react';
import '../Styles/Products.css';
import { NavLink } from 'react-router-dom'
import Card from '../UiComponents/Card';
import Img1 from '../Assets/product1.jpg';
import Img2 from '../Assets/product2.jpg';
import Img3 from '../Assets/product3.jpg';
import Img4 from '../Assets/product4.jpg';

const Products = () => {
  return (
    <section className='products' id='products'>
        <div className='products__wrapper'>
            <div className='products__header'>
                <h2 className='products__title'>- Our Products -</h2>
                <p className='products__subtitle'>Browse Our Products</p>
            </div>
            <div className='products__body'>
                <Card 
                    image={Img1}
                    title='Tempered Glass Aquarium'
                    stocks={245}
                />

                <Card 
                    image={Img2}
                    title='Tempered Glass Aquarium'
                    stocks={300}
                />

                <Card 
                    image={Img3}
                    title='Tempered Glass Aquarium'
                    stocks={150}
                />
                
                <Card 
                    image={Img4}
                    title='Tempered Glass Aquarium'
                    stocks={400}
                />
            </div>
            <div className='products__footer'>
                <NavLink to='/products'>
                    <button className='products__see-more'>See More</button>
                </NavLink>
            </div>
        </div>
    </section>
  )
}

export default Products
