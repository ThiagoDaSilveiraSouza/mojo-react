import React from 'react';
import './App.css';

import { BrowserRouter } from "react-router-dom";
import { Routes } from './routes'

// components
import { Header } from './components/header'
import { Footer } from './components/footer'


// pages
function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
