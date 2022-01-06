const { log } = require('../utils');

talk();

function talk() {
    log('Hello');
}


const logFunction = function(msg) {
    log('function >', msg);
}

function execute(callback) {
    callback('execute');
}

execute(logFunction);

const arrowFunction = () => logFunction('Im arrow function...');

arrowFunction();

const obj = {
    talk() {
        logFunction('Obj');
    }
}

obj.talk();