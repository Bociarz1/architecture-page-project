import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import './Kontakt.css'

import { FaPhoneAlt,FaMailBulk, FaHome } from 'react-icons/fa';

const Kontakt = () => {
    const mapStyle = {
        height: '400px',
         width: '400px',
         marginTop: '10px',
         borderRadius: '10px',
    }
    const loc = [52.2746477031666, 20.98010298149669]
    return ( 
        <div className="contact">
            <div className="form">
            <h3>Chcesz zadzwonić lub wysłać maila?</h3>
                <p><b><FaPhoneAlt color="gray"/></b> 123 123 123</p>
                <p><b><FaMailBulk color="gray"/></b> Company@gmail.com</p>
                <div className="write">
                <h3>Napisz do architekta</h3>
                <label>
                    Imię
                    <input type="text" placeholder="Wpisz imię"/>
                    Email 
                    <input type="text" placeholder="Wpisz e-mail"/> Wiadomość
                    <input type="text" className="message" placeholder="Napisz wiadomość"/>
                </label>
                <label className="labelCheckbox">
                    <input className="checkbox" type="checkbox"/><p>Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z ustawą o ochronie danych</p>
                </label>
                <button>Wyślij</button>
            </div>        
        </div>
            <div className="map">
                <h3>Może wolisz odwiedzić nas osobiście?</h3>
                <p className="adress"><FaHome size="40px" color="gray"/>ul.Bieniewicka 201A,</p>
                <p className="adress detail">01-632 Warszawa</p>
            <MapContainer style={mapStyle} center={loc} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={loc}>
                <Popup>
                <b style={{fontSize:'19px'}}>Bieniewicka 201A, 01-632 Warszawa</b>
                </Popup>
            </Marker>
            </MapContainer>
            </div>
        </div>
     );
}
 
export default Kontakt;
