// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

function isDivisible(n, x, y) {
    if(n % x === 0 && n % y === 0){
      return true
    }else{
      return false
    }
  }

// Use turnary operator
function isDivisible(n, x, y){
    return (n % x === 0 && n % y === 0) ? true : false;
}