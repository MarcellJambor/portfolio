import React from 'react'
import CV from '../files/Resume.pdf'

const Header = () => {
  return (
    <div className='header'>
      <div className='header-left'>
        <h1>Full Stack <br />
        Developer</h1>
        <a href={CV} download="Marcell_Jambor_Resume.pdf"><button>Download CV</button></a>
      </div>
      <div className='header-right'>

      </div>
    </div>
  )
}

export default Header
