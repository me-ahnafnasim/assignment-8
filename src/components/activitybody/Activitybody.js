import Detailsactivity from './Detailsactivity'
import React, { useEffect, useState } from 'react';
import './Activitybody.css'
import Summary from '../summary-card/Summary';

const Activitybody = () => {
    const [catagories, setCatagories] = useState([]);
    const [cart, setCart] = useState([]);

useEffect(()=>{
       fetch("activity.json")
       .then(res => res.json())
       .then(data => setCatagories(data))
},[]);

const handleAddToCart =(catagorie)=>{
   const newCard = [...cart, catagorie]
   
   setCart(newCard)
   }

    return (
        <div className='mainContainer'>
            <div className='cardContainer'>
            {
            catagories.map(catagorie => <Detailsactivity handleAddToCart={handleAddToCart} key={catagorie.id} catagorie={catagorie} >  </Detailsactivity>)
            }
            </div>


            <div className='activitySummary'>
          
             <Summary cart={cart}></Summary>
            </div>
        </div>


    );
};

export default Activitybody;