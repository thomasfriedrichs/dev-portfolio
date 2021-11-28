import React from 'react';
import Header from './components/Header';
import About from './components/About';
import GlobalStyle from './components/styles/GlobalStyles';
import Skills from './components/Skills';
import Footer from './components/Footer';


const App = () => {
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <About/>
      <Skills/>
      <Footer/>
    </>
  );
};

export default App;
