//Constructor functions


function Elf(name, weapon){
  this.name = name;
  this.weapon = weapon;
}
//metódus hozzáadás
Elf.prototype.attack = function(){
  return 'attack with ' + this.weapon
}

const peter = new Elf('Peter', 'stones')
console.log(peter.name)
console.log(peter.attack())


const sam = new Elf('Sam', 'fire');
console.log(sam.name)
console.log(sam.attack())



//így is lehet constructor functiont csinálni
//const Elf1 = Function('name', 'weapon',
  //                   `this.name=name;
    //                    this.weapon=weapon;`)
//const sarah = new Elf1('Sarah', 'fireworks')
//console.log(sarah)