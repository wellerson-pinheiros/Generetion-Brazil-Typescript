import readlinesync = require('readline-sync')
import { Queue } from './queue'

const fila = new Queue<string>();

fila.enqueue('beatriz');
fila.enqueue('gustavo');
fila.enqueue('Alana');


fila.enqueue(readlinesync.question('DIGITE SEU NOME: '));

fila.printQueue();