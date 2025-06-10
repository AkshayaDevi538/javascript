console.log("Hello World!")

function add(a,b){
    return a+b;
}
console.log(add(3,4))

const multiply = function(a,b){
    return a*b;
}
console.log(multiply(9,2))

function multi(a,b){
    return a*b;
}
console.log(multi(20,3))

function divide(a,b){
    if(b==0){
        return "cannot divide by 0"
    }
    return a/b;
}
console.log(divide(10,2))

function factorial(n){
    if(n<0){
        return "negative numbers cannot be factorized"
    }
    let result=1;
    for(let i=2;i<=n;i++){
        result *=i;
    }
    return result;
}
console.log(factorial(5))
console.log(factorial(-1))

function square(number) {
  return number * number;
}
console.log(square(10))
console.log(square(8))