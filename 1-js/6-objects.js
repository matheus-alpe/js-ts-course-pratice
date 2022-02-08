const { log } = require('../utils');

const ATTR = 'nome';

const person =  {
    [ATTR]: 'Matheus'
};

const person2 = new Object({ [ATTR]: 'thiago'});

function Product(name, price, oldPrice, stock) {
    let privateStock = stock;

    Object.defineProperties(this, {
        name: {
            enumerable: true,
            value: name,
            writable: true,
            configurable: true
        },
        price: {
            enumerable: true,
            value: price,
            writable: true,
            configurable: true
        }
    });

    Object.defineProperty(this, 'oldPrice', {
        enumerable: true,
        value: oldPrice,
        writable: true,
        configurable: true
    });

    Object.defineProperty(this, 'stock', {
        enumerable: true,
        get: function () {
            return privateStock;
        },
        set: function (newValue) {
            privateStock = newValue;
        },
        configurable: true
    });
}

const p1 = new Product('Camisa', 20, 25, 3);
log(Object.keys(p1));
log(p1);

log(person);
log(person2);
