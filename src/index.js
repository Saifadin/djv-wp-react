import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { ModalContextProvider } from './contexts/ModalContext';

ReactDOM.render(
  <Router>
    <ModalContextProvider>
      <App />
    </ModalContextProvider>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
