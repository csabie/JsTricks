let dragon = {
  name: 'Tanya',
  fire: true,
  fight(){
    return 5
  },
  sing(){
    if(this.fire){
      return `I am ${this.name}, the breather of fire`
    }
  }
}

let lizard ={
  name: 'Kiki',
  fight(){
    return 1;
  }
}


//örököltetés
lizard.__proto__=dragon;
lizard.sing()

//megnézi, hogy öröklődik-e
//dragon.isPrototypeOf(lizard)

for (let prop in lizard) {
  //kiírja az összes adatmezejét, még azt is amit örököl
  //console.log(prop)

  //csak a saját property-jeit írja ki
  if(lizard.hasOwnProperty(prop)){
    console.log(prop)
  }
}
