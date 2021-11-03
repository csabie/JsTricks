//race, ez a leggyorsabb, mert itt a 1 elem kerül célba
const promisify = (item, delay) => new Promise( (resolve) => setTimeout( () => resolve(item), delay));

const a = () => promisify('a', 10000);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);

async function race(){
	const promises = [a(), b(), c()];
	const output1 = await Promise.race(promises);
	
	return `race is done: ${output1}`
}

race().then(x=>console.log(x))