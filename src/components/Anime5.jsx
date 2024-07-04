import PropTypes from 'prop-types'
import React from 'react'
import deathnote from '../assets/img/deathnote.jpg'

export const Anime5 = ({className}) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={deathnote} alt="Anime DeathNote" className='image'/>
    </div>
  )
}

Anime5.propTypes ={
  className: PropTypes.string
};