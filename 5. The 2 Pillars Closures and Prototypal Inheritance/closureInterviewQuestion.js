//alap probléma: csak 4, 4, 4, 4-et ír ki minden iterációban

const array = [1,2,3,4];

for (var index = 0; index < array.length; index++) {
  setTimeout(function(){
    console.log('I am at index '+ index)
  },1000)
}

//megoldás
const array = [1,2,3,4];

for (let index = 0; index < array.length; index++) {
	//itt a let block scope-t használ
  setTimeout(function(){
    console.log('I am at index '+ index)
  })
}

const array = [1,2,3,4];

for (var index = 0; index < array.length; index++) {
  (function(closureI){
    setTimeout(function(){
    console.log('I am at index '+ closureI)
  }, 1000)
  })(index)
}
