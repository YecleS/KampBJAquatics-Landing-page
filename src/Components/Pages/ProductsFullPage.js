import React, { useRef, useState, useEffect } from 'react';
import '../Styles/ProductsFullPage.css';
import Card from '../UiComponents/Card';
import Img1 from '../Assets/product1.jpg';

const ProductsFullPage = () => {
  const[isFilterDropdownActive, setFilterDropdownActive] = useState(false);
  const filterDropdownRef = useRef();

  const toggleFilterDropdown = () => {
    setFilterDropdownActive(!isFilterDropdownActive);
  }

  useEffect(() => {
    const handleClick = (e) => {
      if(filterDropdownRef.current && !filterDropdownRef.current.contains(e.target)){
        setFilterDropdownActive(false);
      }
    }

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [])

  const products = [
    {id: 1,  name: 'Tempered Glass Aquarium', description: 'A durable and crystal-clear aquarium made with tempered glass.', stocks: '10'},
    {id: 2,  name: 'LED Aquarium Light', description: 'Bright and energy-efficient LED light for aquariums.', stocks: '15'},
    {id: 3,  name: 'Submersible Water Heater', description: 'Efficient water heater with adjustable temperature settings.', stocks: '8'},
    {id: 4,  name: 'Fish Food Pellets', description: 'Nutritious pellets suitable for most freshwater fish.', stocks: '25'},
    {id: 5,  name: 'Aquarium Filter', description: 'Quiet and powerful filter for maintaining water cleanliness.', stocks: '12'},
    {id: 6,  name: 'Air Pump for Aquariums', description: 'Compact air pump for oxygenating water and creating bubbles.', stocks: '7'},
    {id: 7,  name: 'Decorative Gravel', description: 'Colorful gravel for enhancing aquarium aesthetics.', stocks: '20'},
    {id: 8,  name: 'Artificial Plants', description: 'Safe, durable, and realistic-looking aquarium plants.', stocks: '30'},
    {id: 9,  name: 'Water Conditioner', description: 'Neutralizes harmful chemicals for safe water conditions.', stocks: '18'},
    {id: 10, name: 'Aquarium Cleaning Kit', description: 'Complete kit for easy and thorough aquarium maintenance.', stocks: '5'}
];

  return (
    <div className='products-full-page'>
      <div className='products-full-page__container'>
        <aside className='products-full-page__controls-wrapper'>
          <div className='products-full-page__search-wrapper'>
            <input type='text' placeholder='Search' className='products-full-page__search-input' />
          </div>

          <div className='products-full-page__filter-wrapper' ref={filterDropdownRef}>
            <div className='products-full-page__icon-wrapper' onClick={toggleFilterDropdown}>
              <i className="products-full-page__icon fa-solid fa-filter"></i>
            </div>

            {isFilterDropdownActive &&
              <div className='products-full-page__filter-dropdown-wrapper'>
                <p className='products-full-page__filter-label'>Filter By:</p>

                <div className='products-full-page__filter-field-wrapper'>
                  <label>Categories</label>
                  <select className='products-full-page__filter-input'>
                    <option value=""></option>
                    <option>Accessories</option>
                    <option>Equipments</option>
                  </select>
                </div>
                
              </div>
            }
            
          </div>
        </aside>
        <main className='products-full-page__body'>
          {products.map(products => (
            <Card
              key={products.id} 
              image={Img1}
              title={products.name}
              description={products.description}
              stocks={products.stocks}
            />
          ))}      
        </main>
      </div>
    </div>
  )
}

export default ProductsFullPage
