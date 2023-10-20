import React, { useContext,useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { theatreContextData } from "../store/TheatreContext";
import Disclamer from "./Disclaimer";
import GrabItems from "./GrabItems";
import PaymentModule from "./PaymentModule";
import BiteHeader from "./BiteHeader";
import InoxBitesTypes from './Data/bitesList_INOX';
import { IoIosArrowBack } from "react-icons/io";
import {IoIosArrowDropup} from 'react-icons/io';
import {MdCancel} from 'react-icons/md';
import {RiDeleteBin5Line} from 'react-icons/ri';
import "./GrabABite.scss";



type InoxBiteTypes={
  id:string;
  hallName: string;
  biteType:string;
  biteTypeImage:string;
  biteImage: string;
  biteHeader: string;
  biteSubHeader: string;
  bitePrice: string;
  category: string;
}[];


export type itemsTypes = {
  id:string;
  itemName: string;
  qty: number;
  price: number;
}

type BiteCategoriesType = {
  id: string;
  category: string;
};

const GrabABite = () => {
  const { name, id } = useParams();
  const navigate = useNavigate();
  const { theatreData } = useContext(theatreContextData);
  //const [btnAddIsVisible,setAddBtnVisible] = useState<boolean>(true);
  const [selectedCategory,setSelectedCategory] = useState<string>("ALL");
  const [selectedFood,setSelectedFood] = useState<itemsTypes[]>([]);
  const [gstIsVisible,setGstIsVisible] = useState<boolean>(false);
  const [biteIsVisible,setBiteIsVisible] = useState<boolean>(false);
  const [selectedFoodIsVisible,setSelectedFoodVisible] = useState<boolean>(false);
  let bookASmilePrice = (theatreData?.selectedSeats?.length ?? 0);
  const ticketPrice:number = theatreData?.totalTicketPrice ?? 0;
  const baseAmt:number = theatreData?.baseAmount ?? 0;
  const Igst = Math.round((0.18 * baseAmt) * 100) / 100 ;
  const convenienceFees = baseAmt + Igst;
  const totPrice = ticketPrice + convenienceFees;

  const [totalPrice,setTotalPrice] = useState<number>(totPrice + bookASmilePrice);
  const [totalBitePrice,setTotalBitePrice] = useState<number>(0);
  const [contributeASmile,setContributeASmile] = useState<string>("Remove");

  const theatreName:string|undefined = theatreData?.hallName;
  const seatsDetails:[{seat:string,category:string}]|undefined = theatreData?.selectedSeats;
  seatsDetails?.sort((a,b)=>b.category.localeCompare(a.category));
  let smileHeader = "Contribution to BookASmile";
  let smileAmount = `Rs ${seatsDetails?.length}`;
  let smileSubHeader = "₹1 per ticket has been added";
  if(contributeASmile === "Add")
  {
      smileHeader = "Contribute to BookASmile";
      smileAmount = `+ Rs ${seatsDetails?.length}`;
      smileSubHeader = "₹1 per ticket will be added";
      bookASmilePrice = (theatreData?.selectedSeats?.length ?? 0);
  }

  const allBites_Inox:InoxBiteTypes = InoxBitesTypes.getAllBites();
  let filteredBites:InoxBiteTypes = [];
  if(selectedCategory === "ALL") filteredBites = allBites_Inox;
  else filteredBites = allBites_Inox?.filter((bite) => bite?.category === selectedCategory?.toLowerCase());


  const handleCategoryChange = (category:BiteCategoriesType) => {
    setSelectedCategory(category.category); 
  };


  const handleAddBites = (id:string,price:number,qty:number,itemName:string) =>{
    let items:itemsTypes[] = [];
    let totalPrice = 0;
   

    if(qty > 0){
      setSelectedFoodVisible(true);
      const itemPrice = price * qty;
      const item:itemsTypes = {id,itemName,qty,price:itemPrice};
      const index:number = selectedFood.findIndex(food=>food.itemName === itemName);
      items = selectedFood.filter((sf,i)=>i!==index);
      items.push(item);
      items.forEach(item=>totalPrice += item.price);
      
      setSelectedFood(items);
    } 
    if(qty === 0) 
    {
      setSelectedFood([]);
      setSelectedFoodVisible(false);
    }
    contributeASmile === "Remove"? setTotalPrice(totalPrice + totPrice + bookASmilePrice): setTotalPrice(totalPrice + totPrice);
    setTotalBitePrice(totalPrice);
    
    
    
    
    

    
    
   
    
  }

  const handleDeleteBev = (itemName:string) =>{
    let items:itemsTypes[] = [];
    const index = selectedFood?.findIndex(sf=>sf?.itemName === itemName);
    items = selectedFood.filter((food,i)=>i!==index);
    if(items.length === 0) setSelectedFoodVisible(false);
    let totalPrice = 0;
    items.forEach(sf=>totalPrice += sf.price);
    setTotalPrice(totalPrice + totPrice);
    setTotalBitePrice(totalPrice);
    setSelectedFood(items);
    //console.log(itemName);
  }

  const handleDeleteAllSelectedItems = () =>{
    setSelectedFoodVisible(false);
    setSelectedFood([]);
    //setBtnVisible(true);
    setTotalPrice(totPrice);
  }

  const handleContributeASmile = (contributeSmile:string) =>{
    if(contributeSmile === "Add")
    {
      setContributeASmile("Remove");
      setTotalPrice(totalPrice + bookASmilePrice);
    } 
    if(contributeSmile === "Remove"){
      setContributeASmile("Add");
      setTotalPrice(totalPrice - bookASmilePrice);
    } 
      
  }

  return (
    <section className="container-wrapper">
      <section className="container-header">
        <div className="movie-header-wrapper">
          <span className="back-toseat-arrow">
            <IoIosArrowBack size={20} onClick={()=>{navigate(`/booktickets/${name}/${id}`)}} />
          </span>
          <span className="movie-selected">
            {theatreData?.moviename}
          </span>
          <br></br>
          <span className="theatre-selected">
            {theatreName} {theatreData?.timings}
          </span>
        </div>
      </section>
      <section className="bite-container">
        <div className="bite-container-wrapper">
          <BiteHeader selectedCat={selectedCategory} onCategoryChange={handleCategoryChange} />
          <div className="bite-body-container">
                {filteredBites.map(bite=>
                <GrabItems key={bite?.id} 
                  biteProps={bite} 
                  onAddingBites={handleAddBites}  
                  selectedFood={selectedFood}
                  setSelectFood = {setSelectedFood}
                />
                )}   
          </div>
          <Disclamer />
        </div>
      </section>
      <section className="bite-ticket-details">
      <span className="circle-left"></span>
        <div className="bite-final-ticket-wrapper">
          <div className="bite-final-ticket-header">
              <h6 className="bite-booking-summary">BOOKING SUMMARY</h6>
              <div>
                <ul className="ticket-seat-wrapper">
                  <li>
                      <div className="seats-details-wrapper">
                        <div className="seats-wrapper">
                          {seatsDetails?.map(s=><div className="seats-details" key={s?.seat}>{s.category.substring(0,1)}-{s.seat}</div>)}
                        </div>
                        <div className="seat-count">{seatsDetails?.length} tickets</div>
                      </div>  
                  </li>
                  <li>
                    <span className="seat-price-label">Price</span>
                    <span className="seat-prices">Rs. {ticketPrice}</span>
                  </li>
                  <li>
                    <span className="convenience-fees-amount">
                      <IoIosArrowDropup size={18} 
                        className={gstIsVisible?"convenience-drop convenience-drop-rotate":"convenience-drop"} 
                        onClick={()=>setGstIsVisible(prev=>!prev)} /> 
                        Convenience fees.
                    </span>
                    <span className="convenience-fees-amount convenience-price">Rs. {convenienceFees}</span>
                  </li>
                 { gstIsVisible &&(<><li>
                    <span className="base-amount-label">Base Amount</span>
                    <span className="base-amount-price">Rs. {baseAmt}</span>
                  </li>
                  <li>
                    <span className="base-amount-label">Integrated GST(IGST) @ 18%</span>
                    <span className="base-amount-price">Rs. {Igst}</span>
                  </li>
                    </>)}
                    <li className="dotted-separator"></li>
                  <li>
                    <span className="sub-total-label">Sub Total</span>
                    <span className="sub-total-prices">Rs. {totPrice}</span>
                  </li>
                  { selectedFoodIsVisible && <li>
                    <span className="food-and-beverages-wrapper">
                      <IoIosArrowDropup size={18} className={biteIsVisible?"convenience-drop convenience-drop-rotate":"convenience-drop"} onClick={()=>setBiteIsVisible(prev=>!prev)} />
                       Food and Beverages <RiDeleteBin5Line color="#ccc" size={20} style={{cursor:'pointer'}} onClick={handleDeleteAllSelectedItems} />
                    </span>
                    <span className="food-total-prices-wrapper">Rs. {totalBitePrice}</span>
                  </li>}
                  { biteIsVisible && <li>
                    {selectedFood.map(food=><div key={food.itemName}>
                      <span className="food-and-beverages">
                        <MdCancel size={16} color="#ccc" className="del-food-and-beverages" onClick={()=>handleDeleteBev(food.itemName)} />
                         {food.itemName} (Qt. {food.qty})
                      </span>
                      <span className="food-total-prices">Rs. {food.price}</span>  
                    </div>)}
                  </li>}
                  <li>
                      <div className="contribution-wrapper">
                          <div className="contribute-body">
                            <h6 className="contribute-header">{smileHeader}</h6>
                            <p className="contribute-sub-header">({smileSubHeader})</p>
                            <p className="contribute-subsub-header">VIEW T&C</p>
                          </div>
                          <div className="contribute-amount-wrapper">
                              <h6 className="contribute-amount">{smileAmount}</h6>
                              <p className="contribute-add-btn" onClick={()=>handleContributeASmile(contributeASmile)}>{contributeASmile}</p>
                          </div>
                      </div>
                  </li>
                </ul>
              </div>
          </div>
        </div>
        <PaymentModule finalPrice={totalPrice} />
      </section>
    </section>
  );
};

export default GrabABite;
