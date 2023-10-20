import React from 'react';
import './PaymentModule.scss';
import {AiOutlineShop} from 'react-icons/ai';
import {AiOutlineExclamationCircle} from 'react-icons/ai';

interface PaymentModuleProps{
    finalPrice:number
}

const PaymentModule = ({finalPrice}:PaymentModuleProps) =>{
    return(
        <>
        <div className="amount-wrapper">
            <div className="amount-payable-label">Amount Payable</div>    
            <div className="amount-payable-price">Rs. {finalPrice}</div>    
        </div> 
        <div className="payment-module-wrapper">
          <p className="payment-heading">SELECT A TICKET TYPE</p>
          <div className="box-office-wrapper">
            <div className="box-office-selection">
                <div className="box-office-radio"></div>
            </div>
            <div className="box-office-icon">
                <AiOutlineShop size={20} />
                <span className="box-office-value">
                    Box Office Pickup
                </span>
            </div>
          </div>
          <p className="ticket-instructions">
            Show the pdf-ticket in the box-office and pay to enter the cinema
          </p>
          <p className="ticket-consent">
            <AiOutlineExclamationCircle size={12} /> 
             By proceeding, I express my consent to complete this transaction.
          </p>
          <div className="ticket-price-wrapper">
            <div className="ticket-price-button">
              <div className="ticket-price-total">TOTAL: Rs.{finalPrice}</div>
              <div className="ticket-price-proceed">Proceed</div>
            </div>
          </div>
          <p className="ticket-cancellation">
            You can cancel the tickets 20 min(s) before the show. Refunds will be done according to 
            <span className="cancellation-link">Cancellation policy</span>
          </p>
        </div>
    </>
    );
}

export default PaymentModule;