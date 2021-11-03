//amazon shopping

const user = {
  name: 'Kim',
  active: true,
  cart: [],
  purchases: []
}

const compose=(f, g) => (...args) => f(g(...args))

//purchaseItem(user, {name: 'laptop', price: 344})
//itt ez a factory
purchaseItem(
  emptyCart,
  buyItem,
  applyTaxToItems,
  itemItemToCart
)(user, {name: 'laptop', price: 288})

//function purchaseItem(user, item) {
  //return Object.assign({}, user, {purchases: item})
//}

function purchaseItem(...fns){
	//összegzi az össze megadandó függvényeket
  //return fns.reduce(compose)
//  It's a way of creating a pipeline of functions where by 
//the output from one function is used as the parameter of the next, 
//so we end up with a composed function that is effectively

  return fns.reduce((acc, currentFn) => compose(acc, currentFn))
}

function itemItemToCart(user, item) {
  const updatedCart = user.cart.concat(item)
  return Object.assign({}, user, {cart: updatedCart})
}

function applyTaxToItems(user) {
  //user.cart
  const {cart}=user;
  const taxRate = 1.3
  const updatedCart = cart.map(item=>{
    return {
      name: item.name,
      price: item.price*taxRate
    }
  })
  return Object.assign({}, user, {cart: updatedCart});
}

function buyItem(user) {
    return Object.assign({}, user, {purchases: user.cart});
}

function emptyCart(user) {
    return Object.assign({}, user, {cart:[]});
}
