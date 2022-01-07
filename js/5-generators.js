const { log } = require('../utils');

function* generator() {
    yield 'Value 1';
    yield 'Value 2';
    yield 'Value 3';
}

const value = generator()

log(value.next().value)
log(value.next().value)
log(value.next().value)
log(value.next())