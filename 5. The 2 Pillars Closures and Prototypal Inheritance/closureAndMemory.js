function heavyDuty(index) {
  const bigArray = new Array(7000).fill(':)')
  console.log('created')
  return bigArray[index]
}
//itt akárhányszor hívjuk meg, a bigArray feltöltődik 7000 :) -szimbólummal és visszaad elemeket indexnek megfelelően
heavyDuty(688)
heavyDuty(686)
heavyDuty(116)

function heavyDuty2() {
  const bigArray = new Array(7000).fill(':)')
  console.log('created again')
  return function(index) {
    return bigArray[index]
  }
}

//itt csak 1x toldődik fel, de a closure-nak köszönhetően mindig csak az indexet adjuk meg és mindig csak a legutolsó, aktuális indexű elemet adja vissza
const getHeavyDuty =  heavyDuty2();
getHeavyDuty(688)
getHeavyDuty(689)
getHeavyDuty(680)