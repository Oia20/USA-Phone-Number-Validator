const input = document.getElementById("user-input")
const check = document.getElementById("check-btn")
const clear = document.getElementById("clear-btn")
const result = document.getElementById("results-div")
const phoneNumberPattern = /^1?[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;

const checkNum = () => {
  const split = input.value.split('')
  console.log(split)
  const inputDoctored = phoneNumberPattern.test(input.value)
    console.log("doc  ", inputDoctored)
  if (input.value === '') {
    alert("Please provide a phone number")
  } else if (input.value.length < 10){
    result.innerHTML = `Invalid US number: ` +input.value
    console.log(input.value.length)
  } if (inputDoctored === true) {
      if (split.includes("(") && !split.includes(")") || split.includes(")") && !split.includes("(")) {
        result.innerHTML = `Invalid US number: ` +input.value
      } else {
        result.innerHTML = `Valid US number: ` +input.value
      }
    } else {
    result.innerHTML = `Invalid US number: ` +input.value
  }
}

const clearNum = () => {
  result.innerHTML = ""
}

check.addEventListener("click", checkNum)
clear.addEventListener("click", clearNum)
