import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.scss';

const NavBar = () =>{
    return(
       <ul className='NavBar'>
        <li><Link style={{color:'#ccc',textDecoration:'none',margin:'10px'}} to="/">Movies</Link></li>
        <li>Stream</li>
        <li>Event</li>
        <li>Plays</li>
        <li>Sports</li>
        <li>Activities</li>
        <li>Buzz</li>
       </ul>
    );
}

export default NavBar;