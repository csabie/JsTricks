Promise.resolve('asyncFail')
  .then(response=>{
    throw new Error('#1 fail') //catch-be dobja
    return response
  })
  .then(response =>{
  console.log(response)
  })
  .catch(err =>{ //tovább visszaadja az errort
    return err
  })
  .then(response =>{
    console.log(response.message) //kiirja az errort
  })
  .catch(err=>{
    console.log('final error') // ez már nem fut le soha, csak akkor ha az előző catch-ben egy újabb throw lenne
  })

// ha nincs catch akkor előfordulhat h unhandledPromiseRejection errort /warningot kapunk