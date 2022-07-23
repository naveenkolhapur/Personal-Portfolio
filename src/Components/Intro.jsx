import React from 'react';
import { useTypewriter } from 'react-simple-typewriter'
import './Intro.css';

const Intro = () => {
  const {text} = useTypewriter({
    words: ['Frontend Developer', 'Web Developer' , 'UI Developer'],
    loop: 0, 
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000
    })
  return (
    <>
    <section className='intro-section' id='Home'>
    <div className='container intro-inner d-flex justify-content-center align-items-center'>
        <div className='intro-box'>
          <h6 className='intro-welcome'>Hi, I'm</h6>
          <h1 className='intro-name'>Naveen Kolhapur</h1>
          <h2 className="intro-role">{text}<span className="cursor">_</span></h2>
          <div className='intro-buttons mt-4'>
          <a href='#contact'><button className='intro-btn-1'>Get in Touch</button></a>
          </div>
        </div>
    </div>
    </section>
    </>
  )
}

export default Intro