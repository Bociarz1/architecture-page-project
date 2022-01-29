import './ONas.css';
import { FaPaperclip } from 'react-icons/fa';

const ONas = () => {
    return ( 
        <div className="aboutus">
            <div className="img">
                <p>Wsłuchujemy się bardzo uważnie w potrzeby klienta.</p>
            </div>
            <div className="maincontent">
                <div className="about">
                    <h3>O pracowni</h3>
                    <p>Pracownia Architektoniczna istnieje od 2004 roku.
                    Właścicielem firmy jest architekt John Patten, absolwent WBiA Politechniki Szczecińskiej, posiadający uprawnienia do projektowania w specjalności architektonicznej bez ograniczeń, członek IARP, który swoje doświadczenie zawodowe zdobywał we współpracy z architektami indywidualnymi, biurami architektonicznymi, osobami z branży
                    i developerami. Zaowocowało to stworzeniem autorskiego biura.</p>

                </div>
                <div className="mission">
                    <h3>Nasza misja</h3>
                    <p>Naszą misją jest tworzenie wysokiej jakości architektury, dbając jednocześnie o zadowolenie naszych Klientów.</p>
                    <p>Staramy się, by projekt harmonizował z otoczeniem oraz był funkcjonalny w zgodzie z rachunkiem ekonomicznym Inwestora.</p>
                    <p>Rozumiemy potrzeby naszych Klientów
                    i zawsze dbamy o optymalne rozwiązania.</p>
                </div>
                <div className="whyus">
                    <h3>Dlaczego my?</h3>
                    <ul>
                        <li><FaPaperclip/> Dzięki doświadczeniu i partnerstwu ze sprawdzonymi projektantami branżowymi, nasze biuro projektów dysponuje potencjałem umożliwiającym realizację kompleksowych projektów.</li>
                        <li><FaPaperclip/> Pracownia projektowa posiada doświadczenie w projektowaniu budynków mieszkalnych, usługowych oraz obiektów przemysłowych.</li>
                        <li><FaPaperclip/> Zajmujemy się małymi, jak i dużymi inwestycjami.</li>
                        <li><FaPaperclip/> Załatwiamy wszelkiego rodzaju niezbędne formalności i uzgodnienia dla uzyskania pozwolenia na budowę.</li>
                        <li><FaPaperclip/> Do każdego tematu indywidualnie dobieramy zespół branżystów spośród stałych współpracowników w celu uzyskania najlepszych efektów pracy.</li>
                        <li><FaPaperclip/> Profesjonalną dokumentację projektową tworzymy za pomocą legalnego oprogramowania (ArchiCAD, IntelliCAD)</li>
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default ONas;