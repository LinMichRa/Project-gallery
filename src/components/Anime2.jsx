import PropTypes from 'prop-types'
import React from 'react'
import onepunch from '../assets/img/onepunchman.jpg'

export const Anime2 = ({className}) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={onepunch} alt="Anime One Punch Man" className='image'/>
    </div>
  )
}

Anime2.propTypes ={
  className: PropTypes.string
};


