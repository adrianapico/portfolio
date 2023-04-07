import React from 'react';
import "./about.css";
import Me from "../../assets/fotoAdrianaPico.png"

const About = () => {
  return (
    <section className='about container section' id='about' >
      <h2 className='section__title'>About me</h2>

      <div className='about__container grid'>
        <img src={Me} alt='Adriana Pico' className='about__img' />

        <div className='about__data grid'>
          <div className='about__info'>
            <p className='about__description'>
              Hey, everyone! I'm Adriana, I'm Industrial Engineer and Junior Full Stack Web Developer, I possess a strong passion for backend and data-driven development. While I am still in the early stages of my career, I am committed to learning and continuously improving my skills to deliver top-quality solutions for any project. I pride myself on my ability to work well in a team, achieving common goals and tackling new challenges with enthusiasm. I am excited to contribute my skills to any project and to learn from my more experienced colleagues in the process.
            </p>
            <a href='' className='btn'>Download Resume</a>
          </div>

          <div className='about__skills grid'>
            <div className='skills_data'>
                <div className='skills__titles'>
                  <h3 className='skills__name'>HTML</h3>
                  <span className='skills__number '>100%</span>
                </div>
                <div className='skills__bar'>
                  <span className='skills__percentage html'></span>
                </div>
              </div>

              <div className='skills_data'>
              <div className='skills__titles'>
                <h3 className='skills__name'>CSS</h3>
                <span className='skills__number '>80%</span>
              </div>
              <div className='skills__bar'>
                <span className='skills__percentage css'></span>
              </div>
            </div>
            
            <div className='skills_data'>
                <div className='skills__titles'>
                  <h3 className='skills__name'>JavaScript</h3>
                  <span className='skills__number'>70%</span>
                </div>
                <div className='skills__bar'>
                  <span className='skills__percentage javascript'></span>
                </div>
              </div>

              <div className='skills_data'>
                <div className='skills__titles'>
                  <h3 className='skills__name'>Mongo DB</h3>
                  <span className='skills__number'>70%</span>
                </div>
                <div className='skills__bar'>
                  <span className='skills__percentage mongo__db'></span>
                </div>
              </div>

              <div className='skills_data'>
                <div className='skills__titles'>
                  <h3 className='skills__name'>MySQL</h3>
                  <span className='skills__number'>60%</span>
                </div>
                <div className='skills__bar'>
                  <span className='skills__percentage my__sql'></span>
                </div>
              </div>

              

          </div>

        </div>

      </div>
    </section>
  )
}

export default About