import React, { useState} from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './components/header/Header';
import About from './components/aboutme/About';
import GlobalStyle from './components/styles/GlobalStyles';
import Skills from './components/skills/Skills';
import Footer from './components/footer/Footer';
import Experience from './components/experience/Experience';
import { lightTheme, darkTheme } from './components/styles/themes/Colors';
import Projects from './components/projects/Projects';


const App = () => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeProvider 
      theme={theme === 'light' ? lightTheme : darkTheme} 
    >
      <>
        <GlobalStyle/>
        <Header
          theme={theme}
          setTheme={setTheme}
        />
        <About/>
        <Skills/>
        <Projects/>
        <Experience/>
        <Footer/>
      </>
    </ThemeProvider>
  );
};

export default App;
