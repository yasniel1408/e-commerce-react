import React from 'react';
import ReactDOM from 'react-dom';
import PrimeReact from 'primereact/api';
import App from './App';
import 'primereact/resources/themes/vela-purple/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './index.css';

PrimeReact.ripple = true;
PrimeReact.inputStyle = 'filled';
PrimeReact.zIndex = {
  modal: 1100, // dialog, sidebar
  overlay: 1000, // dropdown, overlaypanel
  menu: 1000, // overlay menus
  tooltip: 1100, // tooltip
  toast: 1200, // toast
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
