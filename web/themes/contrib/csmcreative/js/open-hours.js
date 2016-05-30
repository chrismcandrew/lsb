
(function ($) {  

  Drupal.behaviors.lotussalon = {

    attach: function (context, settings) {            



// variables
var open = "7:00 am";
var close = "5:00 pm";

// setup miliary time
var military = 1200;
var sClose = close.replace(/\D/g,'');
var mClose = parseInt(sClose, 10) + parseInt(military, 10);
var mOpen = open.replace(/\D/g,'');

console.log(mOpen + " - " + mClose);

if (mOpen < 1000) {
  mOpen = "0" + mOpen;
}

// setup hours
var now = new Date();
var hour = now.getHours();
if (hour >= 10) { mHour = hour; 
  } else { mHour = "0" + hour; }

// setup minutes
var minute = now.getMinutes();

if (minute < 10) {
  minute = "0" + minute;
}


var time = "" + mHour + minute;
console.log("Time is " + time);

// open/close status
if ((time >= mOpen) && (time < mClose)) {
 $("body").addClass("open");
 $(".status").html("Yes, We're Open");
} else {
 $("body").addClass("closed");   
 $(".status").html("Sorry We're Closed");
}

// display hours
$(".hours").html(open + " to " + close);



  }};

})(jQuery);