import React from 'react';
import '../Styles/Hero.css';

const Hero = () => {
  return (
    <section className='hero' id='hero'>
      <div className='hero__wrapper'>
        <div className='hero__title-wrapper'>
            <h1 className='hero__title'>Discover a World of Aquatic Wonders</h1>
        </div>
        <div className='hero__subtitle-wrapper'>
            <p className='hero__subtitle'>Your Trusted Partner for Aquatic Pets and Premium Equipment</p>
        </div>
        <a href='#contacts'>
          <button className='hero__action-button'>Contacts</button>
        </a>
      </div>
    </section>
  )
}

export default Hero
