//leap year check

function leapYear(year){
    return (year%100 === 0)? (year%400===0) : (year%4===0);
}

console.log(leapYear(2026))
console.log(leapYear(2020))