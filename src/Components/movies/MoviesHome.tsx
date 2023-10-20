import React from "react";
import Layout from "./Layout";
import MainSlider from '../Slider/MainSlider';
import MovieItems from "./MovieItems";

const MoviesHome = () => {
  return (
    <Layout>
        <MainSlider />
        <MovieItems />
    </Layout>
      
  );
};

export default MoviesHome;
