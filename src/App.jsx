import { useEffect, useState } from "react";

export default function App(){
    let [dateNow,setDateNow]=useState(new Date())
    const targetDate=new Date(2022,9,26,18,41)
    // console.log(targetDate);
    let toWait=dateNow-targetDate
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
        years:Math.floor(toWait/(1000*60*60*24*365)),
        months:Math.floor(toWait/(1000*60*60*24)%12),
        days:Math.floor(toWait/(1000*60*60*24)%12),
        hours:Math.floor(toWait/(1000*60*60)%24),
        minutes:Math.floor(toWait/(1000*60)%60),
        seconds:Math.floor(toWait/(1000)%60),
    }

    return (
        <main>
            <h2>UNITED WITH CYNTHIA SINCE:</h2>
            <div id="timerDiv">
                <section>
                    <h1>{timeLeft.years}</h1>
                    <h2>years</h2>
                </section>
                <section>
                    <h1>{timeLeft.months}</h1>
                    <h2>months</h2>
                </section>
                <section>
                    <h1>{timeLeft.days}</h1>
                    <h2>days</h2>
                </section>
                <section>
                    <h1>{timeLeft.hours}</h1>
                    <h2>hours</h2>
                </section>
                <section>
                    <h1>{timeLeft.minutes}</h1>
                    <h2>minutes</h2>
                </section>
                <section>
                    <h1>{timeLeft.seconds}</h1>
                    <h2>seconds</h2>  
                </section>
            </div>
            <div id="imgDiv">
                <img src={img} alt="not Found" />  
            </div>
        </main>
    )
}