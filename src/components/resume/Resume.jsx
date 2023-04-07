import React from 'react';
import "./resume.css";
import Lenguages from './lenguages';
import Data from './Data';
import Card from './Card';

const Resume = () => {
  return (
    <>
      <Lenguages />
      <section className='resume container section' id='resume'>
        <h2 className='section__title'>Experience</h2>

        <div className='resume__container grid'>
          <div className='timeline grid'>
            {Data.map((val, id)=>{
              if (val.category == "education") {
                return (
                  <Card 
                      key={id} 
                      icon={val.icon} 
                      title={val.title} 
                      institucion={val.institution} 
                      year={val.year}  
                      description={val.descripcion} />
                );
              }
            })}
          </div>

          <div className='timeline grid'>
            {Data.map((val, index)=>{
              if (val.category == "experience") {
                return (
                  <Card 
                      key={index} 
                      icon={val.icon} 
                      title={val.title} 
                      institucion={val.institution} 
                      year={val.year}  
                      month={val.month}
                      description={val.descripcion} />
                );
              }
            })}
          </div>
        </div>
      </section>


    </>
  );
    
}

export default Resume