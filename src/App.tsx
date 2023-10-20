import React,{FC} from 'react';
import {Routes,Route} from 'react-router-dom';
import TheatreContext from './Components/store/TheatreContext';
import MoviesHome from './Components/movies/MoviesHome';
import MovieDetails from './Components/movies/MovieDetails';
import BookTickets from './Components/movies/BookTickets';
import BookSeats from './Components/movies/BookSeats';
import GrabABite from './Components/movies/GrabABite';
import './index.css';


const App:FC =()=> {
  
  return (
      <Routes>
        <Route path="/" element={<MoviesHome />} />
        <Route path="/movies/:name/:id" element={<MovieDetails />} />
        <Route path="/booktickets/:name/:id" element={<TheatreContext><BookTickets /></TheatreContext>} />
        <Route path="/seats/:name/:id" element={<TheatreContext><BookSeats /></TheatreContext>} />
        <Route path="/grababite/:name/:id" element={<TheatreContext><GrabABite /></TheatreContext>} />
      </Routes>
  );
}

export default App;
