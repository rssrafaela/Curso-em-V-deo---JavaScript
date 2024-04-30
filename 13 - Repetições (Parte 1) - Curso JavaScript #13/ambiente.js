// Opção 3 :

/* O loop do-while executa o bloco de código primeiro e verifica a condição depois. Isso garante que o bloco de código seja executado pelo menos uma vez, mesmo se a condição for falsa.

Neste caso, o loop do-while executa o bloco de código pelo menos uma vez e continua a executá-lo enquanto c for menor ou igual a 6. Ele começa com c = 1 e incrementa c a cada iteração até que c seja maior que 6. */

var c = 1
do {
  console.log(`Passo ${c}`)
  c++
} while (c <= 6)


/*

Opção 2 :

O loop while verifica a condição antes de executar o bloco de código. Se a condição for verdadeira, o bloco de código é executado. Depois disso, a condição é verificada novamente e o processo continua enquanto a condição for verdadeira.

Neste caso, o loop while executa o bloco de código enquanto c for menor ou igual a 10. Ele começa com c = 1 e incrementa c a cada iteração até que c seja maior que 10.

var c = 1 //contador começando com 1
while (c <= 10){
  console.log(`Passo ${c}`)
  c++ // c = c +1
}
*/

/*

Opção 1 :

console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')

*/