import React from "react";
import { Icon } from '@iconify/react';
import { func, string } from 'prop-types';
import { 
  HeaderWrapper,
  Links, 
  TopDiv, 
  Button 
} from "./HeaderElement";
import Info from '../../data/info';
import Pdf from '../../assets/thomasfriedrichsResume1 (1).PDF'

const Header = (props) => {

  const { theme, setTheme } = props;

  const themeToggler = () => {
    console.log('theme', theme)
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  
  return (
    <>
      <HeaderWrapper>
        <TopDiv className ="top">
          <a
            href="https://github.com/thomasfriedrichs/dev-portfolio"
            target="_blank" 
            rel="noreferrer"
          >
            <Icon
              className="iconify"
              id="github"
              icon="fontisto:github"
            />
          </a>
          <Button 
            className="iconify"
            id="theme-switch"
            onClick={themeToggler}
            
          >
            <Icon
              className="iconify"
              id="theme-switch"
              icon={theme === 'light' ? "emojione-monotone:crescent-moon" : "akar-icons:sun"}
            />
          </Button>
        </TopDiv>
        <div>
          <Icon 
            className="iconify"
            id="laptop"
            icon="la:laptop-code" 
          >
          </Icon>
          <h1>{Info.name}</h1>
          <h2>{Info.title}</h2>
          <Links>
            <a 
              href='https://github.com/thomasfriedrichs'
              target='_blank'
              rel='noreferrer'
            >
              <Icon className='links' icon='fontisto:github'/>
            </a>
            <a 
              href='https://www.linkedin.com/in/thomas-friedrichs/'
              target='_blank' 
              rel='noreferrer'
            >
              <Icon className='links' icon='akar-icons:linkedin-fill'/>
            </a>
            <a 
              href={Pdf}
              target='_blank' 
              rel='noopener noreferrer'
            >
              <Icon className='links' icon='ant-design:file-pdf-filled'/>
            </a>
          </Links>
        </div>
      </HeaderWrapper>
    </>
  );
};

Header.propTypes = {
  theme: string.isRequired,
  setTheme: func.isRequired,
}

export default Header;