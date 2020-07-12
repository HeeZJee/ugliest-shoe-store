import React from 'react';
import './App.css';
import { StoreIndex, ShoeDetail, StoreHome, Cart } from './components'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <Router>
      <h1>Welcome to the Ugliest Shoe Store!</h1>
      <nav>
        <Link to={'/'}>Store</Link>{' | '}
        <Link to={'cart'}>Cart</Link>
      </nav>
      <Routes>
        <Route path={'/'} element={<StoreHome />} >
          <Route path={'/'} element={<StoreIndex />} />
          <Route path={':shoe'} element={<ShoeDetail />} />
        </Route>
        <Route path={'cart'} element={<Cart />} />
      </Routes>
    </Router >
  );
}

export default App;
