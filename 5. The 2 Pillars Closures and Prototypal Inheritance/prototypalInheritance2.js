//származtatás __proto__ nélkül
let human = {
  mortal: true
}

let socrates = Object.create(human)
socrates.age=35
console.log(socrates)
console.log(socrates.mortal)
console.log(human.isPrototypeOf(socrates))