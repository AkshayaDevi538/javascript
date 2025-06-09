console.log("Hello World!")
console.log("Name:Akshaya")
console.log("Age:19")

let name="Akshaya"
let age=19
let isStudent=true
console.log("Name:"+name)
console.log("Age next year:"+(age+1))
console.log("Is a student? "+ isStudent)
console.log("Is a Student? "+!isStudent)

console.log("My name is "+name+ "  and My age is "+age)

console.log(name)
console.log(age)

let a=10
let b=15
console.log("Addition: "+(a+b))
console.log("Subtraction: "+(a-b))
console.log("Multiplication: "+(a*b))
console.log("Division: "+(a/5))

let fruits = ["Apple", "Banana", "Cherry", "Date"];

for (let fruit of fruits) {
  console.log(fruit);
}

let rows=5
for(let i=1; i<=rows; i++)
    console.log("*".repeat(i))


console.log(name);
console.log(age);
console.log(isStudent);

name = "Devi";
age = age + 1; 

isStudent = !isStudent;

console.log("Updated Name:", name);
console.log("Updated Age:", age);
console.log("Updated Is student:", isStudent);
                          
let dob = new Date("1998-06-15");     
let height = 5.6;                     
let weight = 58.3;                     
let degree = "Bachelor of Science";   
let gender = "Female";                 
console.log("Name:", name);
console.log("Age:", age);
console.log("Date of Birth:", dob.toDateString());  
console.log("Height (in feet):", height);
console.log("Weight (in kg):", weight);
console.log("Degree:", degree);
console.log("Gender:", gender);
