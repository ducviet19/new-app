import './App.css';
import React,{useState} from 'react';
function Hello(props) {

    const{name,age , number } = props
    const [stateCount , setStateCount]= useState(0);
    const countTime = function() {
        setStateCount(stateCount + 1);
    }

    console.log("render")
  return (
 <div>
     <p>My name is {name} </p> 
     <p>Age : {age}</p>
     <p>number : {number} </p>

     {stateCount}
     <button onClick={countTime}>Click</button>
 </div>
  );
}

export default Hello;