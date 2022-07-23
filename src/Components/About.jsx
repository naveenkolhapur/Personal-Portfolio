import React from 'react'
import './About.css'

const About = () => {
  return (
    <>
        <section className='about-section' id='About'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-lg-6 col-md-6 text-center'>
                        <div className=''>
                            <img src='./Images/Img_1.jpg' className='img-fluid profile-pic' width="400" height="500"/>
                        </div>                    
                    </div>
                    <div className='col-12 col-lg-6 col-md-6 second-col'>
                        <div className='about-content'>
                            <h1 className='Heading'>About Me</h1>
                            <hr className='hr-line'/>
                            <p className='about-intro'>I am a web developer having expertise in frontend development and exposure to back-end development. 
                            I design and develop web applications using the latest technologies to deliver the product with quality code. 
                            I am very good at UI fundamentals & technologies and can adapt to the most of the front-end frameworks quickly.</p>
                            <h5 className='sub-heading'>Technical Skills</h5>
                            <div>
                                <ul className='skills-list'>
                                    <li className='skilss-item'>HTML-5</li>
                                    <li className='skilss-item'>CSS-3</li>
                                    <li className='skilss-item'>Javascript</li> <br/>
                                    <li className='skilss-item'>React-JS</li>
                                    <li className='skilss-item'>Bootstrap-5</li>
                                </ul>
                            </div>
                            <a href='./Files/01-Naveen_k-Resume.pdf' download="01-Naveen_K-Resume"><button className='Download-btn'> <i class="fa fa-download" aria-hidden="true"></i> Download CV </button></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default About