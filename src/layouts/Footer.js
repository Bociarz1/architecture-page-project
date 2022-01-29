import React, {} from 'react';
import './Footer.css';

import { FaPhoneAlt,FaMailBulk,FaFacebook,FaHandsHelping,FaPaperclip } from 'react-icons/fa';

const Footer = () => {
    return ( 
        <footer>
            <div className="contact"> 
                <h3>Szybki kontakt</h3>
                <p>Chcesz zadzwonić lub wysłać maila?</p>
                <p><b><FaPhoneAlt/></b> 123 123 123</p>
                <p><b><FaMailBulk/></b> Company@gmail.com</p>

                <h3>Polub nas na Facebook’u</h3>
                <b><FaFacebook/></b>
            </div>
            <div className="write">
                <h3>Napisz do architekta</h3>
                <label>
                <input type="text" placeholder="Wpisz imię"/> Imię
                </label>
                <label>
                <input type="text" placeholder="Wpisz e-mail"/> Email
                </label>
                <label>
                <input type="text" className="message" placeholder="Napisz wiadomość"/> Wiadomość
                </label>
                <label className="labelCheckbox">
                <input className="checkbox" type="checkbox"/><p> Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z ustawą o ochronie danych</p>
                </label>
                <button>Wyślij</button>
            </div>
            <div className="tutorial">
                <h3>Poradnik</h3>
                <p><FaHandsHelping/> Porady architekta</p>

                <h3>Przydatne linki</h3>
                <p><FaPaperclip/> Plany zagospodarowania przestrzennego miasta Szczecin</p>
                <p><FaPaperclip/> Prawo budowlane</p>

                <h3>Wybierz doświadczenie</h3>
                <p>Doświadczony architekt potrafi stworzyć dobrą architekturę, dostosowaną do otoczenia oraz potrzeb jego użytkowników.</p>
            </div>
        </footer>
     );
}
 
export default Footer;