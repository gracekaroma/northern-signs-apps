import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import NoPage from './pages/NoPage';
// import Product from './pages/Product';
import Service from './pages/Services';

class App extends Component {  
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route>
            <Route index element={<Home />} />
            <Route path='/About' element={<About />} />
            {/* <Route path='/Product' element={<Product />} /> */}
            <Route path='/Service' element={<Service />} />
            <Route path='*' element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
