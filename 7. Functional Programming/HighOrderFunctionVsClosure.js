//hof
const hof1 = () => () => 5
console.log(hof1()())

const hof2 = (fn) => fn(5); //egy fv-t kell majd paraméterként átadni
console.log(hof2(function a(x) {return x}))


//closure
const closure = function(){
  let count = 0;
  return function increment(){
    count++
    return count
  }
}
const incrementFn = closure()
console.log(incrementFn())
