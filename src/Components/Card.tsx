import React, { FC,ReactNode } from 'react';
import './Card.scss';

interface CardProp{
    children: ReactNode;
}

const Card:FC<CardProp> = ({children}) =>{
    return (
        <div className="card-layout">
            {children}
        </div>  
    );
}

export default Card;