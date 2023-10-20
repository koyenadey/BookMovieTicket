import React from 'react';
import './SearchBar.scss';
import logo from './bms.png';

const SearchBar = () =>{
    return (
        <div className="SearchBar">
            <img src={logo} alt="bookmyshowlogo" />
            <input type="text" id="serachMovie" placeholder="Seach for Movies, Events, Plays,Sports and Activities" />
        </div>
    );
}

export default SearchBar;