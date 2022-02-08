const { log, random } = require('../utils');

function wait(time, msg) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject(false);

        setTimeout(() => {
            resolve(msg);
        }, time);
    });
}

wait(random(1000, 3000), '1')
    .then(response => `${response} - first then`)
    .then(response => {
        log(response);
        return wait(random(1000, 3000), 2)
    })
    .then(log)
    .catch(error => log('ERROR:', error));
// Old way
/*
function wait(time, msg, callback) {
    log(time);
    setTimeout(() => {
        log(msg);
        if (callback) callback();
    }, time);
}

wait(random(1000, 3000), '1', () => {
    wait(random(1000, 3000), '2', () => {
        wait(random(1000, 3000), '3');
    });
});
 */