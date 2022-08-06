import { useEffect, useState } from "react";

export default function App(){
    let [dateNow,setDateNow]=useState(new Date())
    const targetDate=new Date(2022,9,24,11,35)
    let toWait=targetDate-dateNow
    function calcTime(){
        setDateNow(new Date())
    }
    useEffect(()=>{
        const timer=setInterval(()=>{
            calcTime();
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
            <h2>The Reunion will be in</h2>
            <div>
                <h1>{timeLeft.days}</h1>
                <h2> days </h2>
                <h1>{timeLeft.hours}</h1>
                <h2> hours </h2>
                <h1>{timeLeft.minutes}</h1>
                <h2> minutes </h2>
                <h1>{timeLeft.seconds}</h1>
                <h2> seconds </h2>
            </div>
        </main>
    )
}