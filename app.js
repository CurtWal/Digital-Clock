'use strict'

    // write a function that shows the real world time
    function realClock(){
        // let date equal a contructer 
        let date = new Date();
        // let hour equal the real hour 
        let hour = date.getHours();
        // let minute equal the real minutes
        let minutes = date.getMinutes();
        // let seconds get the real seconds
        let seconds = date.getSeconds();
        // let the variable equal am
        let timeOfDay = "AM";

        // by removing this and the hour == hour - 12 below the clock will turn to a 24hr clock
        if(hour == 0){
            hour = 12;
        }
        // if hour is greater then 12 reset it back to 1 and change am to pm
        if(hour > 12){
            hour == hour - 12;
            timeOfDay = "PM";
        }

        // if hour is less then 10 add a 0 until 10 hours if it more then 10 dont add a 0
        hour = (hour < 10) ? "0" + hour : hour;
        // if minute is less then 10 add a 0 until 10 mins if it more then 10 dont add a 0
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        // if seconds is less then 10 add a 0 until the seconds get to 10 if it more then 10 dont add a 0
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        // store the time function output into a variable
        let time = hour + ":" + minutes + ":" + seconds + "" + timeOfDay;

        // write time to html doc
        document.getElementById("timeclock").innerHTML = time;

        // update time every 1 second 1000 is 1000ms 
        setTimeout(function(){
            realClock()}, 1000);
    }
    realClock()
  