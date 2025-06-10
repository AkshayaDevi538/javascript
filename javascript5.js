
console.log("1. Print Numbers from 1 to 10");
for (let i = 1; i <= 10; i++) console.log(i);

console.log("\n2. Print Even Numbers from 1 to 20");
for (let i = 2; i <= 20; i += 2) console.log(i);

console.log("\n3. Print Odd Numbers from 1 to 20");
for (let i = 1; i <= 20; i += 2) console.log(i);

console.log("\n4. Factorial of a Number (e.g., 5)");
let num = 5, fact = 1;
for (let i = 1; i <= num; i++) fact *= i;
console.log(`Factorial of ${num} is ${fact}`);

console.log("\n5. Sum of Numbers from 1 to 100");
let sum = 0;
for (let i = 1; i <= 100; i++) sum += i;
console.log(`Sum is ${sum}`);

console.log("\n6. Average of Numbers in an Array");
let arr = [10, 20, 30, 40, 50], total = 0;
for (let i = 0; i < arr.length; i++) total += arr[i];
console.log(`Average is ${total / arr.length}`);

console.log("\n7. Pattern - Right Angle Triangle");
let rows = 5;
for (let i = 1; i <= rows; i++) {
  console.log("*".repeat(i));
}

console.log("\n8. Print Numbers from 1 to 5");
for (let i = 1; i <= 5; i++) console.log(i);

console.log("\n9. First 10 Natural Numbers");
for (let i = 1; i <= 10; i++) console.log(i);

console.log("\n10. Check if First and Last Number of List are Same");
let list1 = [10, 20, 30, 40, 10];
let result = list1[0] === list1[list1.length - 1];
console.log(`List: ${list1}`);
console.log(`Result: ${result}`);

console.log("\n11. Print Numbers Divisible by 5");
let nums = [10, 15, 23, 40, 55, 60];
for (let n of nums) {
  if (n % 5 === 0) console.log(n);
}

console.log("\n12. Vowel or Consonant");
let ch = 'e';
if ("aeiouAEIOU".includes(ch)) {
  console.log(`${ch} is a vowel`);
} else {
  console.log(`${ch} is a consonant`);
}

console.log("\n13. Count Even and Odd Numbers between 10 and 55");
let even = 0, odd = 0;
for (let i = 10; i <= 55; i++) {
  i % 2 === 0 ? even++ : odd++;
}
console.log(`Even count: ${even}, Odd count: ${odd}`);

console.log("\n14. Print 1 to 25 excluding multiples of 5");
for (let i = 1; i <= 25; i++) {
  if (i % 5 !== 0) console.log(i);
}

console.log("\n15. Factorial of Each Element in Array");
let factorialArray = [3, 4, 5];
for (let i = 0; i < factorialArray.length; i++) {
  let f = 1;
  for (let j = 1; j <= factorialArray[i]; j++) f *= j;
  console.log(`Factorial of ${factorialArray[i]} is ${f}`);
}

console.log("\n16. Product or Sum of Two Integers");
let a = 30, b = 20;
let product = a * b;
console.log(product > 500 ? `Sum: ${a + b}` : `Product: ${product}`);

console.log("\n17. Greatest of Two Numbers");
let x = 45, y = 72;
console.log(`Greatest: ${x > y ? x : y}`);

console.log("\n18. Greatest of Three Numbers");
let n1 = 45, n2 = 72, n3 = 68;
let max = Math.max(n1, n2, n3);
console.log(`Greatest: ${max}`);

console.log("\n19. Separate Positive and Negative Numbers");
let xList = [23, 4, -6, 23, -9, 21, 3, -45, -8];
let positives = [], negatives = [];
for (let i = 0; i < xList.length; i++) {
  xList[i] >= 0 ? positives.push(xList[i]) : negatives.push(xList[i]);
}
console.log(`Positives: ${positives}`);
console.log(`Negatives: ${negatives}`);
