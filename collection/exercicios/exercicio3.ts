/*
Escreva um programa para criar uma Collection Set do tipo number.
O programa deverá solicitar ao usuário, que ele digite via teclado
 10 valores inteiros não repetidos e adicione-os individualmente na 
 Collection Set. Em seguida, faça o que se pede:

 */


 import readlinesync = require('readline-sync');

 const collec : Set<Number> = new Set<Number>();
 
 for(let i = 0 ; i < 10  ; i ++ ){
    let pegandoNumeros = readlinesync.questionInt('DIGITE 10 NUMEROS NAO REPETIDOS : ');
    collec.add(pegandoNumeros)
    

 }


 console.log(collec)