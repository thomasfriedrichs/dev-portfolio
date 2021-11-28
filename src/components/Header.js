import React from "react";
import { Icon } from '@iconify/react';
import { HeaderWrapper } from "./HeaderElement";
import Info from './../data/info';

const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <div className ="top">
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
          <span
            className="iconify"
            id="theme-switch"
            data-icon="emojione-monotone:crescent-moon"
          >
          </span>
        </div>
        <div>
          <span 
            className="iconify"
            id="laptop"
            data-icon="la:laptop-code" 
          >
          </span>
          <h1>{Info.name}</h1>
          <h2>{Info.title}</h2>
        </div>
      </HeaderWrapper>
    </>
  );
};

export default Header;