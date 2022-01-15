
function log() {
    console.log(...arguments);
}

/**
 * Sort a number between min and max values.
 * @param { number } min 
 * @param { number } max 
 * @returns number
 */
function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

module.exports = {
    log,
    random
}