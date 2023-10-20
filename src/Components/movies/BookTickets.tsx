import React,{useContext, useEffect,useState} from 'react';
import { Link, useParams,useNavigate } from 'react-router-dom';
import Layout from './Layout';
import {theatreContextData} from '../store/TheatreContext';
import Movie from './Data/currentMovies';
import BoxOffice from './Data/boxOfficeDetails';
import HallDetails from './Data/movieHallDetails';
import DropDown from '../controls/DropDown';
import {GoDotFill} from 'react-icons/go';
import {BsChatLeftText} from 'react-icons/bs';
import {CiMobile3} from 'react-icons/ci';
import {MdFastfood} from 'react-icons/md';
import './BookTickets.scss'; 

type Movies={
    id: string;
    url: string;
    coverurl: string;
    title: string;
    name: string;
    genre: string;
    caution: string;
    duration: string;   
}

type BoxOfficeList = {
    id: string;
    tickets: number;
    liked: number;
    rating: number[];
    theatre: string[];
    price: string[];
}

type optionValueType={
    ddlInitValue: string;
    ddlValues: string[] | undefined
}

type hallTypes={
    hallName: string;
    mobileTicket: string;
    beverages: string;
    timings: string[];
    baseAmount: number;
    seats: {
        Classic: string[];
        Silver: string[];
        Gold: string[];
        Prime: string[];
    }
}[];

type theatre={
    hallName: string;
    mobileTicket: string;
    beverages: string;
    timings: string[];
    baseAmount: number;
    seats: {
        Classic: string[];
        Silver: string[];
        Gold: string[];
        Prime: string[];
    }
}

const BookTickets = () =>{
    const {name,id} = useParams<{name:string,id:string}>();
    const [isFixed,setIsFixed] = useState<boolean>(false);
    const navigate = useNavigate();
    const {setTheatreData} = useContext(theatreContextData);
    useEffect(()=>{
        const handleScroll = () =>{
            const oneThirdOfPage = window.innerHeight * 0.3;
            const scrollPosition = window.pageYOffset;  
            if(scrollPosition > oneThirdOfPage)    
                setIsFixed(true);
            else setIsFixed(false);
        }
        window.addEventListener('scroll',handleScroll);
    },[]);
    

    const movie:Movies = Movie.getMovie(id);
    const movieBoxOfficeDetails:BoxOfficeList | undefined = BoxOffice?.getMovieBoxOfficeData(id);
    const hallLists:hallTypes = HallDetails.getAllDetails();
    const theatreList: string[]|undefined = movieBoxOfficeDetails?.theatre;
    const priceList:string[]|undefined = movieBoxOfficeDetails?.price;
    const movieTimings:string[] = ["Morning","After-noon","Evening","Night"];

    
    const dropDownOptions:optionValueType = {
        ddlInitValue: "Select theatre type",
        ddlValues: theatreList
    }
    const priceRangeOptions:optionValueType ={
        ddlInitValue: "Filter Price Range",
        ddlValues: priceList
    }
    
    const timingsOptions:optionValueType = {
        ddlInitValue: "Filter Show Timings",
        ddlValues: movieTimings
    }
    
    const handleOptValueChange = (optionValue:string):void =>{
        console.log(optionValue);
    }

    const handleShowTimings = (timings:string,theatreDetails:theatre):void =>{
        const theatreStoreData = {
            hallName: theatreDetails.hallName,
            moviename: name,
            timings: timings,
            baseAmount: theatreDetails.baseAmount,
            seats: theatreDetails.seats
        };
        
        setTheatreData(theatreStoreData);

        navigate(`/seats/${name}/${id}`);
        //navigate(`/test/${name}/${id}`);
        
    } 

    return(
        <Layout>
            <section className="movie-hall-wrapper">
                <div className="movie-details">
                    <Link style={{textDecoration:'none'}} to={`/movies/${name}/${id}`}><h1>{movie.title}</h1></Link>
                    <span>{movie.caution}</span><span>{movie.genre.toUpperCase()}</span>
                </div>
            </section>
            <section className="sticky-movie-wrapper" style={isFixed?{position:'fixed',top:'0',height:'7%'}:{position:'absolute'}}>
                <section className="sticky-movie-filters">
                    <div className="movie-calender">
                    </div>
                    <div className="theatre-type">
                        <DropDown options={dropDownOptions} onDropDownChange={handleOptValueChange} />
                    </div>
                    <div className="movie-price">
                        <DropDown options={priceRangeOptions} onDropDownChange={handleOptValueChange} />
                    </div>
                    <div className="movie-timings">
                        <DropDown options={timingsOptions} onDropDownChange={handleOptValueChange} />
                    </div>
                    <div className="search-by-cinema"></div>
                </section>
            </section>
            <section className="theatre-body">
                <section className="theatre-ticket-availibility">
                        <div>
                            <span><GoDotFill style={{color:'green',height:'14px',width:'14px'}} /></span>
                            <span style={{color:'#717171',fontSize:'10px'}}> AVAILABLE</span>
                        </div>
                        <div>
                            <span><GoDotFill style={{color:'salmon',height:'14px',width:'14px'}} /></span>
                            <span style={{color:'#717171',fontSize:'10px'}}> FAST-FILLING</span>
                        </div>
                        <div>
                            <span><BsChatLeftText style={{color:'green',height:'12px',width:'13px'}} /></span>
                            <span style={{color:'#717171',fontSize:'10px'}}> SUBTITLES LANGUAGE</span>
                        </div>
                </section>
                
                    <section className="theatre-list">
                    {hallLists.map(hall=>
                        <div className="hall-lists" key={hall.hallName}>
                            <div>
                                <p>{hall.hallName}</p>
                                <span><CiMobile3 style={{color:'green',height:'20px',width:'25px'}} /></span>
                                <span style={{fontSize:'14px',color:'green'}}>{hall.mobileTicket?"M-ticket":""}</span>
                                <span>{hall.beverages === 'Food and beverages'?<MdFastfood style={{display:'inline-block',color:'#ffa426',marginLeft:'5px'}} />:<MdFastfood style={{display:'inline-block',color:'#fff',marginLeft:'5px'}} />}</span>
                                <span style={{display:'inline-block',color:'#ffa426',margin:'5px'}}>{hall.beverages}</span>
                            </div>
                            <div className="hall-timings">
                                {hall.timings.map(halltime=><button key={halltime} onClick={()=>handleShowTimings(halltime,hall)}>{halltime}</button>)}
                            </div>
                        </div>
                    )}
                    </section>
            </section>
        </Layout>
    );
}

export default BookTickets;