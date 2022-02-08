const { log } = require('../utils');

class Person {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }

    /*
    When creating methods inside the class, 
    it automatically goes to the object's prototype.
    */
    talk() {
        log(`${this.name} está falando!`);
    }

    eat() {
        log(`${this.name} está comendo!`);
    }

    drink() {
        log(`${this.name} está bebendo!`);
    }
}

const p1 = new Person('Matheus', 'Alves');
const p2 = new Person('Thiago', 'Pereira');
p1.talk();
p2.talk();