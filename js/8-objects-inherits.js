const { log } = require('../utils');

function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.increase = function(quantity) {
    this.price += quantity;
}

Product.prototype.discount = function(quantity) {
    this.price += quantity;
}

function Shirt(name, price, color) {
    Product.call(this, name, price);
    this.color = color;
}

Shirt.prototype = Object.create(Product.prototype);
Shirt.prototype.constructor = Shirt;

Shirt.prototype.increase = function(percent) {
    this.price = this.price + (this.price * (percent / 100));
}

const p1 = new Product('Genérico', 10);
p1.increase(10);
log(p1);

const c1 = new Shirt('Regata', 5.5, 'Preto');
c1.increase(20);
log(c1);

function Mud(name, price, material, stock) {
    Product.call(this, name, price);
    this.material = material;
    
    Object.defineProperty(this, 'stock', {
        enumerable: true,
        configurable: false,
        get: function() {
            return stock;
        },
        set: function(value) {
            if(typeof value !== 'number') return;
            stock = value;
        }
    });
}

Mud.prototype = Object.create(Product.prototype);
Mud.prototype.constructor = Mud;

const m1 = new Mud('Batman', 50, 'Porcelanato', 1000);
m1.increase(20);
log(m1, m1.stock);