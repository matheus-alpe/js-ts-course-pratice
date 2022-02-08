const { log } = require('../utils');

const Persons = [
    { id: 3, name: 'Luiza'},
    { id: 2, name: 'Maria'},
    { id: 1, name: 'Helena'}
];

// const newPersons = {};
// for (const person of Persons) {
//     const { id } = person;
//     newPersons[id] = { ...person };
// }

const newPersons = new Map();
for (const person of Persons) {
    const { id } = person;
    newPersons.set(id, { ...person });
}

log(newPersons);
log(newPersons.get(2));

for (const [identifier, { id, name }] of newPersons) {
    log(identifier, id, name);
}