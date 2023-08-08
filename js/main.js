let daysInput = document.querySelector("#days");
let hoursInput = document.querySelector("#hours");
let minsInput = document.querySelector("#mins");
let secsInput = document.querySelector("#secs");


let countdown = () => {
    let endDate = new Date("31 December 2023 00:00 AM");
    let nowDate = new Date();
    let diff = (endDate - nowDate) / 1000;

    if(diff < 0) return;
    let days = Math.floor(diff / 60 / 60 / 24);
    let hours = Math.floor(diff / 60 / 60) % 24;
    let mins = Math.floor(diff / 60 ) % 60;
    let secs = Math.floor(diff) % 60 ;
    daysInput.value = days;
    hoursInput.value = hours;
    minsInput.value = mins;
    secsInput.value = secs;
}

countdown();

setInterval(()=>{
    countdown();

},1000);
