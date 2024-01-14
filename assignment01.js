// Question 01
var marks = 98
if (marks > 90) {
  console.log('A Grade')
} else if (marks > 70 && marks <= 90) {
  console.log('B Grade')
} else if (marks > 50 && marks <= 70) {
  console.log('C Grade')
} else {
  console.log('F grade')
}

//Question 02
const num1 = 10
const num2 = 25
for (let i = num1 + 1; i <= num2; i++) {
  console.log(i)
}

//Question 03

let no = 0
no > 0
  ? console.log('Positive')
  : no < 0
  ? console.log('Negative')
  : console.log('Zero')

//Question 04

/* comma is an operator in a javascript which is used to declare, read or express
   multiple expression at a same lime amd at a same time */
let a = 10,
b = 'abhay'
console.log(a, b)

//Question 05
var username = "admin";
var password = 12345;
if(username == "admin" && password == 12345){
    console.log("Login Successfully")
}
else{
    console.log("Invalid Credentials");
}

//Question 06

var paymentmethod = 'PayPal';
switch(paymentmethod){
    case 'Credit': console.log("Processing fees for credit payment is 2%")
                   break;
    case 'Debit' : console.log("Processing fees for debit payment is 1.5%")
                   break;
    case 'PayPal' : console.log("Processing fees for PayPal payment is 3%")
                    break;
}

//Question 07

let temperature = 50;
let weathercondn = temperature>30?"Hot":"Moderate";
console.log(`Current Weather Condition is : ${weathercondn}`)

//Question 08

var targetno =10;
var sum =0;
var initialno=1;
do{
    sum+=initialno;
    initialno++;
}
while(initialno<=targetno)
console.log(`sum from 1 to ${targetno} is : ${sum}`)
