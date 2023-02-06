import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './Home.css'
import Slider from './Slider'

function Home() {
  return (
<div >
  <Header/>
  <Slider/>
            <div className="content-pres">
                <div className='bandeau'>
                    <span>Jean-Michel Cuisine 
                        <br/>
                        <em>9 ans d'expérience</em>
                    </span>
                    
                </div>
                <img src={process.env.PUBLIC_URL + `/Images/pres-chef.jpg`} alt="hey" />
            
                <div className="description">
                    <h1><em>"Le meilleur chef cuisinier du monde"</em> <span className='citation'>- Marie-Claude (sa maman)</span></h1>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque 
                    ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia 
                    voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque 
                    porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora 
                    incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam 
                    corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate 
                    velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>

                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque 
                    ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia 
                    voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque 
                    </p></div>
            </div>
            
            <div className='etablissement'>
                <div className="description2">
                    <h1><em>"L'ambiance du restaurant est géniale"</em> <span className='citation'>- Marie-Claude (sa maman)</span></h1>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque 
                    ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia 
                    voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque 
                    porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora 
                    incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam 
                    corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate 
                    velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>

                    </div>
                <div className='bandeau'>
                    <span>La table de Chantal  
                        <br/>
                        <em>1er étage du restaurant</em>
                    </span>
                    
                </div>
                <img src={process.env.PUBLIC_URL + `/Images/restaurant.jpg`} alt="hey" />
            </div>
            <Footer/>
        </div>
  )
}

export default Home
