const promise  = new Promise((resolve, reject)=>{
  if(true){
    resolve('Stuff Worked')
  }else{
    reject('Error, it broke')
  }
})

const promise2  = new Promise((resolve, reject)=>{
  setTimeout(resolve, 100, 'MIII') //MIII-t írja ki 100 ms delay-jel
})

const promise3  = new Promise((resolve, reject)=>{
  setTimeout(resolve, 1000, 'Pookie') //pookie-t írja ki 1 mp delay-jel
})

const promise4  = new Promise((resolve, reject)=>{
  setTimeout(resolve, 5000, 'Is it me you are looking for?') //pookie-t írja ki 5 mp delay-jel
})

//itt az összes promise egyszerre van hívva, de a machanizmus az ami az alsóban
Promise.all([promise, promise2, promise3, promise4])
   .then(values =>{
     console.log(values)
   })



//ez csak az első primise hívása
//promise.then(result => console.log(result))
promise
  // a resultok után azért nem kell {} mert ha 1 soros kifejezés következik, akkor au automatikusan return
  .then(result=> result+'!') //megkapja resultot, ehhez rak egy ! jelet
  .then(result2=>{ 
    console.log(result2) //itt megvárta az előzőt és kiíratta
  })


//itt kikényserítjük az error-t, hogy lássuk mi lesz a catch-ben
//promise
  //.then(result=> {
    //throw Error
    //return result+'!'
  //}) //megkapja resultot, ehhez rak egy ! jelet
  //.then(result2=>{ 
   // console.log(result2) //itt megvárta az előzőt és kiíratta
  //})
  //.catch( () => console.log('error!!'))