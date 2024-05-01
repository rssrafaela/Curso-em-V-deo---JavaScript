/*

Variáveis simples só conseguem armazenar um valor por vez.

Variáveis compostas devem ser capazes de armazenar vários valores em uma mesma estrutura. --> Um vetor ou array é uma estrutura de dados que armazena uma coleção de elementos, onde cada elemento é associado a um índice ou chave que o identifica na coleção. Os arrays podem conter uma variedade de tipos de dados, incluindo números, strings, objetos, ou até mesmo outros arrays.

1) Índice ou chave: Cada elemento em um array é identificado por um índice ou chave, que é um valor numérico (em muitas linguagens de programação, os índices começam em 0). O índice permite acessar e referenciar um elemento específico no array.

2) Elemento: Cada valor armazenado dentro do array é chamado de elemento. Os elementos podem ser de qualquer tipo de dados válido na linguagem de programação em questão.

3) Variável que guarda mais de um valor: Um array é uma variável que pode armazenar múltiplos valores do mesmo tipo de dado ou de tipos diferentes de dados. Ele é útil quando você precisa lidar com conjuntos de dados relacionados e deseja acessar esses dados de maneira organizada e eficiente.

Por exemplo:

1) Declaração de um Array: Onde elemento1, elemento2, etc., são os elementos que você deseja armazenar no array.

let meuArray = [elemento1, elemento2, elemento3, ...];

2) Índices: Os elementos em um array são acessados por meio de índices, que são números inteiros que representam a posição do elemento no array. Em JavaScript, os índices começam em 0. 

let frutas = ["Maçã", "Banana", "Laranja"];
console.log(frutas[0]); // Saída: Maçã
console.log(frutas[1]); // Saída: Banana

3) Comprimento do Array: Você pode obter o número de elementos em um array usando a propriedade length:

console.log(frutas.length); // Saída: 3

4) Adicionar Elementos: Você pode adicionar elementos a um array usando o método push():

frutas.push("Abacaxi");
console.log(frutas); // Saída: ["Maçã", "Banana", "Laranja", "Abacaxi"]

5) Remover Elementos: Você pode remover elementos de um array usando o método pop(), que remove o último elemento do array, ou o método splice(), que pode remover elementos de qualquer posição do array.

6) Iteração em Arrays: Você pode percorrer os elementos de um array usando loops, como for ou for...of, ou métodos de iteração de arrays, como forEach(), map(), filter(), entre outros.

// Usando um loop for
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

// Usando forEach
frutas.forEach(function(fruta) {
    console.log(fruta);
});

*/

let num = [5, 8, 4]
num[3]=6 // primeira forma de adicionar um elemento
num.push(7) // segunda forma de adicionar um elemento
num.sort() // Ordenando o vetor
console.log(`Nosso vetor é o ${num}`) // Imprimindo o vetor
console.log(`O comprimento do vetor é ${num.length}`); // Imprime o comprimento do vetor
console.log(num[0]) // Imorime o elemento que está na posição 0

