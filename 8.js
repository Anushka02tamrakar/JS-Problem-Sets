const ran = Math.ceil(Math.random()*10);


var gnum = prompt('Guess the number between 1 to 10');

if(gnum==ran){
    console.log("Matched")
}
else{
    console.log("Not matched, the number was " + ran)
}

