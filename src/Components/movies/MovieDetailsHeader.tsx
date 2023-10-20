import React,{ReactElement, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Movies from "./Data/currentMovies";
import MovieDetail from "./Data/currentMovieDetails";
import BoxOffice from "./Data/boxOfficeDetails";
import "./MovieDetailsHeader.scss";
import {FaThumbsUp} from 'react-icons/fa6';
import {BsFillStarFill} from 'react-icons/bs';

interface HeaderProp{
    id: string|undefined;
}

type Movie={
    id: string;
    url: string;
    coverurl: string;
    title: string,
    name: string;
    genre: string;
    caution:string;
    duration: string;
}|undefined;

type SelectedMovieDetail={
    id: string;
    status: string;
    releaseDate: string;
    about: string;
    cast: {
        image:string,
        name: string,
        role: string
    }[] | string[];
    crew: {
        image:string;
        name: string;
        role: string;
    }[] | string[];  
} | undefined;

type BoxOfficeDetails={
    id: string,
    tickets: number;
    liked: number;
    rating: number[];
}| undefined;

const MovieDetailsHeader=({id}:HeaderProp)=>{
    const navigate = useNavigate();
    const [headerIsVisible,setHeaderIsVisible] = useState<boolean>(false);
    useEffect(()=>{
        const handleScroll = (): void => {
            const middleOfPage = window.innerHeight * 0.5;
            const scrollPosition = window.pageYOffset;
      
            if (scrollPosition > middleOfPage) {
                setHeaderIsVisible(true);
            } else {
                setHeaderIsVisible(false);
            }
          };
      
          window.addEventListener('scroll', handleScroll);
      
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
    },[]);

    const selectedMovie:Movie = Movies.getMovie(id);
    const selectedMovieDetail:SelectedMovieDetail = MovieDetail.getMovieDetails(id);

    const handleTicketBooking = () =>{
        navigate(`/booktickets/${selectedMovie.name}/${id}`,{replace:true});
    }

    const selectedBoxOfficeDetail:BoxOfficeDetails = BoxOffice.getMovieBoxOfficeData(id);
    const movieStatusHeader:string = selectedMovieDetail?.status.includes("Releasing")?selectedMovieDetail?.status:"Add your rating & review";
    const movieStatusSubHeader:string = selectedMovieDetail?.status.includes("Releasing")?"Are you interested in watching is this movie?":"Your ratings matter";
    const movieStatHeadStyle:string = selectedMovieDetail?.status.includes("Releasing")?"interested-body-h2":"rate-body-h2";
    const buttonStyle:string = selectedMovieDetail?.status.includes("Releasing")?"like-button-interested":"like-button-rate"
    const buttonText: string = selectedMovieDetail?.status.includes("Releasing")?"I'm interested":"Rate now";
    const rateboxStyle:string = selectedMovieDetail?.status.includes("Releasing")?"rate":"like";
    const likeInterested:ReactElement = selectedMovieDetail?.status.includes("Releasing")? <FaThumbsUp style={{color:'green',height:'32',width:'32'}} />: <BsFillStarFill style={{color:'salmon',height:'32',width:'32'}} />;
    const ratings:string|undefined = selectedMovieDetail?.status.includes("Releasing")? `${BoxOffice.getMovieBoxOfficeData(id)?.liked}` : `${BoxOffice?.getMovieRating(id)}/10`;
    const ratingsQuote:string = selectedMovieDetail?.status.includes("Releasing")?`people are interested`:`${selectedBoxOfficeDetail?.liked} Votes`;
    return(
        <section className="banner-fullWrapper">
            <div className="cover-image" style={{backgroundImage:`linear-gradient(90deg, #1A1A1A 24.97%, #1A1A1A 38.3%, rgba(26, 26, 26, 0.0112) 97.47%, #1A1A1A 100%),url(${selectedMovie.coverurl})`}}>
                    <div className="banner-container"> 
                        <div className="multimedia-container">
                            <section className="mutimedia-wrapper">
                                <div className="multimedia-body">
                                    <img src={selectedMovie?.url} alt={selectedMovie?.title} />
                                </div>
                                <div className="multimedia-details">
                                    {selectedMovieDetail?.status}
                                </div>
                            </section>
                        </div>
                        <div className="eventInformationContainer">
                            <h1>{selectedMovie?.title}</h1>
                            <p>{likeInterested} <span style={{fontSize:'24px',lineHeight:'30px',letterSpacing:'0.2px',fontWeight:'700px'}}>{ratings}</span> {ratingsQuote}</p>
                            <section>
                                <div className={rateboxStyle}>
                                    <div className="rate-body">
                                        <p className="rate-body-h1">{movieStatusHeader}</p>
                                        <p className={movieStatHeadStyle}>{movieStatusSubHeader}</p>
                                    </div>
                                    <div className={buttonStyle}>
                                        <button>{buttonText}</button>
                                    </div>
                                </div>
                            </section>
                            <div className="eventAttributesWrapper">
                                <span className="halltype">2D,IMAX-2D</span>
                                <span className="languagetype">English,Hindi</span>
                                <p className="duration">
                                    <span>{selectedMovie?.duration}</span>.
                                    <span>{selectedMovie?.genre}</span>.
                                    <span>{selectedMovie?.caution}</span>
                                </p>
                            </div>
                            <button className="book-ticket" onClick={handleTicketBooking}>Book Tickets</button>
                        </div>
                        <div className="shareContainer"></div>
                    </div>
                </div>
            {headerIsVisible && <section className="sticky-header" style={{ height: '65vh' }}>
                <div className="sticky-header-wrapper">
                    <div className="sticky-header-title">
                        <h1>{selectedMovie?.title}</h1>
                        <small><span style={{marginLeft:'20px',width:'10px',height:'10px'}}>{likeInterested}</span><span style={{fontSize:'14px',lineHeight:'14px',letterSpacing:'0.2px',fontWeight:'500'}}> {ratings}</span> {ratingsQuote}</small>
                    </div>
                    <div className="sticky-button-wrapper">
                        <button className="sticky-book-ticket" onClick={handleTicketBooking}>Book tickets</button>
                    </div>
                </div>
            </section>}
        </section>
    );
}
export default MovieDetailsHeader;