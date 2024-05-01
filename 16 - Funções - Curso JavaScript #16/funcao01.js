/*

O que são funções?

São ações executadas assim que são chamadas ou em decorrência de algum evento.

Uma função pode receber parâmetros e retornar um resultado.

*/

function parimpar(n){ // parametro formal
  if(n%2 == 0){
    return 'Par!'
  } else {
    return 'Ímpar!'
  }
}

let res = parimpar(4) // parametro real
console.log(res)