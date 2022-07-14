import './App.css';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/home/Home';
import React from 'react';
import About from './components/pages/about/About';
import Footer from './components/pages/home/Footer';
import Extractor from './components/pages/extract/Extractor';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div>
          <div>
            <Toaster position='bottom-right' />
          </div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route
              path='/extractor'
              element={<Extractor image='images/image.png' />}
            />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
