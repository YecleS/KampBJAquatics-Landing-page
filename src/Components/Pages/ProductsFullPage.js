import React from 'react';
import '../Styles/ProductsFullPage.css';
import Card from '../UiComponents/Card';
import Product1 from '../Assets/product1.jpg';

const ProductsFullPage = () => {
  return (
    <div className='products-full-page'>
      <div className='products-full-page__container'>
        <aside className='products-full-page__controls-wrapper'>
          <div className='products-full-page__search-wrapper'>
            <input type='text' placeholder='Search' className='products-full-page__search-input' />
          </div>
          <div className='products-full-page__filter-wrapper'>
            <p className='products-full-page__filter-label'>Filter By:</p>
            <select className='products-full-page__filter-input'>
              <option value=""></option>
              <option>Name</option>
              <option>Stocks</option>
            </select>
          </div>
        </aside>
        <main className='products-full-page__body'>
            <Card 
              image={Product1}
              title='Aquarium Tempered Glass'
              stocks={23}
            />

            <Card 
              image={Product1}
              title='Aquarium Tempered Glass'
              stocks={15}
            />

            <Card 
              image={Product1}
              title='Aquarium Tempered Glass'
              stocks={50}
            />

            <Card 
              image={Product1}
              title='Aquarium Tempered Glass'
              stocks={40}
            />

            <Card 
              image={Product1}
              title='Aquarium Tempered Glass'
              stocks={40}
            />

            <Card 
              image={Product1}
              title='Aquarium Tempered Glass'
              stocks={40}
            />

            <Card 
              image={Product1}
              title='Aquarium Tempered Glass'
              stocks={40}
            />

            <Card 
              image={Product1}
              title='Aquarium Tempered Glass'
              stocks={40}
            />

            <Card 
              image={Product1}
              title='Aquarium Tempered Glass'
              stocks={40}
            />
        </main>
      </div>
    </div>
  )
}

export default ProductsFullPage
