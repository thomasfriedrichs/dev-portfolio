import React from "react";
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
            <span
              className="iconify"
              id="github"
              data-icon="bi:github"
            >
            </span>
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
            // data-inline="false"
          >
          </span>
          <h1>{Info.name}</h1>
          <p>{Info.title}</p>
        </div>
      </HeaderWrapper>
    </>
  );
};

export default Header;