const write = require('./modules/write');
const read = require('./modules/read');
const path = require('path');

const filePath = path.resolve(__dirname, 'test.json');

const pessoas = [
    { nome: 'João' },
    { nome: 'Maria' },
    { nome: 'Matheus' },
];

write(filePath, JSON.stringify(pessoas, '', 4));

read(filePath)
    .then(console.log)
    .catch(console.log);