import React, { useState} from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import About from './components/About';
import GlobalStyle from './components/styles/GlobalStyles';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Experience from './components/Experience';
import { lightTheme, darkTheme } from './components/styles/themes/Colors';


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
        <Experience/>
        <Footer/>
      </>
    </ThemeProvider>
  );
};

export default App;
