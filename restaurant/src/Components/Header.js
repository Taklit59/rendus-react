import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="App-header">
        <div className="logo">La Table de Chantal</div>
        <nav className="mainNav">
          <div id="presentation">
          <Link to="/">Présentation</Link></div>
          <div id="menus">
            <Link to="/menu">Menus</Link></div>
          <div id="boissons">
            <Link to="/boisson">Boissons</Link></div>
          <div id="contacts">
          <Link to="/contact">Contacts</Link></div>
        </nav>
      </header>
  )
}

export default Header
