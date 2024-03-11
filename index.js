// Import Classes Here
const Product = require('./classes/Product');
const Cart = require('./classes/Cart');
const Customer = require('./classes/Customer');
const Auth = require('./classes/Auth');

let auth = new Auth();
auth.register("Kaiya", "Kaiya@example.com", '121 Main St');
auth.register("Nina", "Nina@example.com", '22 Broadway St');

console.log(auth.login("Kaiya@example.com"));
/*
{ name: 'Kaiya', email: 'jKaiya@example.com', shippingAddress: '121 Main St' }
}
*/

console.log(auth.login("benny@example.com")); // null


// DO NOT EDIT BELOW THIS LINE
try {
    module.exports = {
        Product,
    }
} catch(e){

}

try {
    module.exports = {
        Product,
        Cart
    }
} catch(e){

}

try {
    module.exports = {
        Product,
        Cart,
        Customer
    }
} catch(e){

}

try {
    module.exports = {
        Product,
        Cart,
        Customer,
        Auth
    }
} catch(e){

}