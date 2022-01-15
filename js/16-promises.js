const { log } = require('../utils');

function random(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function wait(time, msg) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(msg);
        }, time);
    });
}

wait(random(1, 3), '1')
    .then(response => `${response} - first then`)
    .then(response => {
        log(response);
        return wait(random(1, 3), '2')
    })
    .then(log)
    .catch(log);

// Old way
/*
function wait(time, msg, callback) {
    log(time);
    setTimeout(() => {
        log(msg);
        if (callback) callback();
    }, time);
}

wait(random(1, 3), '1', () => {
    wait(random(1, 3), '2', () => {
        wait(random(1, 3), '3');
    });
});
 */