import { idade, nome, sobrenome, soma, Pessoa } from './modulo1';

console.log(nome, sobrenome, idade);
console.log(soma(5, 5));

const p1 = new Pessoa('Thiago', 'Pereira');
console.log(p1);

/*
import defaultExport from "./modulo1";
import * as name from "./modulo1";
import { export } from "./modulo1";
import { export as alias } from "./modulo1";
import { export1 , export2 } from "./modulo1";
import { export1 , export2 as alias2 , [...] } from "./modulo1";
import defaultExport, { export [ , [...] ] } from "./modulo1";
import defaultExport, * as name from "./modulo1";
import "./modulo1"; 
var promise = import("./modulo1"); // This is a stage 3 proposal.
*/