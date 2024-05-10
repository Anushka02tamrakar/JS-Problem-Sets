// let promise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve('promise resolved')
//     },4000)
// })

// async function asyncfun(){
//     let result = await promise;
//     console.log(result)
//     console.log('hello')
// }
// asyncfun()

// const num = [1,2,3,4,5]
// num.forEach((ele, index, arr)=> arr[index] = ele*2)
// console.log(num)


const arr = ["Java", "Python", "C++", "JavaScript"]

const btn = document.getElementById('btn')
const head = document.getElementById('head')
// var curr = 0;
// head.addEventListener("click", function(){
//     head.textContent = arr[curr]
//     curr = (curr+1) % arr.length
// })

// head.onclick=()=>{
//     head.textContent = arr[curr]
//     curr = (curr+1) %arr.length
// 
head.onclick=()=>{
    head.innerHTML = 'hii'

}