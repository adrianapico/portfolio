import React from 'react';
import "./resume.css";
import Spanish from '../../assets/spanish.jpg';
import Portuguese from '../../assets/portuguese.jpg';
import English from '../../assets/english.png'

const data = [
    {
        id: 1,
        image: Spanish,
        title: "Spanish",
        description: "Native",
    },
    {
        id: 2,
        image: Portuguese,
        title: "Portuguese",
        description: "B2 Conversational",
    },
    {
        id: 3,
        image: English,
        title: "English",
        description: "B2 Intermediate",
    },
];
const Lenguages = () => {
  return (
    <section className='lenguages container section' id='lenguages'>
        <h2 className='section__title'>Lenguages</h2>

        <div className='lenguages__container grid'>
            {data.map(({id, image, title, description})=>{
                return ( 
                    <div className='lenguages__card' key={id}>
                        <img src={image} alt='ImageLenguage' className='languages__img'/>

                        <h3 className='lenguages__title'>{title}</h3>
                        <p className='lenguages__description'>{description}</p>
                    </div>
                );
            })}
        </div>
    </section>
    
  );
};

export default Lenguages;