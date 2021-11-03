//ES9 óta
const animal={
	tiger: 23, 
	lion: 5, 
	monkey: 2,
	bird: 40
}

//const {tiger, ...rest} = animal
//console.log(tiger) // ez kiírja a tiger-tags
//console.log(rest) //ez pedig az összet kiírja kivéve a tiger-t

//ES6 óta
const array = [1,2,3,4,5]
function sum(a, b, c, d, e){
	return a+b+c+d+e
}

console.log(sum(...array))

function obecjtSpread(p1, p2, p3){
	console.log(p1)
	console.log(p2)
	console.log(p3)
}
const {tiger, lion, ...rest} = animal;

obecjtSpread(tiger, lion, rest)