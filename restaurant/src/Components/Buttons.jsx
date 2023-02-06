import React, { useContext } from 'react'
import { monContexte } from './Context.jsx/MenuContext'
import './Buttons.css'
import './DataMenus'

function Buttons() {

    const {modifyButton} = useContext(monContexte)

  return (
    <div className='allButton'>

    <button onClick={() => modifyButton("Nos Entrées")} >
        Entrée
    </button>
      
    <button onClick={() => modifyButton("Nos Plats")} >
        Plat
    </button>
    
    <button onClick={() => modifyButton("Nos Desserts")} >
        Dessert
    </button>
  </div>
  )
}

export default Buttons
