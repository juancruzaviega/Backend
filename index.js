const multiplicador = num => num * 2;
const restar = num => num - 1;
// console.log(multiplicador(4))
// console.log(typeof multiplicador);


function clase(num, cb) {
    return cb(num);
}
console.log(clase(15, restar))



class ClaseCoder {
    static hora = new Date();
    constructor() {

    }
    suma() {

    }
}