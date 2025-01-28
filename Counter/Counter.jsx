import React, { useEffect, useState } from 'react'
import './StyleCounter.css'
import { useRef } from 'react';

function Counter() {
    const [time,setTime]=useState(0);
    const [isActive,setActive]=useState(false);
    const [isPause,setIsPause]=useState(false);
    const intervalRef=useRef(null)

    const handleInput=(event)=>{
        setTime(parseInt(event.target.value * 60))
    }
    const formatTime=()=>{
        const min= String(Math.floor(time/60)).padStart(2,'0');
        const sec= String(time%60).padStart(2,'0');
        return `${min} : ${sec}`
    }

    const handlestart=()=>{
        setActive(true);
        setIsPause(false);
    }

    useEffect(()=>{
        if(isActive && !isPause &&time >0){
            intervalRef.current=setInterval(()=>{
                setTime((prev)=>prev-1)
            },1000)
        }
        else if(time === 0){
            clearInterval(intervalRef.current);
            setActive(false);
            alert('time is up')
        }
        return ()=> clearInterval(intervalRef.current);
    },[isActive,isPause,time])

    const handlepause=()=>{
        setIsPause(!isPause)
    }

    const reset=()=>{
        clearInterval(intervalRef.current);
        setActive(false);
        setIsPause(false);
        setTime(0);
    }

  return (
    <div className='countdown-timer'>
        <h1>Countdown Timer</h1>
        <div className='timer-display'>
            <input type= 'number' placeholder='enter time in minutes' onChange={handleInput}/>
            <div>{formatTime()}</div>
            </div>
            <div className='timer-control'>
                <button onClick={handlestart} disabled={isActive && !isPause}>start</button>
                <button onClick={handlepause} disabled={!isActive}>{isPause?'Resume':'Pause'}</button>
                <button onClick={reset}>reset</button>
        </div>
    </div>
  )
}

export default Counter