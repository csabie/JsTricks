//itt látja, a javascript engine, hogy itt egy web API-t hívok (setTimeout)
//ez fog harmadjára lefutni
setTimeout(()=>{console.log('1', 'the loneliest number')}, 0)
//ez fog negyedjére lefutni
setTimeout(()=>{console.log('2', 'the loneliest number')}, 10)

// itt a javascript engine nem tudja, hogy mit hívok, de azt látja h ez asszinkron, ide még visszatér. Ez job queue-ba megy bele, a setTimer pedig callback queue. A kettő közül a job queue-nak van prioritása, tehát ez hajtódik végre másodiknak
Promise.resolve('hi').then((data)=>console.log('2', data))

//és az egész értelmezés alapján ez fog először végrehajtódni, mert nem async 1. prioritással rendelkezik
console.log('3', 'is a crowd')