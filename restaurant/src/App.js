import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MenuPage from './Components/MenuPage';
import BoissonsPage from './Components/BoissonsPage';
import ContactPage from './Components/ContactPage';
import Home from './Components/Home';
import MenuContext from './Components/Context.jsx/MenuContext'

function App() {
  return (
    <Router>
    <MenuContext>
    <div className="App">
      <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="/menu" element={<MenuPage/>}></Route>
      <Route exact path="/boisson" element={<BoissonsPage/>}></Route>
      <Route exact path="/contact" element={<ContactPage/>}></Route>
      </Routes>
    </div>
    </MenuContext>
    </Router>
  );
}

export default App;
