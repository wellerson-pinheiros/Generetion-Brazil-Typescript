
/*
Atividade 01 – Fila

Escreva um programa contendo uma Collection Queue (Fila) de Objetos do tipo string, para organizar uma fila por ordem de chegada dos Clientes de um Banco. O programa deverá ter um Menu que aceitará as opções 0, 1, 2 e 3:
1: Adicionar um novo Cliente na fila. Deve solicitar o nome do Cliente.
2: Listar todos os Clientes na fila
3: Chamar (retirar) uma pessoa da fila 
0: O programa deve ser finalizado. 
Caso a fila esteja vazia, o programa deverá informar que a fila está vazia ao tentar retirar (chamar) um cliente da fila.
*/



// importando a class queue e o readliny-sync

import readlinesync = require('readline-sync');

import { Queue } from '../../fila/queue';


// criando meu objeto fila
const fila = new Queue<string>();


//array que ficara os clientes

const clientes = new Queue<string>();



// loop para realização de checagem

for(let i = 0; i < 10 ;i ++){


    let pergunta = readlinesync.questionInt('Digite um numero entre 0 e 3 : ');

    // verificando se o numero digitado está entre 1 e 4
    if(pergunta< 0 || pergunta > 4 ){
        console.log('erro opcao não permitida');
    }
    // caso esteja, então prosseguir com perguntas
    if(pergunta === 1){

    let adicionandoClientes = readlinesync.question('Digite o nome do cliente : ')
    clientes.enqueue(adicionandoClientes);
    console.log(`O cliente ${adicionandoClientes} foi adicionado a lista`)

    }if (pergunta ===2){

       clientes.printQueue()
    }
    if(pergunta === 3){
    
       console.log('A pessoa foi chamada ' + clientes.dequeue())
       
    }if(pergunta === 0){
        console.log('programa finalizado')
        break;
    }
}