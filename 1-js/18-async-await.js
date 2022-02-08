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

// wait(random(1000, 3000), 'Fase 1')
//     .then((value) => {
//         log(value);
//         return wait(random(1000, 3000), 'Fase 2');
//     })
//     .then((value) => {
//         log(value);
//         return wait(random(1000, 3000), 'Fase 3');
//     })
//     .then((value) => {
//         log(value);
//         return wait(random(1000, 3000), 'Terminou as fases!');
//     })
//     .then((value) => {
//         log(value);
//     })
//     .finally(() => {
//         log('### Fim ###');
//     })
//     .catch((error) => log('ERROR:', error));

// using async/await
(async function execute() {
    try {
        const step1 = await wait(random(1000, 3000), 'Fase 1');
        log(step1);

        const step2 = await wait(random(1000, 3000), 'Fase 2');
        log(step2);

        const step3 = await wait(random(1000, 3000), 'Fase 3');
        log(step3);

        const final = await wait(random(1000, 3000), 'Terminou as fases!');
        log(final);

        log('### Fim ###');
    } catch (error) {
        log('ERROR:', error);
    }
})();
