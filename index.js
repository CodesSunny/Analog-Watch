window.onload=()=>{
const updateClock = () => {
    const date = new Date(); // Get the current time

    // Get the current second, minute, and hour
    const second = date.getSeconds();
    const minute = date.getMinutes();
    const hour = date.getHours() % 12; // 12-hour format

    // Calculate the rotation for each hand
    const secondDeg = second*6; // 360° / 60 seconds = 6° per second
    const minuteDeg = (minute*6) + (second*0.1); // 360° / 60 minutes = 6° per minute, + fraction for seconds
    const hourDeg = (hour*30) + (minute*0.5) + (second*0.00833); // 360° / 12 hours = 30° per hour, + fraction for minutes + part of sec

    // Apply the rotation to each hand
    document.querySelector(".second").style.transform = `rotate(${secondDeg}deg)`;
    document.querySelector(".minute").style.transform = `rotate(${minuteDeg}deg)`;
    document.querySelector(".hour").style.transform = `rotate(${hourDeg}deg)`;
};

// Update the clock every second
setInterval(updateClock, 1000);
updateClock(); // Initial call to set the correct position immediately


// display day ,time
const displayArea = document.querySelector(".time-display");
const showDay = document.querySelector(".day-display");
const showHour = document.querySelector(".hr-display");
const showMin = document.querySelector(".min-display");
const showSec = document.querySelector(".sec-display");
const showSession = document.querySelector(".session-display");


let displayTime = ()=>{  
    let currentTime = new Date();
    let currentHour = currentTime.getHours(); 
    const currentMin = currentTime.getMinutes()
    const currentSec = currentTime.getSeconds()
    showToDay(currentTime);
    displayHr(currentHour);
    displayMin(currentMin);
    displaySec(currentSec);
}


function showToDay(currentTime){
    const currentDay =  currentTime.getDay();
    if(currentDay == 0){
        showDay.textContent = "Sun";
    }else if(currentDay == 1){
        showDay.textContent = "Mon";
    }else if(currentDay == 2){
        showDay.textContent = "Tue";
    }else if(currentDay == 3){
        showDay.textContent = "Wed";
    }else if(currentDay == 4){
        showDay.textContent = "Thu";
    }else if(currentDay == 5){
        showDay.textContent = "Fri";
    }else if(currentDay == 6){
        showDay.textContent = "Sat";
    }
}

function displayHr(currentHour){
    if(currentHour > 12){
        currentHour -= 12;
        showHour.textContent = currentHour +":"; 
        showSession.textContent = "PM";
    }else if(currentHour == 12){
    }else{
        showSession.textContent = "AM";
    }
}

function displayMin(currentMin){
    if(currentMin < 10){
        showMin.textContent = "0" + currentMin +":";    
    }else{
        showMin.textContent = currentMin +":";
    }
}

function displaySec(currentSec){
    if(currentSec < 10){
        showSec.textContent = "0" + currentSec;    
    }else{
        showSec.textContent = currentSec;
    }
}

// Update time display every second
setInterval(displayTime, 1000);
displayTime();  //intial call
}