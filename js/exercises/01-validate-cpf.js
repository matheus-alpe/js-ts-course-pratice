/** 
Example: 443.685.649-60

4 x 10 = 40
4 x 9 = 36
3 x 8 = 24
6 x 7 = 42
8 x 6 = 48
5 x 5 = 25
6 x 4 = 24
4 x 3 = 12
9 x 2 = 18
269
11 - (269 % 11) = 6

4 x 11
4 x 10
3 x 9
6 x 8
8 x 7
5 x 6
6 x 5
4 x 4
9 x 3
6 x 2 (new digit)
total
11 - (total % 11) = Y
*/

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