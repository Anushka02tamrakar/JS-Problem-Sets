let res = 0;
const add=(a,b)=>{
    res = a+b;
    return res

}

const memoize = (fun)=>{
    let cache = {}
    return function(...args){
        let key = args.join('_')           // Create a unique key for the arguments
        if (key in cache){
            console.log("cache")
            return cache[key]
        } else{
            console.log("calculating fisrst time")
            let result =  fun(...args)        //Calculate the result
            cache[key] = result               // Cache the result
            return result

        }
              
    }

}
console.time()
const eff = memoize(add)
console.log(eff(3,4))
console.timeEnd()

console.time()

console.log(eff(3,4))
console.timeEnd()