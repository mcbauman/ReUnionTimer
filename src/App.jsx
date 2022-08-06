import { useEffect, useState } from "react";

export default function App(){
    let [dateNow,setDateNow]=useState(new Date())
    const targetDate=new Date(2022,8,24,11,35)
    console.log(targetDate);
    let toWait=targetDate-dateNow
    const [index, setIndex]=useState(1);
    function calcTime(){
        setDateNow(new Date())
    }
    let img=`./images/img${index}.JPG`
    useEffect(()=>{
        const timer=setInterval(()=>{
            calcTime();
            if(index>31){setIndex(1)}else{setIndex(index+1)}
            console.log(index);
            console.log(img);
        },1000)
        return () => clearInterval(timer);
    })
    let timeLeft = {
        days:Math.floor(toWait/(1000*60*60*24)),
        hours:Math.floor(toWait/(1000*60*60)%24),
        minutes:Math.floor(toWait/(1000*60)%60),
        seconds:Math.floor(toWait/(1000)%60),
    }

    return (
        <main>
            <h2>CYNTHIA'S ARRIVEL IN HAMBURG:</h2>
            <div id="timerDiv">
                <h1>{timeLeft.days}</h1>
                <h2>days</h2>
                <h1>{timeLeft.hours}</h1>
                <h2>hours</h2>
                <h1>{timeLeft.minutes}</h1>
                <h2>minutes</h2>
                <h1>{timeLeft.seconds}</h1>
                <h2>seconds</h2>
            </div>
            <div id="imgDiv">
                <img src={img} alt="not Found" />  
            </div>
        </main>
    )
}