import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import DesktopApp from './DesktopApp';
import MobileApp from './MobileApp'
import reportWebVitals from './reportWebVitals';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

// document.addEventListener('resize',App());

function App(){
  const [view ,setView] = useState(window.innerWidth)
  // window.addEventListener('resize',setView(
  //   view = window.innerWidth
  // ))
  if(view > 428){
    return <DesktopApp/>
  }
  else{
    return <MobileApp />
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
