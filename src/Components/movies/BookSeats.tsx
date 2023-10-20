import React, {useContext, useState} from 'react';
import Movie from './Data/currentMovies';
import Seats from './Data/seats';
import { useParams,useNavigate } from 'react-router-dom';
import { theatreContextData } from "../store/TheatreContext";
import {IoIosArrowBack} from 'react-icons/io';
import './BookSeats.scss';

type SeatingType={ 
    seatType: string;
    price: number;
    seatLayout: string[];
}[]


type MovieType={
    id: string;
    url: string;
    coverurl: string;
    title: string;
    name: string;
    genre: string;
    caution: string;
    duration: string;
}

type FinalSeatLayoutType={
    seatNo: string;
    seatPrice: number;
    isBooked: boolean;
}[]

type SeatingArrangementType = {
    category: string;
    price: number;
    seat: FinalSeatLayoutType
}[]

type SelectedSeatsType = {
    seat: string;
    category: string
}

const BookSeats = () =>{
    const {name,id} = useParams();
    const navigate = useNavigate();
    const {theatreData,setTheatreData} = useContext(theatreContextData);
    const [totalBill,setTotalBill] = useState<number>(0);
    let [selectedSeats,setSelectedSeats] = useState<SelectedSeatsType[]>([]);
    //const [seatSelectedCat,setSelectedCat] = useState<string>("");
    const [bookTicketIsVisible,setBookTicketVisible] = useState<boolean>(false);
    const hallName:string|undefined = theatreData?.hallName;
    const timings:string|undefined = theatreData?.timings;
    const bookedSeats:{Classic: string[];Silver: string[];Gold: string[];Prime: string[];}|undefined = theatreData?.seats;
    const movie:MovieType = Movie?.getMovie(id);
    const movieName:string = movie?.title;
    const movieCaution:string = movie?.caution;
    const seatingArrangement:SeatingType = Seats?.getSeatDetails();
    
    const seatLayout:SeatingArrangementType = seatingArrangement.map((layout)=>{
        const seats = layout.seatLayout.reverse();
        //.log(bookedSeats);
        const seatLayoutArr:FinalSeatLayoutType = [];
        if(layout.seatType === "Classic")
        {
            seats.forEach(seat=>{
                if(bookedSeats?.Classic?.includes(seat)){
                    seatLayoutArr.push(
                        {
                            seatNo: seat,
                            seatPrice: layout.price,
                            isBooked: true
                        }
                    );
                }
                else{
                    seatLayoutArr.push({
                        seatNo: seat,
                        seatPrice: layout.price,
                        isBooked: false
                    });
                }
            })
        }
        if(layout.seatType === "Silver")
        {
            seats.forEach(seat=>{
                if(bookedSeats?.Silver?.includes(seat)){
                    seatLayoutArr.push(
                        {
                            seatNo: seat,
                            seatPrice: layout.price,
                            isBooked: true
                        }
                    );
                }
                else {
                    seatLayoutArr.push({
                    seatNo: seat,
                    seatPrice: layout.price,
                    isBooked: false
                });
                }
            })
        }
        if(layout.seatType === "Gold")
        {
            seats.forEach(seat=>{
                if(bookedSeats?.Gold?.includes(seat)){
                    seatLayoutArr.push(
                        {
                            seatNo: seat,
                            seatPrice: layout.price,
                            isBooked: true
                        }
                    );
                }
                else
                {
                    seatLayoutArr.push({
                        seatNo: seat,
                        seatPrice: layout.price,
                        isBooked: false
                    });
                }
            })
        }
        if(layout.seatType === "Prime")
        {
            seats.forEach(seat=>{
                if(bookedSeats?.Prime?.includes(seat)){
                    seatLayoutArr.push(
                        {
                            seatNo: seat,
                            seatPrice: layout.price,
                            isBooked: true
                        }
                    );
                }
                else
                {
                    seatLayoutArr.push({
                        seatNo: seat,
                        seatPrice: layout.price,
                        isBooked: false
                    });
                }
            })
        }
        
        const finalSeatLayout = {
            category: layout.seatType,
            price: layout.price,
            seat: seatLayoutArr
        };
        return finalSeatLayout;
    });

    //finalSeatLayout.push(seatLayout);
    //console.log(seatLayout);
    
    const handleSeatSelect = (e:React.MouseEvent<HTMLDivElement>,price:number,category:string) =>{
        const target = e.target as HTMLDivElement;
        const targetClassList = target.classList;
        let seats:SelectedSeatsType[]|undefined = [...selectedSeats];

        if(!targetClassList.contains('seat-selected')){
            target.classList.add('seat-selected');
            
            const currentPrice = totalBill + price;
            seats.push({
                seat: target.innerText,
                category
            });
            setTotalBill(currentPrice);
            setBookTicketVisible(true);
            setSelectedSeats(seats);
            //setSelectedCat(category);
        }
        else
        {
            target.classList.remove('seat-selected');

            //setTotalSeats(totalSeatSelected -= 1);

            const currentPrice = totalBill - price;
            seats = seats.filter(s=>s?.seat!==target?.innerText);
            setTotalBill(currentPrice);
            setSelectedSeats(seats);
            
            if(currentPrice === 0){
                setBookTicketVisible(false);
                //setSelectedCat("");
            } 
        }
    }

    const handleBookTickets = () =>{
        const ticketsDetails = {
            hallName: theatreData?.hallName,
            moviename: name,
            timings: theatreData?.timings,
            baseAmount: theatreData?.baseAmount,
            seats: theatreData?.seats,
            selectedSeats,
            totalTicketPrice: totalBill,
        }
        setTheatreData(ticketsDetails);
        navigate(`/grababite/${name}/${id}`);
    }

    return(
        <section className="seat-booking-wrapper">
            <section className="seat-booking-header">
                <div className="seat-booking-header-details">
                    <span className="nav-left-arrow">
                        <IoIosArrowBack size={20} onClick={()=>navigate(`/booktickets/${name}/${id}`)} />
                    </span>
                    <span className="movie-name">{movieName} {movieCaution}</span>
                    <br></br>
                    <span className="theatre-name">{hallName} {timings}</span>
                </div>
            </section>
            <section>
                <div className="seats">
                    {seatLayout.reverse()?.map((row,index)=>(
                        <div key={index}>
                            <span>{row?.category} - Rs. {row?.price}</span>
                            <div className="row">
                                {row?.seat?.map(s=>(
                                    <div key={s?.seatNo} className={s?.isBooked?"booked":""} onClick={(e)=>handleSeatSelect(e,s.seatPrice,row?.category)}>
                                        {s.seatNo}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="screen-area">
                    <div className="screen"></div>
                    <span className="screen-label">All eyes this way please!</span>
                </div>    
                </section> 
                <section>
                    <div className="showcase-wrapper">
                        <div className="showcase">
                            <div></div><span>Available</span>
                            <div></div><span>Selected</span>
                            <div></div><span>Sold</span>
                        </div>
                    </div>
                    {bookTicketIsVisible && <div className="totalBilling-wrapper">
                    <div className="bill">
                        <button onClick={handleBookTickets}>Pay Rs. {totalBill}</button>
                    </div>
                </div>}
                </section> 
         </section>
    );
}

export default BookSeats;