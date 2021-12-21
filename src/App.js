import React from 'react';

import Routes from './routes';
import GlobalStyle from './styles/global';

// https://api.github.com

// Instalar pelo prompt do dos em C:\Users\NOT\workspace\projetos_react\repos
// npm install react-router-dom@5.2.0

// Instalar estilos - não o css.
// npm install styled-components

// Instalat axios - criar baseurl
// npm install axios        

function App() {
  return (
    <>
      <GlobalStyle/>
      <Routes/>
    </>
  );
}

export default App;
