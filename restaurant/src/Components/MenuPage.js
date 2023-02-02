import {React, useContext} from 'react'
import Header from './Header'
import './MenuPage.css'
import { menuContaint } from './DataMenus'
import Buttons from './Buttons'
import { monContexte } from './Context.jsx/MenuContext'


function MenuPage() {

  let {choiceMenu} = useContext(monContexte)
  if (typeof choiceMenu !== 'string') {
    choiceMenu = "ENTREE"
  }
  return (
    <div className='contenuMenu'>
        <Header/>
        <h1>Menu</h1>
        <Buttons/>
        <h2>{menuContaint[choiceMenu].title}</h2>
        <p>{menuContaint[choiceMenu].text1}</p>
        <span>{menuContaint[choiceMenu].textOu}</span>
        <p>{menuContaint[choiceMenu].text2}</p>
        <span>{menuContaint[choiceMenu].textOu}</span>
        <p>{menuContaint[choiceMenu].text3}</p>
        <span>{menuContaint[choiceMenu].textOu}</span>
        <p>{menuContaint[choiceMenu].text4}</p>
        <span>{menuContaint[choiceMenu].textOu}</span>
        <p>{menuContaint[choiceMenu].text5}</p>
    </div>
  )
}

export default MenuPage
