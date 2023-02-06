import './Footer.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FaFacebook, FaInstagram } from "react-icons/fa";


export default function Footer() {

    return (
        <footer>
            <h4>Suivez-nous sur les réseaux</h4>
            
            <div className="icon-reseau">
                <a href="https://www.facebook.com/LaTableDeChantal"><FaFacebook className="rs facebook" /></a>
                <a href="insta"><FaInstagram className="rs instagram"/></a>
            </div>
           
        </footer>
    )
}