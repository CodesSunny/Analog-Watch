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
