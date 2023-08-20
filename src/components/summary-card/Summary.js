import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
//import ButtonValueApp from '../buttonvalue/ButtonValue'
import { useState } from 'react';
import './summary.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import {faLocationDot } from '@fortawesome/free-solid-svg-icons'

    

const Summary = (catagorie) => {
      const {cart} = catagorie
      let totalTime = 0;
      
      for(const catagorie of cart){
        totalTime = totalTime+ (catagorie.timeRequired * 1);
        
        };
        
        const showToastMessage = () => {
            toast.success('');
           
        };


//Break time calculation
        
            const [displayValue, setDisplayValue] = useState(null);
          
            const handleButtonClick = (value) => {
                //console.log(value)
              setDisplayValue(value);
            };

        

     return (
        <div>
            <div className='activityBodys'>
                    <div>
                    <img className='profile' src="https://media.licdn.com/dms/image/D5603AQH5e6Cvc1teoA/profile-displayphoto-shrink_800_800/0/1685185308888?e=2147483647&v=beta&t=fGN3IHW2eMBr1TyvkoJUEAhC-lkISLuD_XyhvQhcmC4" alt="" />
                    </div>
                    <div className='person-info'><strong> Ahnaf Nasim</strong>
                   <br></br><span><FontAwesomeIcon  icon={faLocationDot}/> <small>Dhaka, Bangladesh</small> </span>
                    </div>
            </div> <br />
                <div>
                    <div className='individualInfo'>
                        <div>
                       <div >75kg-----6.5-----25yrs <br />Weight--Height--Age</div>
                        </div>
                    </div> <br />
                        Add A Break  <br />
                        <br /><div className='individualInfo'>
                        
                        <button onClick={() => handleButtonClick(50)}>50</button>
                        <button onClick={() => handleButtonClick(20)}>20</button>
                         <button onClick={() => handleButtonClick(15)}>15</button>
                        <button onClick={() => handleButtonClick(20)}>20</button>
                   </div>
                      
                        <div className='exercise-details'>
                        Exercise Details
                        <div className='exercise-info'>
                        Exercise time: {totalTime} minutes
                        </div>

                        <div className='exercise-info'>
                        Break time: 
                        <div className='break'>
                        {displayValue !== null && <p>  {displayValue} minutes</p>}
                        </div>
                            
                         
                        </div>
                        </div>
                    </div>
                <div className='activity-completed'>
                <button onClick={showToastMessage}>Activity Completed</button> <ToastContainer/>
                </div>
        </div>
        );
};

export default Summary;








































// import React, { useState } from "react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function App() {
//   const [location, setLocation] = useState("top-right");
//   const [toastType, setToastType] = useState("success");

//   const handleClick = () => {
//     if (toastType === "success") {
//       toast.success("Success message", {
//         position: location,
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         onClose: () => setToastType(""),
//         action: <button onClick={() => toast.dismiss()}>dismiss</button>,
//       });
//     } else if (toastType === "error") {
//       toast.error("Error message", {
//         position: location,
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         onClose: () => setToastType(""),
//       });
//     } else if (toastType === "warning") {
//       toast.warn("Warning message", {
//         position: location,
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         onClose: () => setToastType(""),
//       });
//     }
//   };

//   return (
//     <div>
//       <button
//         onClick={() => {
//           setToastType("success");
//           handleClick();
//         }}
//       >
//         Show Success Toast
//       </button>
//       <button
//         onClick={() => {
//           setToastType("error");
//           handleClick();
//         }}
//       >
//         Show Error Toast
//       </button>
//       <button
//         onClick={() => {
//           setToastType("warning");
//           handleClick();
//         }}
//       >
//         Show Warning Toast
//       </button>
//       <button onClick={() => toast.dismiss()}>Close All Toasts</button>
//       <button onClick={() => setLocation("top-left")}>
//         Change Location to Top-Left
//       </button>
//       <button onClick={() => setLocation("bottom-right")}>
//         Change Location to Bottom-Right
//       </button>
//       <ToastContainer />
//     </div>
//   );
// }

// export default App;