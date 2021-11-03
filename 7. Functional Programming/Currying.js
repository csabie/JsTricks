const multiply = (a, b) => a*b;
const curriedMultiply = (a) => (b) => a*b

console.log(multiply(3,4))
console.log(curriedMultiply(3)(4))
