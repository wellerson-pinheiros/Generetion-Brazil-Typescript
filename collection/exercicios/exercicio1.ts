/* 
Escreva um programa para criar uma Collection Array de Objetos do tipo string. O programa deverá solicitar ao usuário, que ele digite via teclado 5 cores e deverá adicioná-las individualmente no Array. Em seguida, faça o que se pede:
Mostre na tela todas as cores adicionadas. 
Mostre na tela todas as cores adicionadas, ordenadas em ordem crescente.
*/


import readlinesync = require ('readline-sync');

const cores : Array<string> = new Array <string> ();



for (let i =  0 ; i < 5 ; i ++){

    let adicionarCOres = readlinesync.question('DESCREVA 5 CORES DIFERENTES');
    
    
    cores[i] = adicionarCOres;
}


console.log('As cores digitadas foram : ' + cores + ". \nAgora em order alfabetica " + cores.sort())
