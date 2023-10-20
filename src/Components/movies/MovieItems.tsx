import React, { FC } from "react";
import Movies from "./Data/currentMovies";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MovieItems.scss";

type currentMovie={
  name: string,
  id: string
};

const MovieItems: FC= () => {
  const navigate = useNavigate();
  const allMovies = Movies.getAllMovies();
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5
  };

  const handleMovieRedirect = (movie:currentMovie) =>{
      navigate(`/movies/${movie.name}/${movie.id}`);
  }
    return (
      <div className="movie-container">
        <h4 style={{color:'#000'}}>Recommended Movies</h4>
        <Slider {...settings}>
          {allMovies.map((movie) => {
            return(
              <div key={movie.id} className="movie">
                  <img src={movie.url} alt={movie.name} onClick={()=>handleMovieRedirect({name:movie.name,id:movie.id})} />
                  <div className="movie-footer">
                    <p className="movie-name">{movie.title}</p>
                    <p className="movie-genre">{movie.genre}</p>
                  </div>
              </div>
            );
          })}
          </Slider>
      </div>
      
    );
};

export default MovieItems;
