function a(){
  let grandpa = 'grandpa'
  return function b(){
    let father = 'father'

    return function c() {
      let son = 'son'
      return `${grandpa} > ${father} > ${son}`
    }
  }
}

const one = a();
console.log(one)

