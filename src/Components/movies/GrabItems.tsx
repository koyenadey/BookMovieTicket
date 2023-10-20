import React,{FC, useState} from "react";
import Card from "../Card";
import { itemsTypes } from "./GrabABite";
import "./GrabItems.scss";

interface BiteProps{
  biteProps:{
    id:string;
    hallName: string;
    biteType:string;
    biteTypeImage:string;
    biteImage: string;
    biteHeader: string;
    biteSubHeader: string;
    bitePrice: string;
    category: string;
    },
    onAddingBites:(id:string,price:number,qty:number,itemName:string)=>void;
    selectedFood: itemsTypes[];
    setSelectFood: (items:itemsTypes[]) => void;
}

type biteTypes={
  biteId: string;
  bitePrice: number;
  biteName: string;
}

const GrabItems:FC<BiteProps> = (props) => {
  const {biteProps,onAddingBites,selectedFood} = props;
  const quantyty = getItemQty(biteProps?.id);
  //console.log(`For Item ID: ${biteProps?.id} quantity is: ${quantyty}`);
  const [quantity,setQuantity] = useState<number>(quantyty);
  const [btnAddIsActive,setBtnAddAsActive] = useState<boolean>(true);
  

  const handleAddItems = (currentBite:BiteProps["biteProps"]) =>{
    const biteInfo:biteTypes = getCurrentBiteInfo(currentBite);
    
    const newQty:number = calculateQuantity("add",quantity);

    //console.log(newQty);

    onAddingBites(biteInfo?.biteId,biteInfo?.bitePrice,newQty,biteInfo?.biteName);
    
  }

  const handleAddQty = (currentBite:BiteProps["biteProps"]) =>{
    
    const qty= getItemQty(currentBite?.id);

    const newQty:number = calculateQuantity("add",qty);
    if(newQty === 9) {
      setBtnAddAsActive(false);
    }
    
    const biteInfo = getCurrentBiteInfo(currentBite);

    onAddingBites(biteInfo?.biteId,biteInfo?.bitePrice,newQty,biteInfo?.biteName);
  }

  const handleSubtractQty = (currentBite:BiteProps["biteProps"]) =>{;
     
    const qty = getItemQty(currentBite?.id);
    const newQty:number = calculateQuantity("minus",qty);
    //console.log(newQty);
    //if(newQty === 0) ;
    
    const biteInfo = getCurrentBiteInfo(currentBite);

    onAddingBites(biteInfo?.biteId,biteInfo?.bitePrice,newQty,biteInfo?.biteName);
  }

  const calculateQuantity = (actionName:string,qty:number) =>{
    let updatedQty:number = qty;
    if(actionName === "add") updatedQty += 1;
    if(actionName === "minus") updatedQty -= 1;
    
    setQuantity(updatedQty);
    return updatedQty; 
  }

  function checkIfItemExists(id:string):boolean{
    const itemID = (selectedFood?.find(sf=>sf.id === id)) ?? 0;
    //console.log("Item ID",itemID);
    if(itemID === 0) return false;
    else return true;
      
  }

  function getItemQty(id:string):number{
    let index = -1;
    if(checkIfItemExists(id)){
      index=(selectedFood?.findIndex(sf=>sf.id === id));
    }
    if(index !== -1) return selectedFood[index]?.qty;
    return 0;
  }

  const getCurrentBiteInfo = (currentBite:BiteProps["biteProps"]):biteTypes =>{
      const biteId = currentBite?.id;
      const bitePrice = +(currentBite?.bitePrice.substring(1));
      const biteName = currentBite?.biteHeader;

      return {biteId,bitePrice,biteName}
  }

  return (
    <Card>
    <div className="bite-detail-wrapper">
      <img src={biteProps?.biteTypeImage} alt="veg/nonveg" className="bite-food-type-image" />
      <img
        src={biteProps?.biteImage} alt="foodimage"
        className="bite-item-image"
      />
      <div className="bite-desc-wrapper">
        <h4 className="bite-desc-header">{biteProps?.biteHeader}</h4>
        
        <h6 className="bite-desc-subHeader">{biteProps?.biteSubHeader}</h6>
        <div className="bite-price-wrapper">
          <div>{biteProps?.bitePrice}</div>  
          { !checkIfItemExists(biteProps?.id) && <div className="add-button" onClick={()=>handleAddItems(biteProps)}>Add</div>}
          { checkIfItemExists(biteProps?.id) && <div className="addrem-qty">
            <div className="subtract-icon"><span className="minus-qty" onClick={()=>handleSubtractQty(biteProps)}>--</span></div>
            <div className="qty-numbers"><span>{quantity}</span></div>
            <div className="add-icon"><span className={btnAddIsActive?"add-qty":"addMaxItems"} onClick={()=>handleAddQty(biteProps)}>+</span></div>
          </div>}
        </div>
      </div>
    </div>
    </Card>
  );
};

export default GrabItems;
