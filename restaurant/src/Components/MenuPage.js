import {React, useContext} from 'react'
import Header from './Header'
import './MenuPage.css'
import { menuContaint } from './DataMenus'
import Buttons from './Buttons'
import { monContexte } from './Context.jsx/MenuContext'
import Footer from './Footer'


function MenuPage() {

  let {choiceMenu} = useContext(monContexte)
  if (typeof choiceMenu !== 'string') {
    choiceMenu = "Nos Entrées"
  }
  return (
    <div className='contenuMenu'>
        <Header/>
        <h1>Menu</h1>
        <Buttons/>
        <h2 className='nosEntrées'>{choiceMenu}</h2>
        {menuContaint.map((plat) => {
          if (plat.categorie === choiceMenu) {
            return (
              <div key={plat.id} className='text'>
                {plat.nom}
                <p className='motOu'>ou</p>
              </div>
            )
          }
        })}
        <Footer/>
    </div>
  )
}

export default MenuPage
