// az a lényeg, hogy a date objecktumot bővísük a lastYear metódussal
Date.prototype.lastYear = function(){
  return this.getFullYear()-1
}

new Date('1900-10-10').lastYear()

//az a lényeg, hogy a map() minden elem kiíratásánál rakjon egy csillagot minden elem után
Array.prototype.map = function(){
  let arr = [];
  for (let index = 0; index < this.length; index++) {
    arr.push(this[index]+'*')
  }
  return arr
}
console.log([1,2,3].map())