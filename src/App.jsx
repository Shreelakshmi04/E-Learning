import React from 'react';
import Header from './components/Header';
import Header2 from './components/Header/index2';
import Banner from './components/Banner';
import Features from './components/Features';
import Footer from './components/Footer';
import Checkout from './components/Checkout/checkout';
import SearchForm from './components/Header/SearchForm';

import { BrowserRouter as Router,Routes , Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path='/' element={
            <>
            <Header />
            <SearchForm/>
            <Banner />
            <Features />
            {/* <Products /> */}
            <Footer />
            </>
          } />
        </Routes>
        <Routes>
          <Route path='/checkout' element={
            <>
            <Header2 />
            <Checkout />
            <Footer />
            </>
          } />
        </Routes>
      </Router>
      
      
      
      
      
      
      
    </div>
  );
}

export default App;
