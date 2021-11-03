class Character {
  #age = 53 //privát adat
  constructor(name, weapon) {
    this.name=name;
    this.weapon=weapon;
  }

  attack(){
    return 'attack with ' +this.weapon;
  }
}



class Elf extends Character{
  constructor(name, weapon, type){
    super(name, weapon)
    this.type=type;
  }
}

class Ogre extends Character{
  constructor(name, weapon, color){
    super(name, weapon)
    this.color=color;
  }

  makeFort(){
    return 'strongest fort'
  }
}
const dolby = new Elf('Dolby', 'cloth', 'house');
dolby.attack()

const shrek = new Ogre('Shreck', 'club', 'green')
console.log(shrek.makeFort())
console.log(shrek)