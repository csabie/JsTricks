function createElf(name, weapon) {
  return {
    name,
    weapon,
    attack(){
      return 'attack with '+weapon
    }
    
  }
}

const peter = createElf('Peter', 'stones')
peter.attack()