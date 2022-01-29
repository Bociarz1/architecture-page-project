import './Home.css'
import { FaPencilAlt,FaPuzzlePiece,FaHome,FaCube } from "react-icons/fa";

const Home = () => {
    return ( 
        <div className="home">
            <div className="img">
                <p>Dbamy o dobry projekt Twojego budynku.</p>
            </div>
            <div className="icons">
                <div className="pen">
                    <span><FaPencilAlt size="65px" color="gray"/> </span>
                    <h3>Architektura</h3>
                    <p>Projektujemy energooszczędnie
                    i funkcjonalnie.
                    Aby budynek służył Tobie wiele lat.</p>
                    </div>
                    <div className="puzzle">
                    <span><FaPuzzlePiece size="65px" color="gray"/></span>
                    <h3>Koordynacja</h3>
                    <p>Łączymy nasze doświadczenie, budżet
                    i rozwiązania projektowe
                    w sprawnie działającą całość.</p>
                </div>
                <div className="home">
                    <span><FaHome size="65px" color="gray"/></span>
                    <h3>Twój Dom</h3>
                    <p>Czy możesz opisać dom swoich marzeń?
                    Zaprojektujemy go z pasją,
                    a Ty zamieszkasz w nim
                    z radością.</p>
                </div>
                <div className="home">
                    <span><FaCube size="65px" color="gray"/></span>
                    <h3>Twój Biznes</h3>
                    <p>Masz wizję Twojego przyszłego biznesu?
                    Wykreujemy przestrzeń,
                    która da Twojej firmie
                    energię do działania.</p>
                </div>
            </div>
            <p className="about">Nasza firma to autorskie biuro architektoniczne
            i nadzór budowlany.</p>
            <div className="questions">
                <div>
                    <h3>Masz do nas pytania?</h3>
                    <p>Nic prostszego. Skontaktuj się z nami!</p>
                </div>
                <button>+ 123 123 123</button>
                <p>lub</p>
                <button>Napisz do nas</button>
            </div>
        </div>
     );
}
 
export default Home;