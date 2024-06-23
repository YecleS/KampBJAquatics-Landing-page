import React from 'react';
import '../Styles/Scroller.css';

const Scroller = () => {

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
        });
    }

  return (
    <div className='scroller'>
      <i className="scroller__icon fa-solid fa-caret-up" onClick={scrollUp}></i>
    </div>
  )
}

export default Scroller
