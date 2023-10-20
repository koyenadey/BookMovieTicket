import React,{useState} from 'react';
import {IoIosArrowDown} from 'react-icons/io';
import './DropDown.scss';

interface DropDownProps{
    options:{
        ddlInitValue: string;
        ddlValues: string[] | undefined;
    } 
    onDropDownChange: (optionValue:string)=> void;
}

const DropDown = ({options,onDropDownChange}:DropDownProps) =>{
    const initialDdlValue:string = options.ddlInitValue;
    const optionValues:string[] | undefined = options.ddlValues;
    const [optionIsVisible,setOptionIsVisible] = useState<boolean>(false);
    const [selectedOption,setSelectedOption] = useState<string>(initialDdlValue)

    const handleOptionChange = ():void =>{
        setOptionIsVisible(prev=>!prev);
    }

    const handleOptionValue = (option:string):void =>{
        setOptionIsVisible(false);
        setSelectedOption(option);
        onDropDownChange(option);
    }

    const collapseOptionList = () =>{
        setOptionIsVisible(false);
    }

    return(
        <div className="option-type" >
                    <div className="option-type-trigger" onClick={handleOptionChange} onMouseOver={collapseOptionList}>
                        <span>{selectedOption} </span>
                        <IoIosArrowDown style={optionIsVisible ?{position:'absolute',top:'15%',left:'88%',transform:'rotate(180deg)',cursor:'pointer'} :{position:'absolute',top:'15%',left:'88%',cursor:'pointer'}}/> 
                    </div>
                    {optionIsVisible && <div className="option-type-options">
                        {optionValues?.map(option=>(
                            <span key={option} onClick={()=>handleOptionValue(`${option}`)}>{option}</span>
                        ))}   
                    </div>}
                </div>
    );
}

export default DropDown;