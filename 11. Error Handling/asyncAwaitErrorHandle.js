(async function () {
  try {
    await Promise.resolve("oopsie 1");   
    await Promise.reject("oopsie 2");
  } catch (error) {
    console.log(error); //oupsie 2-őt kiírja
  }
  console.log("is this still good?");
})();
