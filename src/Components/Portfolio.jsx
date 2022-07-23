import React, { useState } from 'react';
import './Portfolio.css';
import ProjectData from "./ProjectData"

const Portfolio = () => {

  const[items, setItems] = useState(ProjectData);

  const filteritem = (catItem) =>{
    const updateItems= ProjectData.filter((curElem) => {
        return curElem.category === catItem;
    })
    setItems(updateItems);
  }

  return (
    <>
    <section className='portfolio-section' id='portfolio'>
        <div className='container'> 
          <h1 className='Heading'>My Portfolio</h1>
          <hr className='line'/>
          <div className='mt-5 tabs'>
            <ul className='menu-tabs'>
              <li className='menu-btn active' onClick={() => setItems(ProjectData)}>All</li>
              <li className='menu-btn' onClick={() => filteritem('HTML/CSS')}>HTML/CSS</li>
              <li className='menu-btn' onClick={() => filteritem('Javascript')}>Javascript</li>
              <li className='menu-btn' onClick={() => filteritem('Wordpress')}>Wordpress</li>
              <li className='menu-btn' onClick={() => filteritem('React-JS')}>React-JS</li>
            </ul>
          </div>
          <div className='container'>
            <div className='row pb-5'>

              {
                items.map((elem) =>{
                  const{id, image, title, description, demo, category} =elem;

                  return(
                    <div className='col-12 col-xl-3 col-lg-4 col-md-6 my-3 cards-col'>
                  <div className='card'style={{width:"17rem"}}>
                    <img src={image} className='card-img-top' alt="{title}" />
                    <div className='card-body'>
                      <h5 className='card-title'>{title}</h5>
                      <p className='card-text'>{description}</p>
                      <a href={demo} target="_blank" className='btn visit-btn'>Visit</a>
                    </div>
                  </div>
                </div>
                  )

                })
              }
            </div>    
          </div>
        </div>
    </section>
    </>
  )
}

export default Portfolio