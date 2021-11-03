//parallel, ez a második leggyorsabb
const promisify = (item, delay) => new Promise( (resolve) => setTimeout( () => resolve(item), delay));

const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('a', 3000);

async function parallel(){
	const promises = [a(), b(), c()];
	const [output1, output2, output3] = await Promise.all(promises);
	
	return `parallel is done: ${output1} ${output2} ${output3}`
}

parallel().then(x=>console.log(x))