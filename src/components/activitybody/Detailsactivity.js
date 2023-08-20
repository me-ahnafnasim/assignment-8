import React from 'react';
import './Detailsactivity.css'

const Detailsactivity = (props) => {
       const {img, title, description, ageRange, timeRequired} = props.catagorie

       
       

    return (
        <div className='cardInfo'>
           <div className='cardsBody'>
            <img src={img} alt="" />
            <h2>{title}</h2>
            <p className='textt'>{description}</p>
            <div>
            <p>For Age: {ageRange}</p>
            <p>Duration: {timeRequired} minutes</p>
            </div>
            
            <button onClick={()=>props.handleAddToCart(props.catagorie)} className='buttonDesign' alt='#'>Add to list</button>
            
           </div>
           
        </div>
       
    );
};

export default Detailsactivity;