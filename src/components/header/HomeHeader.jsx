import React from 'react';
import { NavLink } from 'react-router-dom';

const HomeHeader = () => {
  const handleScrollToGallery = () => {
    const galleryElement = document.getElementById('gallery');
    if (galleryElement) {
      galleryElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div 
        className='home-header'
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url('/header-imgs/home-banner.jpg')`
        }}
      >
        <h1 className='home-title' id='headerText'>LT TATTOO</h1>
        <div className='header-buttons'>
          <button className='primary'>
            <NavLink to='/bookings' className='header-button'>Book Here</NavLink>
          </button>
          <button className='secondary' onClick={handleScrollToGallery}>
            View Work
          </button>
        </div>
      </div>
    </>
  );
};

export default HomeHeader;
