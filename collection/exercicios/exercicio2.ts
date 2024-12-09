/*Escreva um programa para criar uma Collection Array do tipo number, 
inicializada com 10 valores inteiros.
 O programa deverá solicitar ao usuário, que ele digite via teclado 
 1 número inteiro e caso ele seja encontrado no Array, 
 exiba na tela a posição deste número na Collection.
  Caso o número não seja encontrado, o programa deverá exibir na tela
   a mensagem: O número NN não foi encontrado!
*/


import { exit } from 'process';
import  readlinesync = require('readline-sync');


const  collec: number[] = [100, 80, 75, 15, 34, 20, 84, 36, 70, 8];





for(let conferir of collec){

    let numeroConferencia = readlinesync.questionInt('DIGITE UM NUMERO : ')

    let posição = collec.indexOf(numeroConferencia)

    if(posição === -1){
        console.log('Eroo numero não encontrado')
        
    }


    
  
   console.log(`o numero esta na posicao de : ${posição}`)
}





