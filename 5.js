// Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.

const target = document.getElementById('target')

let text = 'w3resource'

setInterval(() => {
    text = text[text.length-1] + text.substring(0, text.length-1)
    // console.log(text)


}, 100)