const { log } = require('../utils');

function sumArguments() {
    return Object.values(arguments).reduce((total, current) => {
        return total + current
    }, 0)
}

log(sumArguments(12, 3, 20, 2));

function sumTwoValues(a = 0, b = 0) {
    return a + b;
}

log(sumTwoValues());
log(sumTwoValues(2));
log(sumTwoValues(1, 3));