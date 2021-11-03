const wizad = {
	name: 'Merlin',
	health: 50,
	heal(num1, num2){
		return this.health+=num1+num2;
	}
}

const archer = {
	name: 'Robin Hood',
	health: 30
}
//a call() arra kell, hogy ha nekünk a wizard-ból a heal() fv-t az archer-ben használni akarjuk, akkor használjuk a call-t. Tehát független objektumok használhatják egymás függvényeit
console.log('1', archer)
//wizad.heal.call(archer, 50, 30 );
//apply() esetében ugyanúgy viselkedik mint a call, csak másképp kell megadni a paramétereket, TÖMB formában
//wizad.heal.apply(archer, [50, 30] );

//bind is hasonló a fentiekhez, csak azonnal futtat egy fv-t és visszatér egy új fv-vel.
const healArcher = wizad.heal.bind(archer, 100, 30);
healArcher();
console.log('2', archer);


