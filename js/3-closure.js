const { log } = require('../utils');

function multiply(times) {
    return function(value) {
        return value * times;
    }
}

const doubles = multiply(2);
const triple = multiply(3);
const quadruple = multiply(4);

log(doubles(2));
log(triple(2));
log(quadruple(2));