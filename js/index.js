// loader
    var cSpeed=9;
    var cWidth=30;
    var cHeight=30;
    var cTotalFrames=24;
    var cFrameWidth=30;
    var cImageSrc='images/sprites.gif';
    
    var cImageTimeout=false;
    var cIndex=0;
    var cXpos=0;
    var cPreloaderTimeout=false;
    var SECONDS_BETWEEN_FRAMES=0;
    
    function startAnimation(){
        
        document.getElementById('loaderImage').style.backgroundImage='url('+cImageSrc+')';
        document.getElementById('loaderImage').style.width=cWidth+'px';
        document.getElementById('loaderImage').style.height=cHeight+'px';
        
        //FPS = Math.round(100/(maxSpeed+2-speed));
        FPS = Math.round(100/cSpeed);
        SECONDS_BETWEEN_FRAMES = 1 / FPS;
        
        cPreloaderTimeout=setTimeout('continueAnimation()', SECONDS_BETWEEN_FRAMES/1000);
        
    }
    
    function continueAnimation(){
        
        cXpos += cFrameWidth;
        cIndex += 1;
        if (cIndex >= cTotalFrames) {
            cXpos =0;
            cIndex=0;
        }
        
        if(document.getElementById('loaderImage'))
            document.getElementById('loaderImage').style.backgroundPosition=(-cXpos)+'px 0';
        
        cPreloaderTimeout=setTimeout('continueAnimation()', SECONDS_BETWEEN_FRAMES*1000);
    }
    
    function stopAnimation(){//stop animation
        clearTimeout(cPreloaderTimeout);
        cPreloaderTimeout=false;
    }
    
    function imageLoader(s, fun)//Pre-loads sprites image
    {
        clearTimeout(cImageTimeout);
        cImageTimeout=0;
        genImage = new Image();
        genImage.onload=function (){cImageTimeout=setTimeout(fun, 0)};
        genImage.onerror=new Function('alert(\'Could not load the image\')');
        genImage.src=s;
    }
    
    //start animation
    new imageLoader(cImageSrc, 'startAnimation()');
// timer 
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
     
    minutes = parseInt(seconds_left / 60);
     
    // format countdown string + set tag value
    countdown.innerHTML = '<div class="large-4 medium-4 small-12 columns"><span class="days">' + days +  ' <b>Days</b></span></div> <div class="large-4 medium-4 small-12 columns"><span class="hours">' + hours + ' <b>Hours</b></span></div> <div class="large-4 medium-4 small-12 columns"><span class="minutes">'
    + minutes + ' <b>Minutes</b></span> </div>';  
 
}, 1000);

