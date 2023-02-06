import React from 'react'
import Header from './Header'
import './ContactPage.css'
import Footer from './Footer'

function ContactPage() {
  return (
    <div>
        <Header/>
      <h1>Nous contacter</h1>
      <div className='allContaint'>
      <form id="form">
      <div className="form-group">
        <label htmlFor="inputName">Nom</label>
        <input type="text" className="form-control" id="inputName" placeholder="Entrez votre nom" required/>
      </div>
      <div className="form-group">
        <label htmlFor="inputEmail">Email</label>
        <input type="email" className="form-control" id="inputEmail" placeholder="Entrez votre email" required/>
      </div>
      <div className="form-group">
        <label htmlFor="inputSujet"></label>
        <select typeof='select' className="form-control" name="inputSujet" id="inputSujet">
          <option value="">Sujet de votre message</option>
          <option value="menu">Questions sur les menus?</option>
          <option value="horaire">Questions sur les horaires?</option>
          <option value="suggestion">Suggestion pour s'amelioré?</option>
          <option value="lost">Objet perdu?</option>
          <option value="autre">Autre</option>
        </select>
      </div>
      <div className="textArea">
        <textarea name="contenu" id="contenu" className="form-control" cols="30" rows="10" placeholder='Ecrire ici...'></textarea>
      </div>
    <button type="submit" className="btn btn-primary" id="submit-button">Envoyer</button>
      </form>
      <div className="presentation">
        <h3>La Table de Chantal</h3>
        <h4>297 chaussee Fernand Forest, 59200 Tourcoing, France</h4>
        <h5>Les restaurants suivants sont à proximité directe de La Table de Chantal. Ces restaurants sont proches de 297 chaussee Fernand Forest, 59200 Tourcoing, France et constituent donc une alternative à La Table de Chantal.</h5>
        <h6>Télephone : (+33)320238465</h6>
      </div>
      <iframe title="carte" className='carte' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2525.130857801912!2d3.147439816022914!3d50.73606177951584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c32edc87b2b5ad%3A0xa2d9eec091e57342!2sLa%20table%20de%20Chantal!5e0!3m2!1sfr!2sfr!4v1675436243266!5m2!1sfr!2sfr" width="600" height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <Footer/>
    </div>
  )
}

export default ContactPage
