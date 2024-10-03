window.onload =()=>{
    let secDeg = 0;
    let minDeg = 0;
    let hrDeg = 0;

    const moveSecond =()=>{
        const secondHand = document.querySelector(".second");
        secDeg += 6;    //360/60 =6
        secondHand.style.transform = `rotate(${secDeg}deg)`;
    }

    const moveMinute =()=>{
        const minuteHand = document.querySelector(".minute");
        minDeg += 6;  //360/60 =6
        minuteHand.style.transform = `rotate(${minDeg}deg)`;
    }

    const movehour =()=>{
        const hourHand = document.querySelector(".hour");
        hrDeg += 30;       //360/12 = 30
        hourHand.style.transform = `rotate(${hrDeg}deg)`;
    }

    setInterval(moveSecond, 1000);     // Every 1 second
    setInterval(moveMinute, 60000);    // Every 1 minute
    setInterval(movehour, 3600000);    // Every 1 hour



    // display date-time
    const hrDisplay = document.querySelector(".hr-display");
    const minDisplay = document.querySelector(".min-display");
    const secDisplay = document.querySelector(".sec-display");
    const sessionDisplay = document.querySelector(".session-display");
    const dayDisplay = document.querySelector(".day-display");

    
    //  show hour in 12 hr format
    let showHour=()=>{
        let dateObj = new Date();
        let hour = dateObj.getHours();
        if(hour >12){
            hour = hour -12;
            hrDisplay.textContent = "0" + hour + ":";
            sessionDisplay.textContent = "PM";
        }else if(hour == 0){
            hrDisplay.textContent = "0" + hour + ":";
            sessionDisplay.textContent = "AM";
        }
        else{
            hrDisplay.textContent = hour + ":";
            sessionDisplay.textContent = "AM";
        }
    }
    setInterval(showHour, 3600000);
    showHour();  //call immediately on page reload
    //  show session

    // show minute in double digit format
    let showMin = ()=>{
        let dateObj = new Date();
        let minute = dateObj.getMinutes();
        if(minute < 10){
            minDisplay.textContent = "0" + minute + ":";
        }else{
            minDisplay.textContent =  minute + ":";
        }
    }

     setInterval(showMin, 60000);
     showMin();  // call immediately on page refresh

    // show second in double digit format
    let showSec = ()=>{
        let dateObj = new Date();
        let second = dateObj.getSeconds();
        if(second <10){
            secDisplay.textContent =  "0" + second;
        }else{
            secDisplay.textContent = dateObj.getSeconds();
        }
    }

    setInterval(showSec, 1000);
    
    // show day
    let dateObj = new Date();
    let toDay = dateObj.getDay();
    if(toDay == 0){
        dayDisplay.textContent = "Sun";
    }else if(toDay == 1){
        dayDisplay.textContent = "Mon";
    }else if(toDay == 2){
        dayDisplay.textContent = "Tue";
    }else if(toDay == 3){
        dayDisplay.textContent = "Wed";
    }else if(toDay == 4){
        dayDisplay.textContent = "thu";
    }else if(toDay == 5){
        dayDisplay.textContent = "Fri";
    }else{
        dayDisplay.textContent = "sat";
    }  
    
}




