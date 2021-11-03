// new binding this
function Person(name, age) {
  this.name=name;
  this.age=age;
}

const person1 = new Person('Xavier', 55);
console.log(person1);

//implicit binding
const person = {
  name: 'Karen',
  age: 40,
  hi(){
    //ez a this a personen belüli name-ra mutat
    console.log('person1: hi '+this.name)
  }
}
person

//explicit binding
//const person3 = {
 // name: 'Karen',
  //age: 40,
  //hi: function(){
    //ez a window objecthez kell bindolni mert a setTimeout nem egy personon belüli elem
   // console.log('hi '+ this.setTimeout)
  //}.bind(window) //itt apply vagy call is lehet
//}

//arrow function
//a felettiek dinamikus scopjuk van, akkor hajtódnak végre ha hívva vannak
//az arrow function-nak lexical scoping-ja van, amely azt jelenti, hogy ahol amin belül írjuk a this-t azon a blokkon belüli elemre kell mutasson

const person4 = {
  name: 'Karen',
  age: 40,
  hi: function(){
    var inner=() =>{ // ha ez sima function lenne, akkor a this a window-ra mutatott volna
      console.log('Person4: hi '+this.name);
    }
    return inner();
  }
}
person4.hi()