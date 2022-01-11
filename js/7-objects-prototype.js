const { log } = require('../utils');

function Person(name, lastName) {
    this.name = name;
    this.lastName = lastName;
}

Person.prototype.fullname = function () {
    return  `${this.name} ${this.lastName}`;
};

const p1 = new Person('Matheus', 'Pereira');

log(p1.fullname());

const objA = {
    keyA: 'A'
};

const objB = {
    keyB: 'B'
};

const objC = new Object();
objC.keyC = 'C'

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
log(objB, objB.keyA);
log(objC, objC.keyA, objC.keyB);

function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.discount = function(percent) {
    this.price = this.price - (this.price * (percent / 100));
};

Product.prototype.increase = function(percent) {
    this.price = this.price + (this.price * (percent / 100));
};

const product1 = new Product('Camisa', 50);
product1.discount(10);
log(product1);

const product2 = {
    name: 'Bermuda',
    price: 20
};
Object.setPrototypeOf(product2, Product.prototype);
product2.increase(10);
log(product2);

const product3 = Object.create(Product.prototype, {
    name: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 'Boné' 
    },
    price: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 100
    }
});
product3.discount(20);
log(product3);