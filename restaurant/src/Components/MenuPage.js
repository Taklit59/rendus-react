import {React} from 'react'
import Header from './Header'
import './MenuPage.css'
import { menuContaint } from './DataMenus'
// import { monContexte } from './Context.jsx/MenuContext'
// import MenuContext from './Context.jsx/MenuContext'


function MenuPage() {
  // const {choiceMenu} = useContext(monContexte)
  
  console.log(menuContaint.DESSERT.title);
  return (
    // <MenuContext>
    <div className='contenuMenu'>
        <Header/>
        <h1>Menu</h1>
        <div className='allButton'>
          <button>
            Entrée
          </button>
          <button>
            Plat
          </button>
          <button>
            Dessert
          </button>
        </div>

    </div>
    /* </MenuContext> */
  )
}

export default MenuPage
