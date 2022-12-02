import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { WeatherAppPage } from './pages/WeatherAppPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WeatherAppPage />
  </React.StrictMode>
);