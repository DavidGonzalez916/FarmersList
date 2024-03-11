const Customer = require('./Customer');

class Auth{
    constructor(){
        this.customers = [];
    }
    register(name, email, shippingAddress){
        const cust = new Customer(name, email, shippingAddress);
        this.customers.push(cust);
    }
    login(email){
        const result = this.customers.find((item) => item.email == email);
        return result || null;
    }
}

module.exports = Auth;