import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import TenderPage from './pages/TenderPage';
import AuthPage from './pages/AuthPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/tenders" element={<TenderPage />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
