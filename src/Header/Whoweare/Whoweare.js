import React from 'react';
import './whoweare.css';
import { useState } from 'react';


const WhoWeAre = () => {

  // const[isShow, setIsShow] = useState(false);

  const [value,setValue] = useState(0);
  const Increment = () => {
    if(value<10){
      setValue(value+1);
    }
  }
  const Decrement = () => {
    if(value>0){
      setValue(value-1);
    }
    else{
    }
  }
  // const ShowHide = () => {
  //   setIsShow(!isShow);
  // }
  return (
    <div className="who-we-are-container">
      <div className='inside-div'>
        <h1>Who We Are</h1>
        <p>
          We are a passionate fitness community dedicated to helping individuals
          achieve their health and wellness goals. Our gym offers state-of-the-art
          equipment, expert trainers, and personalized workout plans tailored to
          your needs.
        </p>
        <p>
          Whether you're a beginner or an experienced athlete, we provide the
          perfect environment to stay motivated and push your limits.
        </p>
        <div className='counter-container'>
          <div className='counter'> 
            <button onClick={Decrement}>-</button>
            <button onClick={Increment}>+</button>
          </div>
          <button>{value}</button>
          
          {/* <button style={{ display: isShow ? "block" : "none" }}>{value}</button>
          <button onClick={ShowHide}>on/off</button> */}
        </div>
        
        
      </div>
    </div>
  );
};

export default WhoWeAre;
