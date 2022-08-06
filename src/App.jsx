import { useState } from "react";

export default function App(){
    const targetDate=new Date(2022,8,24,11,35,0,0);
    const [actualDate,setActualDate]=useState(new Date());
    let waitingTime=targetDate-actualDate;
    let timeLeft = {
        days:Math.floor(waitingTime/(1000*60*60*24)),
        hours:Math.floor(waitingTime/(100*60*60)%24),
        minutes:Math.floor(waitingTime/(100*60)%60),
        seconds:Math.floor(waitingTime/(100)%60),
    }

    console.log("target Date",targetDate);
    console.log("actual Date",actualDate);
    console.log("waitingTime",waitingTime);
    console.log(timeLeft);
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