// get the textbox
var tb = document.getElementById("textBox")
// get the button
var btn = document.getElementById("btnSumbit")

// h1 by id
var h1 = document.getElementById("inputValue")

//grab our input and check if its a palindrome
btn.addEventListener('click',function(){
  if(tb.value == '') h1.innerHTML = "You didn't type Anything!"
  else if(tb.value.toLowerCase() == tb.value.toLowerCase().split('').reverse().join('')) {
    h1.innerHTML = "Palindrome! HOW FANCY!"
  }
  else h1.innerHTML = "Not Palindrome. HOW RUDE!"
})
