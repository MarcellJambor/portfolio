import React, { useState } from 'react'
import Modal from './Modal'
import Netflix from '../assets/netflix_1.png'
import Ecommerce from '../assets/ecommerce_1.png'
import Blog from '../assets/blog_1.png'

const Projects = () => {
  const [project,setProjects]=useState('netflix');
  const [isOpen,setIsOpen]=useState(false);

  return (
    <div className='projects' id='projects'>
      <h1>Projects</h1>
      <div className='project-cards'>
        <div className='card' onClick={()=> {
          setIsOpen(true)
          setProjects('netflix')
        }}>
          <h2>Netflix Clone</h2>
          <img src={Netflix} alt="netflix" />
          <p>This Netflix clone is a React-based website that provides users with an immersive streaming experience.</p>
        </div>
        <div className='card' onClick={()=> {
          setIsOpen(true)
          setProjects('ecommerce')
        }}>
          <h2>Ecommerce</h2>
          <img src={Ecommerce} alt="ecommerce" />
          <p>This eCommerce website offers users a seamless shopping experience. The site features a product catalog, a shopping cart where users can add items, and a secure checkout system that allows them to review their order and proceed with payment. </p>
        </div>
        <div className='card' onClick={()=> {
          setIsOpen(true)
          setProjects('blog')
        }}>
          <h2>Blog</h2>
          <img src={Blog} alt="blog" />
          <p>This Netflix clone is a React-based website that provides users with an immersive streaming experience.</p>
        </div>
      </div>
      {isOpen ? (
        <div className='overlay'>
          <div className='modal'>
            <Modal OnClose={()=> setIsOpen(false)} project={project}/>
          </div>
        </div>
      ):<></>}
    </div>
  )
}

export default Projects
