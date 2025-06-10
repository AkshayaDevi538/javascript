function checknumber(number){
    if(number>0){
        console.log("the number is positive")
    }else if(number<0){
        console.log("the number is negative")
    }else{
        console.log("the given number is 0")
    }
}

checknumber(8)
checknumber(-1)
checknumber(0)

function oddoreven(number){
    if(number%2==0){
        console.log("the number is even")
    }else{
        console.log("the number is odd")
    }
}

oddoreven(10)
oddoreven(7)

function calculatepower(base,exponent){
    let result= base**exponent;
    console.log(`${base}^${exponent} = ${result}`);
}

calculatepower(3,9)
calculatepower(5,9)

function greater(number1,number2){
    if(number1>number2){
        console.log(`${number1} is greater than ${number2}` )
    }else if(number2>number1){
        console.log(`${number2} is greater than ${number1}`)
    }else{
        console.log("both the numbers are equal")
    }
}

greater(5,10)
greater(10,1)
greater(5,5)

function leapyear(year){
    if((year%4 == 0 && year%100 !=0 )|| (year%400 == 0)){
        console.log(year +"is a leap year")
    }else{
        console.log(year +"is not a leap year")
    }
}
leapyear(2020)
leapyear(2005)
leapyear(2016)
leapyear(2020)

function assignGrade(score) {
  if (score >= 90 && score <= 100) {
    console.log("Grade: A");
  } else if (score >= 80 && score < 90) {
    console.log("Grade: B");
  } else if (score >= 70 && score < 80) {
    console.log("Grade: C");
  } else if (score >= 60 && score < 70) {
    console.log("Grade: D");
  } else if (score < 60 && score >= 0) {
    console.log("Grade: F");
  } else {
    console.log("Invalid score. Please enter a number between 0 and 100.");
  }
}


assignGrade(95);  
assignGrade(82);  
assignGrade(75);    
assignGrade(65);   
assignGrade(45);   
assignGrade(110);  

function ageMessage(age) {
  if (age < 16) {
    console.log("You can't drive.");
  } else if (age >= 16 && age <= 17) {
    console.log("You can drive but not vote.");
  } else if (age >= 18 && age <= 24) {
    console.log("You can vote but not rent a car.");
  } else if (age >= 25) {
    console.log("You can do pretty much anything.");
  } else {
    console.log("Invalid age.");
  }
}
ageMessage(15);  
ageMessage(16);  
ageMessage(20);  
ageMessage(30);  

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

rl.question("Enter the year: ", function(input) {
  const year = Number(input);

  if (isNaN(year) || year <= 0) {
    console.log("Please enter a valid positive year.");
  } else {
    if (isLeapYear(year)) {
      console.log(`${year} is a leap year.`);
    } else {
      console.log(`${year} is not a leap year.`);
    }
  }

  rl.close();
});
