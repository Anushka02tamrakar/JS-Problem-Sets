const num1 = document.getElementById('firstnum')
const num2 = document.getElementById("secnum")
const resultSpan = document.getElementById("result")

console.log(num1)
function multi(){
    var m = parseFloat(num1.value) * parseFloat(num2.value)
    resultSpan.textContent = m
    

}
function divide(){
    var d = parseFloat(num1.value) / parseFloat(num2.value)
    resultSpan.textContent = d

}