import PropTypes from 'prop-types'
import React from 'react'
import zerotwo from '../assets/img/zerotwo.jpg'

export const Anime6 = ({className}) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={zerotwo} alt="Anime Darling in the Franxx" className='image'/>
    </div>
  )
}

Anime6.propTypes ={
  className: PropTypes.string
};
