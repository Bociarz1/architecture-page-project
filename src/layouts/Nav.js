import { Link } from 'react-router-dom'
import './Nav.css';

const Nav = () => {
    const linkStyle = {
        textDecoration: 'none',
    }
    return ( 
        <nav>
            <p>Company logo</p>
            <ul>
                <Link to="/" style={linkStyle}><li>Home</li></Link>
                <Link to="/onas" style={linkStyle}><li>O nas</li></Link>
                <Link to="/projekty" style={linkStyle}><li>Projekty</li></Link>
                <Link to="/oferta" style={linkStyle}><li>Oferta</li></Link>
                <Link to="/kontakt" style={linkStyle}><li>Kontakt</li></Link>
            </ul>
        </nav>
     );
}
 
export default Nav;