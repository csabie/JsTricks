const multiplyBy = (num1) =>{
  return function(num2){
    return num1*num2;
  }
}
const multipyByTwo=multiplyBy(2);
const multpyByTen = multipyByTwo(10)
console.log(multpyByTen)

//rövidebben, ha arrow function 1 soros, akkor az első sora lesz a return value
const szorozva = (szam1) => (szam2)=> szam1*szam2

const szorKetto = szorozva(2)
const szorTiz = szorKetto(10)
//de szorozva(2)(10) -el is megy
console.log(szorTiz)