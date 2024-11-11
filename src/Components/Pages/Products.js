import React from 'react';
import '../Styles/Products.css';
import { NavLink } from 'react-router-dom'
import Card from '../UiComponents/Card';
import Img1 from '../Assets/product1.jpg';
import Img2 from '../Assets/product2.jpg';
import Img3 from '../Assets/product3.jpg';
import Img4 from '../Assets/product4.jpg';

const Products = () => {
    const products = [
        {id: 1,  name: 'Tempered Glass Aquarium', description: 'A durable and crystal-clear aquarium made with tempered glass.', stocks: '10'},
        {id: 2,  name: 'LED Aquarium Light', description: 'Bright and energy-efficient LED light for aquariums.', stocks: '15'},
        {id: 3,  name: 'Submersible Water Heater', description: 'Efficient water heater with adjustable temperature settings.', stocks: '8'},
        {id: 4,  name: 'Fish Food Pellets', description: 'Nutritious pellets suitable for most freshwater fish.', stocks: '25'}
    ];

  return (
    <section className='products' id='products'>
        <div className='products__wrapper'>
            <div className='products__header'>
                <h2 className='products__title'>- Featured Products -</h2>
                <p className='products__subtitle'>Browse Our Products</p>
            </div>
            <div className='products__body'>
                {products.map(products => (
                    <Card
                        key={products.id} 
                        image={Img1}
                        title={products.name}
                        description={products.description}
                        stocks={products.stocks}
                    />
                ))}
                
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
