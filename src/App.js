import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Nav from "./layouts/Nav";
import Footer from "./layouts/Footer";
import Home from "./components/Home";
import ONas from "./components/ONas";
import Projekty from "./components/Projekty";
import Oferta from "./components/Oferta";
import Kontakt from "./components/Kontakt";
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Nav/>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/onas" element={<ONas />}/>
            <Route path="/projekty" element={<Projekty />}/>
            <Route path="/oferta" element={<Oferta />}/>
            <Route path="/kontakt" element={<Kontakt />}/>
          </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
