import PropTypes from 'prop-types'
import React from 'react'
import slime from '../assets/img/slime.jpg'

export const Anime4 = ({className}) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={slime} alt="Anime Tensei Shitara Slime Datta Ken" className='image'/>
    </div>
  )
}

Anime4.propTypes ={
  className: PropTypes.string
};