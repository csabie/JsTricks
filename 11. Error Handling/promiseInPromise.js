Promise.resolve('asyncFail')
  .then(response=>{
    Promise.resolve().then( () => {
      throw new Error('#3 fail')
    })
    .catch(console.log)
    return 5
  })
  .then(response =>{
     console.log(response)
  })
  .catch(err =>{
    throw new Error('#2 fail')
  })
 // .then(response =>{
   // console.log(response.message) //kiirja az errort
 // })
  .catch(err=>{
    console.log('final error', err) // ez már nem fut le soha, csak akkor ha az előző catch-ben egy újabb throw lenne
  })

// ha nincs catch akkor előfordulhat h unhandledPromiseRejection errort /warningot kapunk