//global scope
//module scope
//function scope
//block scope - let and const

//module pattern
var fightModule = (function () {
  var harry = "potter";
  var voldermort = "He who must not be nanmed";

  function fight(char1, char2) {
    var attack1 = Math.floor(Math.random() * char1.length);
    var attack2 = Math.floor(Math.random() * char2.length);

    return attack1 > attack2 ? `${char1} wins` : `${char2} wins`;
  }

  return {
    fight: fight,
  };
})();

//fightModule.fight('asd', 'asda')-val kell hívni, ha elindítottuk a browsert, és a browser console-jaban
