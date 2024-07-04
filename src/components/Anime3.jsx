import PropTypes from 'prop-types'
import React from 'react'
import naruto from '../assets/img/naruto.jpg'


export const Anime3 = ({className}) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={naruto} alt="Anime Naruto" className='image'/>
    </div>
  )
}

Anime3.propTypes ={
  className: PropTypes.string
};