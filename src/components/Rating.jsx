import React from 'react';

const Rating = ({ rating }) => {
  return (
    <>
      {rating === '0.0' && (
        <>
          <i className='far fa-star'></i>
          <i className='far fa-star'></i>
          <i className='far fa-star'></i>
          <i className='far fa-star'></i>
          <i className='far fa-star'></i>
        </>
      )}
      {rating === '0.5' && (
        <>
          <i className='fas fa-star-half-alt'></i>
          <i className='far fa-star'></i>
          <i className='far fa-star'></i>
          <i className='far fa-star'></i>
          <i className='far fa-star'></i>
        </>
      )}
      {rating === '1.0' && (
        <>
          <i className="fas fa-star"></i>
          <i className='far fa-star'></i>
          <i className='far fa-star'></i>
          <i className='far fa-star'></i>
          <i className='far fa-star'></i>
        </>
      )}
      {rating === '1.5' && (
        <>
          <i className="fas fa-star"></i>
          <i className='fas fa-star-half-alt'></i>
          <i className='far fa-star'></i>
          <i className='far fa-star'></i>
          <i className='far fa-star'></i>
        </>
      )}
      {rating === '2.0' && (
        <>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className='far fa-star'></i>
          <i className='far fa-star'></i>
          <i className='far fa-star'></i>
        </>
      )}
      {rating === '2.5' && (
        <>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className='fas fa-star-half-alt'></i>
          <i className='far fa-star'></i>
          <i className='far fa-star'></i>
        </>

      )}
      {rating === '3.0' && (
        <>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className='far fa-star'></i>
          <i className='far fa-star'></i>
        </>
      )}
      {rating === '3.5' && (
        <>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className='fas fa-star-half-alt'></i>
          <i className='far fa-star'></i>
        </>
      )}
      {rating === '4.0' && (
        <>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className='far fa-star'></i>
        </>
      )}
      {rating === '4.5' && (
        <>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className='fas fa-star-half-alt'></i>
        </>
      )}
      {rating === '5.0' && (
        <>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </>
      )}
    </>
  );
};

export default Rating;
