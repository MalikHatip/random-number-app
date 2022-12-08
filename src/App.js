import React, {  useState } from 'react'
import './App.css';
import Inputs from './components/Inputs';
import RandomNumber from './components/RandomNumber';





function App() {
  const [number,SetNumber]=useState()
  const[minVal,setMinVal]=useState(0);
  const[maxVal,setMaxVal]=useState(0);
  const GetRandomNumber=()=>{
      SetNumber(Math.floor(Math.random()*(maxVal-minVal+1)+minVal))
  }
  return (
    <div className="App">
     <div className='container'>
     <RandomNumber number={number} />
      <Inputs minVal={minVal} setMinVal={setMinVal} maxVal={maxVal} setMaxVal={setMaxVal} />
      <div className='Btn'>
        <button onClick={GetRandomNumber} >Get Random Number</button>
    </div>

     </div>

    </div>
  );
}

export default App;
