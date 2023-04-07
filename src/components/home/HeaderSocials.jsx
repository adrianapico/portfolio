import React from 'react';
import './home.css'


const HeaderSocials = () => {
  return (
    <div className='home__socials'>
        <a href='https://github.com/adrianapico' className='home__social-link' target='_blank'>
            <i class="fa-brands fa-github"></i>
        </a>

        <a href='https://www.linkedin.com/in/adrianapico/' className='home__social-link' target='_blank'>
            <i class="fa-brands fa-linkedin"></i>
        </a>

        <a href='https://wa.me/+573184797120' className='home__social-link' target='_blank'>
            <i class="fa-brands fa-whatsapp"></i>
        </a>
        
    </div>
  )
}

export default HeaderSocials