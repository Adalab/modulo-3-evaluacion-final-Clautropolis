
  import { StrictMode } from 'react'
  import { createRoot } from 'react-dom/client'
  import App from './components/App.jsx'
  import { HashRouter } from "react-router-dom";
  
  
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </StrictMode>,
  )
  
// Fichero src/index.jsx (código nuevo)
/*
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
);
 */