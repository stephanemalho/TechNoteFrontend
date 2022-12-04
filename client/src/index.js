import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { BrowserRouter , Routes, Route } from 'react-router-dom';

import { store } from './app/store';
import App from './App';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />}>
          
        </Route>
      </Routes>
    </BrowserRouter> 
    </Provider>
  </React.StrictMode>
);


