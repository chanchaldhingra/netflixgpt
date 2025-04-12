import React from 'react'
import logoImage from '../assets/Netflix_Logo_PMS.png';


const Header = () => {
  return (
    <div className='absolute px-8 py-2 z-10'>
      <img src={logoImage} alt="logo" className='w-44' />

    </div>
  )
}

export default Header