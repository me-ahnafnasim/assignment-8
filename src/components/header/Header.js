import React from 'react';
import './Header.css'

const header = () => {
    return (
        <div className='logoDesign'>
           <div className='headerInfo'>
           <div >
           <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt="" />
           </div>
           <div>
           <button className='heabut'>Enroll Now</button>
           </div>
           </div>
        </div>
    );
};

export default header;