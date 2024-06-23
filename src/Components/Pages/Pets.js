import React from 'react';
import '../Styles/Pets.css';
import { NavLink } from 'react-router-dom';
import Card from '../UiComponents/Card';
import Pet1 from '../Assets/pet1.jpg';
import Pet2 from '../Assets/pet2.jpg';
import Pet3 from '../Assets/pet3.jpg';
import Pet4 from '../Assets/pet4.jpg';

const Pets = () => {
  return (
    <section className='pets' id='pets'>
        <div className='pets__wrapper'>
            <div className='pets__header'>
                <h2 className='pets__title'>- Our Pets -</h2>
                <p className='pets__subtitle'>Our Pets Catalog</p>
            </div>
            <div className='pets__body'>
                <Card 
                    image={Pet1}
                    title='Devil Fruit Fish'
                    stocks={23}
                />

                <Card 
                    image={Pet2}
                    title='Devil Fruit Fish'
                    stocks={15}
                />

                <Card 
                    image={Pet3}
                    title='Devil Fruit Fish'
                    stocks={50}
                />

                <Card 
                    image={Pet4}
                    title='Devil Fruit Fish'
                    stocks={40}
                />      

            </div>
            <div className='pets__footer'>
                <NavLink to='/pets'>
                    <button className='pets__see-more'>See More</button>
                </NavLink>
            </div>
        </div>
    </section>
  )
}

export default Pets
