// Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.

for(let year = 2014; year<=2050; year++){
    var d = new Date(year, 0,1)
    if (d.getDay()===0){
        console.log(year)
    }
}



/* Algo
for year = 2014 to 2050 do
    create a Date object for 1st January of year
    if day of the week of Date object is Sunday then
        print year
    end if
end for
*/