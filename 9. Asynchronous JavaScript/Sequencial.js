//sequence, ez a leglassuk, mert itt bevárják egymást
const promisify = (item, delay) => new Promise( (resolve) => setTimeout( () => resolve(item), delay));

const a = () => promisify('a', 1000);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);

async function sequence(){

	const output1=await a();
	const output2=await b();
	const output3=await c();
	
	return `sequence is done: ${output1} ${output2} ${output3}`
}

sequence().then(x=>console.log(x))