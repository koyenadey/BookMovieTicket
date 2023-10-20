import React from 'react';
import MovieDetail from "./Data/currentMovieDetails";
import "./MovieDetailsBody.scss";

type BodyProp={
    id: string | undefined;
}

type MovieDetailType={
    id: string;
    title:string;
    status: string;
    releaseDate: string;
    about: string;
    cast: { 
        image:string; 
        name:string; 
        role:string 
    }[] | string[];
    crew: { 
        image:string; 
        name:string; 
        role:string 
    }[] | string[];
} | undefined;

const MovieDetailsBody = ({id}:BodyProp) =>{
    const selectedMovie:MovieDetailType = MovieDetail.getMovieDetails(id);
    const castList: any = selectedMovie?.cast;
    const crewList: any = selectedMovie?.crew;
    return(
        <section className="movie-body-wrapper">
                <section className="about-movie">
                    <h4>About the movie</h4>
                    <div className="about-movie-body">
                        <span>{selectedMovie?.about??""}</span>
                    </div>
                </section>
                <section className="about-cast">
                    <div>
                        <h4>Cast</h4>
                    </div>
                    <div className="cast">
                    {castList?.map((c:any)=>(
                        <div className="cast-data" key={c.name}>
                            <img src={c.image} alt={c.name} />
                            <div className="cast-footer">
                                <p className="cast-name">{c.name}</p>
                                <p className="cast-role">as {c.role}</p>
                            </div>
                        </div>
                    ))}      
                    </div>
                </section>
                <section className="about-crew">
                    <div>
                        <h4>Crew</h4>
                    </div>
                    <div className="crew">
                    {crewList?.map((c:any)=>(
                        <div className="crew-data" key={c.name}>
                            <img src={c.image} alt={c.name} />
                            <div className="crew-footer">
                                <p className="crew-name">{c.name}</p>
                                <p className="crew-role">{c.role}</p>
                            </div>
                        </div>
                    ))}      
                    </div>
                </section>
            </section>
    );
}
export default MovieDetailsBody;