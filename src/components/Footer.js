import React from 'react'
import { Icon } from '@iconify/react';
import { FooterWrapper, Email } from './FooterElement';
import Info from './../data/info';

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
      <Email>
        {Info.email}
      </Email>
    </>
  )
}

export default Footer;
