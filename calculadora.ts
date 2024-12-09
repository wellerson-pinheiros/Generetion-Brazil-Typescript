import readlinesync = require('readline-sync');
let numero1: number;
let numero2:number;

numero1 = readlinesync.questionFloat('DIGITE O PRIMEIRO NÚMERO: ');
numero2 = readlinesync.questionFloat('DIGITE O SEGUNDO NUMERO: ');



console.log("A soma dos 2 números é igual a " + numero1 + numero2);
