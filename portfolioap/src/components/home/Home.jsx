import React from 'react';
import "./home.css";
import AvatarMe from '../../assets/fotoAdrianaPico.png'
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';


const Home = () => {
  return (
    <section className='home container' id='home'>
    
      
      <div className='intro'>
        <img src={AvatarMe} alt='Avatar AP' className='home__img' /> 
        <h1 className='home__name'>Hey, I'm Adriana</h1>
        <span className='home__education'>I'm Industrial Engineer and Full Stack Web Developer</span>

        <HeaderSocials />

        <a href='#contact' className='btn'>Hire me</a>

        <ScrollDown />

      </div>
      
    </section>
  )
}

export default Home