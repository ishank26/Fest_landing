// loader






 //timer
// set the date we're counting down to
var target_date = new Date('Mar, 11, 2015').getTime();
 
// variables for time units
var days, hours, minutes, seconds;
 
// get tag element
var countdown = document.getElementById('countdown');
 
// update the tag with id "countdown" every 1 second
setInterval(function () {
 
    // find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;
 
    // do some time calculations
    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;
     
    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;
     
    minutes = parseInt(seconds_left / 60);
    // format countdown string + set tag value
    countdown.innerHTML = '<div class="large-4 medium-4 small-12 columns"><span class="days">' + days +  ' <b>Days</b></span></div> <div class="large-4 medium-4 small-12 columns"><span class="hours">' + hours + ' <b>Hours</b></span></div> <div class="large-4 medium-4 small-12 columns"><span class="minutes">'
    + minutes + ' <b>Minutes</b></span></div>' ;  
 
}, 1000);

