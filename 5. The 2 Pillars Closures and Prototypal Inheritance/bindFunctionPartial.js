//parciális paraméter használat
function multiply(a,b){
	return a*b;
}

let muliplyByTwo = multiply.bind(this, 2);  //itt a this a windows maga, de ez most nem fontos, az a lényeg, hogy a második paramétert adjuk meg, mert később használva lesz

console.log(muliplyByTwo(4)); // ebben az esetben, mivel a 2-őt már áthoztuk, már csak 1 paramétert kell megadni, és a 4 paramétert alkalmazza a már fentebb megadott paraméterre.