/*3. Write a JavaScript program to get the current date.  
 Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy*/

var d = new Date()
var date = d.getDate()

var month = d.getMonth()+1;

var year = d.getFullYear()

// Add leading zero if the day is less than 10
if (date<10){
    date = "0"+date;
}
//// Add leading zero if the Month is less than 10
if(month<10){
    month = "0"+month
}

// Format the date as mm-dd-yyyy and log it
today = month + '-' + date + '-' + year;
console.log(today);

// Format the date as mm/dd/yyyy and log it
today = month + '/' + date + '/' + year;
console.log(today);

// Format the date as dd-mm-yyyy and log it
today = date + '-' + month + '-' + year;
console.log(today);

// Format the date as dd/mm/yyyy and log it
today = date + '/' + month + '/' + year;
console.log(today);