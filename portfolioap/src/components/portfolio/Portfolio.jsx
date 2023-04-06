import React, { useState } from 'react';
import "./portfolio.css";
import Projects from './Projects';

const Portfolio = () => {
  const [items, setItems] = useState(Projects);
  const filterItem = (categoryItem) => {
    const updateItems = Projects.filter((curElem) => {
      return curElem.category === categoryItem;
      
    })

    setItems(updateItems);

  }
  return (
    <section className='project container section' id='portfolio'>
      <h2 className='section__title'>Projects</h2>

      <div className='project__filters'>

        <span className='project__item' onClick={( )=> setItems(Projects)}>
          Everything
        </span>

        <span className='project__item' onClick={( )=> filterItem("Backend")}>
          Backend
        </span>

        <span className='project__item' onClick={( )=> filterItem("Frontend")}>
          Frontend
        </span>

        <span className='project__item' onClick={( )=> filterItem("Frontend&Backend")}>
          Frontend&Backend
        </span>

      </div>

      <div className='project__container grid'>
        {items.map((elem) =>{
          const{ id, image, title, category, deployment } = elem;
          return (
            <div className='project__card' key={id}>

                <div className='project__thumbnail'>
                  <img src={image} alt='image-of-project' className='project__img' />
                  <div className='project__mask'></div>        
                </div>

                <span className='project__category'>{category} </span>
                <h3 className='project__title'>{title} </h3>
                <a href={deployment} className='project__button'>
                  <i className='icon-link project__button-icon'></i>
                </a>
            </div>
            
          )
        })}
      </div>

    </section>
    
  );
}

export default Portfolio;