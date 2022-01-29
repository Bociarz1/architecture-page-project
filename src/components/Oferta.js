import './Oferta.css';
import Slider from '../Slider/Slider';

const Oferta = () => {
    return ( 
        <div className="offer">
            <div className="img">
                <p>Zajmujemy się kompleksową obsługą projektów wraz z załatwieniem wszystkich formalności w urzędach.</p>
            </div>
            <div className="main">
                <Slider/>
            </div>
            <p>Nasza oferta ma charakter kompleksowy i obejmuje usługi świadczone przez specjalistów różnych dziedzin – architektów, konstruktorów, projektantów instalacji, kosztorysantów. Posiadamy bogate doświadczenie w projektowaniu.</p>

        </div>
     );
}
 
export default Oferta;