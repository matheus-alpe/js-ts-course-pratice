export const nome = 'Matheus';
export const sobrenome = 'Alves';
export const idade = 26;

export function soma (x, y) {
    return x + y;
}

export class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
};