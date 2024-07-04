import PropTypes from 'prop-types'
import React from 'react'
import onepiece from '../assets/img/onepiece.jpg'

export const Anime1 = ({className}) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={onepiece} alt="Anime One Piece" className='image'/>
    </div>
  )
}

Anime1.propTypes ={
  className: PropTypes.string
};


