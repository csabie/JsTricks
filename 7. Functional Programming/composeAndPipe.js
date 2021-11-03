//compose

//abs(-50 * 3)

              //2 fv kell, -50 a data  itt a g lesz az abszulutérték fv az f pedig beszorozza 3-mal
const compose = (f, g) =>(data) => f(g(data))

//arity = hány argumentuma van.
			 //pl itt aritiy of 2 van
const pipe = (f, g) =>(data) => g(f(data))

const multiplyBy3 = (data) => data*3;
makePositive = (num) => Math.abs(num)

const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive)

multiplyBy3AndAbsolute(-50)