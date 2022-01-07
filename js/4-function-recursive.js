const { log } = require('../utils');

function recursive(max, limit) {
    log(max);
    if (max >= limit) return;
    max++;
    recursive(max, limit);
}

recursive(-10, 400);