import React from 'react';
import '../Styles/PetsFullPage.css';
import Card from '../UiComponents/Card';
import Pet1 from '../Assets/pet1.jpg';
import Pet2 from '../Assets/pet2.jpg';
import Pet3 from '../Assets/pet3.jpg';
import Pet4 from '../Assets/pet4.jpg';

const PetsFullPage = () => {

  return (
    <div className='pets-full-page'>
      <div className='pets-full-page__container'>
        <aside className='pets-full-page__controls-wrapper'>
          <div className='pets-full-page__search-wrapper'>
            <input type='text' placeholder='Search' className='pets-full-page__search-input' />
          </div>
          <div className='pets-full-page__filter-wrapper'>
            <p className='pets-full-page__filter-label'>Filter By:</p>
            <select className='pets-full-page__filter-input'>
              <option value=""></option>
              <option>Stocks</option>
            </select>
          </div>
        </aside>
        <main className='pets-full-page__body'>
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

            <Card 
              image={Pet4}
              title='Devil Fruit Fish'
              stocks={40}
            />

            <Card 
              image={Pet4}
              title='Devil Fruit Fish'
              stocks={40}
            />

            <Card 
              image={Pet4}
              title='Devil Fruit Fish'
              stocks={40}
            />

            <Card 
              image={Pet4}
              title='Devil Fruit Fish'
              stocks={40}
            />

            <Card 
              image={Pet4}
              title='Devil Fruit Fish'
              stocks={40}
            />
        </main>
      </div>
    </div>
  )
}

export default PetsFullPage
