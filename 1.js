var d = new Date();

var day = d.getDay();

var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//display the current day
console.log("Today is : " + weekdays[day] + "." );

var hour = d.getHours()
var min = d.getMinutes()
var sec = d.getSeconds()

//Determine its AM or PM
var prepand = (hour>=12) ? "PM" : "AM";

//Convert 24-hour format to 12-hour format
hour = (hour>=12) ? hour-12 : hour;

// Check for special cases when hour is 0
if (hour === 0 && prepand === ' PM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Noon';
    } else {
        hour = 12;
        prepand = ' PM';
    }
}

// Check for special cases when hour is 0
if (hour === 0 && prepand === ' AM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Midnight';
    } else {
        hour = 12;
        prepand = ' AM';
    }
}

console.log("Current time is : " + hour + prepand + ":" + min + ":" + sec)
