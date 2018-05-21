//we who are about to math salute you!
var num1 = document.getElementById("firstNum")

var num2 = document.getElementById("secondNum")

var result = document.getElementById("result")
result.value = 0

//functions for math operations
clear.addEventListener('click',function(){
  clearDisplay()
})

add.addEventListener('click',function(){
  result.value = (parseFloat(num1.value) + parseFloat(num2.value))
})

subtract.addEventListener('click',function(){
  result.value = (parseFloat(num1.value) - parseFloat(num2.value))
})

multiply.addEventListener('click',function(){
  result.value = (parseFloat(num1.value) * parseFloat(num2.value))
})

divide.addEventListener('click',function(){
  result.value = (parseFloat(num1.value) / parseFloat(num2.value))
})

equals.addEventListener('click',function(){
  result.innerHTML = "Answer: " + result.value
  clearDisplay()
})

function clearDisplay(){
  num1.value = ''
  num2.value = ''
}

//functions for color select
grey.addEventListener('click',function(){
  document.body.style.backgroundColor = "grey"
})
green.addEventListener('click',function(){
  document.body.style.backgroundColor = "green"
})
blue.addEventListener('click',function(){
  document.body.style.backgroundColor = "blue"
})
red.addEventListener('click',function(){
  document.body.style.backgroundColor = "red"
})
purple.addEventListener('click',function(){
  document.body.style.backgroundColor = "purple"
})
