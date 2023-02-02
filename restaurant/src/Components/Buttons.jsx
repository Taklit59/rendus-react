import React, { useContext } from 'react'
import { monContexte } from './Context.jsx/MenuContext'
import './Buttons.css'
import './DataMenus'

function Buttons() {

    const {modifyButton} = useContext(monContexte)

  return (
    <div className='allButton'>

    <button onClick={() => modifyButton("ENTREE")} >
        Entrée
    </button>
      
    <button onClick={() => modifyButton("PLAT")} >
        Plat
    </button>
    
    <button onClick={() => modifyButton("DESSERT")} >
        Dessert
    </button>
  </div>
  )
}

export default Buttons
