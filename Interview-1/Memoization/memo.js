let sum = 0;
const calc = (n) => {
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;

}

const memoize = (fun) => {
    let cache = {}                       //chache object
    return function (...args) {            //rest operator
        let n = args[0]
        if (n in cache) {
            console.log("cache")
            return cache[n]
        }
        else {
            console.log("calculating fisrst time")
            let result = fun(n);        //calling the fun and store in result
            cache[n] = result           //storing the result in cache
            return result;

        }
    }
}

console.time();
const eff = memoize(calc);
console.log(eff(5));
console.timeEnd();


console.time();

console.log(eff(5));
console.timeEnd();

