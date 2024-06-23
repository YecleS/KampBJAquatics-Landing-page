import React from 'react';
import Hero from './Hero';
import About from './About';
import Products from './Products';
import Pets from './Pets';
import Location from './Location';
import Contacts from './Contacts';
import Scroller from '../UiComponents/Scroller';

const Home = () => {
  return (
    <div className='home'>
      <main className='home__body'>
        <Hero />
        <About />
        <Products />
        <Pets />
        <Location />
        <Contacts />
      </main>
      <Scroller />
    </div>
  )
}

export default Home
