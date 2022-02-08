const { log, random } = require('../utils');

function wait(time, msg) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject('Fail promise');
            return;
        }

        setTimeout(() => {
            resolve(msg);
        }, time);
    });
}

// methods
let promises = [
    'First value',
    wait(random(1000, 3000), '1'),
    wait(500, '2'),
    wait(5000, '3'),
    // wait(5000, 1000),
    'Last value',
];

Promise.all(promises)
    .then(log)
    .catch((error) => log('ERROR:', error));

//Return the fastest result
promises = [
    wait(random(1000, 5000), '1'),
    wait(random(1000, 5000), '2'),
    wait(random(1000, 5000), '3'),
];

Promise.race(promises)
    .then((response) => log('Fast result is:', response))
    .catch((error) => log('ERROR:', error));

function downloadPage() {
    const inCache = true;

    if (inCache) {
        return Promise.resolve('Page in cache');
        // return Promise.reject('Page in cache');
    }

    return wait(2000, 'Page downloaded');
}

downloadPage()
    .then(log)
    .catch((error) => log('ERROR:', error));
