const elfFunctions = {
  attack(){
    //itt nincs weapon, de a másikból szedjük
    return 'attack with '+this.weapon
  }
}

function createElf(name, weapon){
  return {
    name, 
    weapon
  }
}

const peter = createElf('Peter', 'stones');
peter.attack = elfFunctions.attack
peter.attack()

const sam = createElf('Sam', 'stones');
sam.attack = elfFunctions.attack
sam.attack()