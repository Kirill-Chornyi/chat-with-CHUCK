import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import {GoogleOAuthProvider} from '@react-oauth/google'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
        <GoogleOAuthProvider clientId="379655825368-cic51q04lled7bc06psph537gm74sprm.apps.googleusercontent.com">
          <App />
        </GoogleOAuthProvider>
      </Router>
  </React.StrictMode>
);

