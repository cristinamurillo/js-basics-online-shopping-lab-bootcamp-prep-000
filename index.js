var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 var price = Math.floor((Math.random() *100) + 1)

 var itemConstructor = {itemName: itemName, itemPrice: price}
 
 cart.push(itemConstructor)
 
 return `${itemName} has been added to your cart.`
 
}

function viewCart() {
  var cartString = ""
  var i = cart.length
  if (i===0){
    return "Your shopping cart is empty."
  } else if (i===1){
    cartString = `${cart[i-1].itemName} at $${cart[i-1].itemPrice}`
  } else {
  var n = 0;
  while (i>1){
    cartString = `${cartString}${cart[n].itemName} at $${cart[n].itemPrice}, `
    n++
    i--;
   } 
   cartString = `${cartString}and ${cart[n].itemName} at $${cart[n].itemPrice}`
  }
  
  return `In your cart, you have ${cartString}.`
}

function total() {
  var i = cart.length
  var total = 0
  while(i>0){
    total = total + cart[i-1].itemPrice 
    i--;
  }
  return total
}

function removeFromCart(item) {
  
}

function placeOrder(cardNumber) {
  // write your code here
}
