import React,{FC} from 'react';
import { useParams } from 'react-router-dom';
import Layout from "./Layout";
import MovieDetailsBody from "./MovieDetailsBody";
import MovieDetailsHeader from './MovieDetailsHeader';
import './MovieDetails.scss';

type Parameters={
    id: string|undefined;
};

const MovieDetails:FC = () =>{
    const {id} = useParams<Parameters>();
   
    return(
       <Layout>
            <MovieDetailsHeader id={id} />
            <MovieDetailsBody id={id} />
        </Layout>
    );
}

export default MovieDetails;