import React, { useState } from 'react';
import './buttonValue.css'

const ButtonValueApp = () => {
  const [displayValue, setDisplayValue] = useState(null);

  const handleButtonClick = (value) => {
    setDisplayValue(value);
  };

  return (
    <div>
        <div className='buttonValue'>
        <button onClick={() => handleButtonClick(50)}>50</button>
      <button onClick={() => handleButtonClick(20)}>20</button>
      <button onClick={() => handleButtonClick(15)}>15</button>
      <button onClick={() => handleButtonClick(20)}>20</button>
        </div>
      
      
      {displayValue !== null && <p>Break time: {displayValue}</p>}
    </div>
  );
};

export default ButtonValueApp;