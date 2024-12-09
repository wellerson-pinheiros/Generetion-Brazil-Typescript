
/*
Escreva um programa contendo uma Collection Stack (Pilha) de Objetos string, para organizar a retirada de livros de uma pilha. O programa deverá ter um Menu que aceitará as opções 0, 1, 2 e 3:
1: Adicionar um novo livro na pilha. Deve solicitar o nome do livro.
2: Listar todos os livros da Pilha
3: Retirar um livro da pilha 
0: O programa deve ser finalizado. 
Caso a pilha esteja vazia, ao tentar retirar um livro da pilha, o programa deverá informar que a pilha está vazia.
*/

import { Stack } from "../Stack";


// obtendo a biblioteca redlinesync

const readlinesync = require('readline-sync');


const pilha = new Stack<string>();

for(let i = 0 ; i < 10 ; i++){

    let escolha = (readlinesync.questionInt('DIGITE UM NUMERO ENTRE 0 E 3 ' ));
    
    //verificando se o numero está entre 1 e 4 
    
    if(escolha < 0 || escolha > 3 ){
        console.log('Eroo numero desconhecido')
    }

    if(escolha === 1){

        let nomeLivro = (readlinesync.question('Nome do livro a ser adicionado na pilha '));
        pilha.push(nomeLivro)
        console.log('O livro ' + nomeLivro + ' foi adicionado ao topo da pilha')
    
    }if (escolha === 2){

        pilha.printStack();
    
    }if(escolha === 3){
        console.log("O livro " + pilha.pop() +  "foi removido do topo da pilha")
    
    }if(escolha === 0){
        console.log('Programa finalizado')
        break;
    }

}
