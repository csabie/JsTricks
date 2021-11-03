class Elf{
  constructor(name, weapon){
    this.name=name;
    this.weapon=weapon;
  }

  attack(){
    return 'Attack with '+this.weapon;
  }
}

const peter = new Elf('Peter', 'stones')
console.log(peter instanceof Elf);
console.log(peter.attack());
