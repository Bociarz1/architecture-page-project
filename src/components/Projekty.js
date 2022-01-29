import React, { useState } from 'react';
import './Projekty.css';

import img01 from '../images/img01.jpg';
import img02 from '../images/img02.jpg';
import img03 from '../images/img03.jpg';

import img001 from '../images/img001.jpg';
import img002 from '../images/img002.jpg';
import img003 from '../images/img003.jpg';

import img0001 from '../images/img0001.jpg';
import img0002 from '../images/img0002.jpg';
import img0003 from '../images/img0003.jpg';


const project = [
    {
        id: "Domy jednorodzinne",
        name: "Domy jednorodzinny 1", 
        img: img01,
    },
    {
        id: "Domy jednorodzinne",
        name: "Domy jednorodzinny 2", 
        img: img02,
    },
    {
        id: "Domy jednorodzinne",
        name: "Domy jednorodzinny 3",
        img: img03, 
    },
    {
        id: "Hale magazynowe",
        name: "Hale magazynowa 1", 
        img: img001, 
    },
    {
        id: "Hale magazynowe",
        name: "Hale magazynowa 2", 
        img: img002, 
    },
    {
        id: "Hale magazynowe",
        name: "Hale magazynowa 3", 
        img: img003,   
    },
    {
        id: "Budynki usługowo-handlowe",
        name: "Budynek usługowo-handlowy 1", 
        img: img0001, 
    },
    {
        id: "Budynki usługowo-handlowe",
        name: "Budynek usługowo-handlowy 2", 
        img: img0002, 
    },
    {
        id: "Budynki usługowo-handlowe",
        name: "Budynek usługowo-handlowy 3", 
        img: img0003, 
    },
]

const Projekty = () => {
    const divStyle = {
        display: 'flex',
        flexDirection: 'column',
        maxHeight: "400px",
        maxWidth: "400px",
        marginTop: '30px',
    }
    const imgStyle = {
        height: "350px",
        width: "350px",
    }
    const spanStyle = {
        display: 'block',
        textAlign: 'center',
        fontSize: '25px',
        fontWeight: 'bold',
        marginTop: '10px',
    }
    const liStyle = {
        listStyleType: "none",
    }
    const [filter,setFilter] = useState(project.map(item => <li key={item.name} style={liStyle}>
        <div style={divStyle}>
            <img alt={item.name} src={item.img} style={imgStyle}/>
            <span style={spanStyle}>{item.name}</span>
        </div>
    </li>));

    const handleClick = (event) => {
        if(event.target.id ==="Wszystkie") {
            setFilter(project.map(item => <li key={item.name} style={liStyle}>
                <div style={divStyle}>
                    <img alt={item.name} src={item.img} style={imgStyle}/>
                    <span style={spanStyle}>{item.name}</span>
                </div>
            </li>));
        }
        else if(event.target.id ==="Domy jednorodzinne") {
            const filterArray = project.filter(item => item.id === "Domy jednorodzinne")
            setFilter(filterArray.map(item => <li key={item.name} style={liStyle}>
                <div style={divStyle}>
                    <img alt={item.name} src={item.img} style={imgStyle}/>
                    <span style={spanStyle}>{item.name}</span>
                </div>
            </li>));
        }
        else if(event.target.id ==="Hale magazynowe") {
            const filterArray = project.filter(item => item.id === "Hale magazynowe")
            setFilter(filterArray.map(item => <li key={item.name} style={liStyle}>
                <div style={divStyle}>
                    <img alt={item.name} src={item.img} style={imgStyle}/>
                    <span style={spanStyle}>{item.name}</span>
                </div>
            </li>));
        }
        else if(event.target.id ==="Budynki usługowo-handlowe") {
            const filterArray = project.filter(item => item.id === "Budynki usługowo-handlowe")
            setFilter(filterArray.map(item => <li key={item.name} style={liStyle}>
                <div style={divStyle}>
                    <img alt={item.name} src={item.img} style={imgStyle}/>
                    <span style={spanStyle}>{item.name}</span>
                </div>
            </li>));
        }
    }
    return ( 
        <div className="projects">
            <div className="category">
                <h3>Kategorie :</h3>
                <span id="Wszystkie"onClick={handleClick}>Wszystkie</span>
                <span id="Domy jednorodzinne" onClick={handleClick}>Domy jednorodzinne</span>
                <span id="Hale magazynowe" onClick={handleClick}>Hale magazynowe</span>
                <span id="Budynki usługowo-handlowe" onClick={handleClick}>Budynki usługowo-handlowe</span>
            </div>
            <div className="project">
                {filter}
            </div>
        </div>
     );
}
 
export default Projekty;