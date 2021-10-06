import React, { useEffect, useState } from 'react';
import add from 'date-fns/add';
const {format} = require('date-fns');

function StopWatch(props){
  const [time, setTime] = useState(new Date(0, 0, 0, 0, 0, 0));
  const [btnText, setBtnText] = useState('start');
  const [isStarted, setIsStarted] = useState(false)
  
  const startStopTimer = () => {
    setBtnText(btnText === 'start' ? 'stop' : 'start');
    setIsStarted(prev => !prev)
  }
  
  const resetTimer = () => {
    setIsStarted(false)
    setTime(new Date(0, 0, 0, 0, 0, 0))
  }
  
  useEffect(()=>{
    if(isStarted){
      const id = setInterval(()=>{setTime(prevTime=> add(prevTime, {seconds: 1}))}, 1000)
      
      return function () {clearInterval(id)}
    }
  }, [isStarted])


  return ( <div>
    <h1>{format(time, 'HH.mm.ss')}</h1>
    <button onClick={startStopTimer}>{btnText}</button>
    <button onClick={resetTimer}>reset</button>
  </div>) 
}

export default StopWatch;