console.log('A');

setTimeout(()=>{
    console.log('B')
});

['C', 'D'].forEach(element => {
    console.log(element)
});

console.log("E");


/*1. 'A' is logged first because it's a synchronous operation.
2. ['C', 'D'].forEach() iterates over the array synchronously, logging 'C' and then 'D'.
3. 'E' is logged after the forEach loop.
4. 'B' is logged last because it's inside a setTimeout function, which is asynchronous. So, it gets executed after all the synchronous operations have completed.*/