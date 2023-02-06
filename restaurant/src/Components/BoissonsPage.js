import React from 'react'
import Header from './Header'
import './BoissonsPage.css'
import { menuContaint } from './DataMenus'
import Footer from './Footer'

function BoissonsPage() {
  return (
    <div>
        <Header/>
      <h1>Boissons</h1>
      <div className="conteneurBoissons">
        <img className="verre" src={process.env.PUBLIC_URL + `/Images/verre1.jpg`} alt="Verre 1" />
        <div className="listesBoissons">
            <h2 className='titrePrincipale'>Des accords étonnants</h2>
          {menuContaint.map((boisson) => {
            if (boisson.categorie === "Nos Boissons") {
              return (
                <div key={boisson.id} className=''>
                  <h3>{boisson.titre}</h3>
                  <p>{boisson.nom}</p>
                </div>
              )
            }
          })}
        </div>
        <img className="verre" src={process.env.PUBLIC_URL + `/Images/verre2.jpg`} alt="Verre 2" />
      </div>
      <Footer/>
    </div>
  )
}

export default BoissonsPage
