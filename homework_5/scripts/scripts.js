console.log("============================ 1 ====================================")

const number = Number(prompt("Enter your number!"))
if (Number.isNaN(number)) {
    console.log("Not a number!");
  } else {
    console.log(`10% from you number is ${number * 0.1}`);
  }


console.log("============================ 2 ====================================")

const input = prompt("Enter your first number (the number must be > 0)")
const first_number = Number(input)
const input2 = prompt("Enter your second number (the number must be > 0)")
const second_number = Number(input2)

if (first_number > second_number) { 
  console.log(`The biggest number is  ${first_number}`) 
} else if (first_number === second_number) {
    console.log(`Your numbers are equal`)
 } else if (second_number > first_number)  {
    console.log(`The biggest number is ${second_number}`) 
} else {
    console.log(`something is wrong`)
}



console.log("============================= 3 ==================================")


const input3 = prompt("Enter your number")
const numb = Number(input3)
if (numb > 100) {
    console.log(`Your number is more then 100`)
} else if (numb === 100) {
    console.log(`Your number is 100`)
} else if (numb < 100) {
    console.log(`Your number is less then 100`)
} else {
    console.log(`Something is wrong`)
}


console.log("============================ 4 ===================================")

const your_name = prompt("Enter please your name")
const input4 = prompt("Enter please your age")
const age = Number(input4)
if (age >= 18) {
    console.log(`Hello ${your_name}`)
} else if (0 < age < 18) {
    console.log(`Hi ${your_name}`)
} else {
    console.log(`Something is wrong`)
}




