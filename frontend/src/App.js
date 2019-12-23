import React from 'react';
import { Router } from 'react-router-dom';

import './config/ReactotronConfig';

import GlobalStyle from './styles/global';

import Routes from './routes';
import history from './services/history';

function App() {
  return (
    <Router history={history}>
      <Routes />
      <GlobalStyle/>
    </Router>
  );
}

export default App;
