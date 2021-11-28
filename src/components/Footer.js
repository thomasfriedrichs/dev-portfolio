import { Icon } from '@iconify/react';
import React from 'react'
import { FooterWrapper } from './FooterElement';

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <a 
          href='https://github.com/thomasfriedrichs'
          target='_blank'
          rel='noreferrer'
        >
          <Icon className='iconify' icon='fontisto:github'/>
        </a>
        <a 
          href='https://www.linkedin.com/in/thomas-friedrichs/'
          target='_blank' 
          rel='noreferrer'
        >
          <Icon className='iconify' icon='akar-icons:linkedin-fill'/>
        </a>
      </FooterWrapper>
    </>
  )
}

export default Footer;
