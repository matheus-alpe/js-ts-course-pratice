const { log } = require('../../utils');

function calculateCPF(cpfSanitized, lastPosition) {
    let cpfSliced = cpfSanitized.slice(0, lastPosition);
    let result = cpfSliced.split('').reverse().reduce((accumulator, current, index) => {
        return accumulator + Number(current) * (index + 2);
    }, 0);
    result = 11 - (result % 11);
    
    return `${cpfSliced}${result > 9 ?  0 : result}`
}

function isValidCPF(cpf) {
    const cpfSanitized = cpf.replace(/\D+/g, '');
    const finalResult = calculateCPF(calculateCPF(cpfSanitized, -2));
    return cpfSanitized === finalResult;
}

log(isValidCPF("645.009.049-99")); //expect = true
log(isValidCPF("443.685.649-60")); //expect = true
log(isValidCPF("001.430.949-12")); //expect = true
log(isValidCPF("444.060.382-30")); //expect = true
log(isValidCPF("444.060.382-33")); //expect = false