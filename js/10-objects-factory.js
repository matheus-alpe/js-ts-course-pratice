const { log } = require('../utils.js');

const talk = {
    talk() {
        log(`${this.name} está falando!`);
    }
}

const eat = {
    eat() {
        log(`${this.name} está comendo!`);
    }
}
const drink = {
    drink() {
        log(`${this.name} está bebendo!`);
    }
}

// working with composition
const personPrototype = { ...talk, ...eat, ...drink };

// factory function
function createPerson (name, lastname) {
    return Object.create(personPrototype, {
        name: { 
            value: name,
            enumerable: true
        },
        lastname: { 
            value: lastname,
            enumerable: true
        }
    });
}

const p1 = createPerson('Matheus', 'Pereira');
log(p1);
p1.talk();

const p2 = createPerson('Thiago', 'Pereira');
log(p2);
p2.talk();