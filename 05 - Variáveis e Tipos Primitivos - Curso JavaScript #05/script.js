/* 

O que é variável?

Em JavaScript, uma variável é um contêiner para armazenar dados. Ela é como uma caixa que você pode nomear e atribuir valores. As variáveis em JavaScript podem conter diferentes tipos de dados, como números, strings, booleanos, objetos, arrays, entre outros.

Para declarar uma variável em JavaScript, você usa a palavra-chave var, let ou const, seguida pelo nome da variável.

Depois de declarar uma variável, você pode atribuir um valor a ela usando o operador de atribuição =. 

Uma vez que uma variável foi declarada e atribuída, você pode usá-la em seu código para realizar operações, exibir informações, fazer cálculos e muito mais. As variáveis em JavaScript são dinâmicas, o que significa que você pode reatribuir diferentes valores a elas ao longo do tempo e elas podem armazenar diferentes tipos de dados.

Por exemplo:

var n1 = 5;
var n2 = 8.5;
var n3 = 15;
--------------------------------------------------------------------------------
Posso usar no JavaScript três tipos de aspas:

As "aspas duplas", o 'apóstrogo' ou aspa simples e a ´crase`
var s1 = "javaScript";
var s2 = 'Curso em Vídeo';
var s3 = ´Guanabara`;

No JavaScript, as três formas de delimitar strings têm a mesma funcionalidade básica, que é representar texto. No entanto, há algumas diferenças sutis entre elas:

1. Aspas Duplas (")
Permitem que você inclua aspas simples (') dentro da string sem escapar.
Amplamente utilizadas e reconhecidas como a forma padrão de delimitar strings em muitas linguagens de programação.

2. Apostrofo ou Aspas Simples (')
Funciona da mesma forma que as aspas duplas para delimitar strings.
Útil quando a string em si contém muitas aspas duplas.

3. Crase ou Template Strings (`)
Permitem interpolação de variáveis usando ${} dentro da string.
Permitem quebras de linha sem a necessidade de caracteres de escape.
Úteis para criar strings multilinhas ou strings que contenham valores de variáveis diretamente.

Em resumo, enquanto as aspas duplas e as aspas simples têm usos semelhantes e são amplamente intercambiáveis, as template strings oferecem funcionalidades adicionais, como interpolação de variáveis e facilitam a criação de strings multilinhas. A escolha entre elas depende do contexto específico e das necessidades do seu código.

--------------------------------------------------------------------------------

Identificadores:

Em JavaScript, identificadores são nomes que você atribui a variáveis, funções, classes, objetos e outras entidades no seu código. Esses nomes são usados ​​para identificar e acessar essas entidades ao longo do programa.

Os identificadores em JavaScript devem seguir algumas regras:

1. Começar com uma letra (a-z, A-Z) ou com um sublinhado (_) ou cifrão ($).
2. Podem conter letras, dígitos (0-9), sublinhados (_) ou cifrões ($).
3. Não podem conter espaços ou caracteres especiais, exceto sublinhados (_) e cifrões ($).
4. Não podem ser palavras reservadas ou palavras-chave do JavaScript.

Exemplos de identificadores válidos em JavaScript:

1.  nome
2. _variavel
3. $total
4. idadeDoUsuario
5. calcularSoma

Exemplos de identificadores inválidos em JavaScript:

1. 2idade (começa com um número)
2. meu nome (contém um espaço)
3. var (palavra reservada)

Boas práticas para nomes de identificadores incluem:

1. Clareza e Descritividade: Use nomes que descrevam claramente o propósito ou a função da entidade que estão identificando.

2. CamelCase ou snake_case: Convenções de nomenclatura como camelCase (primeira palavra em minúsculas e as palavras subsequentes começam com maiúsculas) ou snake_case (todas as letras minúsculas e palavras separadas por sublinhados) ajudam a tornar os identificadores mais legíveis.

3. Evite Abreviações Obscuras: Embora a concisão seja importante, evite abreviações que possam ser confusas ou ambíguas para outros desenvolvedores que possam ler seu código.

--------------------------------------------------------------------------------

Testamos códigos JavaScript no terminal usando o Node.js

--------------------------------------------------------------------------------

Dicas: 

1. Maiúsculas e minúsculas fazem diferença.
2. Tente escolher nomes coerentes para as variáveis.
3. Evite se tornar um 'programador alfabeto' ou um 'programador contador'

--------------------------------------------------------------------------------

Em JavaScript, existem diversos tipos de variáveis que podem ser utilizados para armazenar diferentes tipos de dados. Aqui estão os principais tipos de variáveis em JavaScript:

1. Variáveis primitivas:

São variáveis que armazenam valores simples.

Os tipos primitivos incluem:

Number: para valores numéricos, como inteiros e decimais.
String: para valores de texto.
Boolean: para valores booleanos, que podem ser true ou false.
Null: para indicar a ausência de valor.
Undefined: para indicar que uma variável foi declarada, mas ainda não foi atribuída a um valor.
Symbol (introduzido no ECMAScript 6): para criar identificadores únicos.

2. Variáveis de referência:

São variáveis que armazenam referências a objetos na memória.

Os tipos de referência incluem:

Object: para armazenar coleções de dados e funcionalidades.
Array: para armazenar uma coleção ordenada de valores.
Function: para armazenar blocos de código reutilizáveis.
Date: para armazenar e manipular datas e horários.
Outros tipos de objetos definidos pelo usuário.

--------------------------------------------------------------------------------

Em JavaScript, Infinity e NaN são valores especiais associados ao tipo de dado Number. Aqui está uma explicação de cada um:

1. Infinity (Infinito):

Infinity é um valor especial que representa infinito em JavaScript.
Ele é retornado quando um número excede o maior valor possível em JavaScript.
Por exemplo, dividir um número positivo por zero resulta em Infinity.

2. NaN (Not a Number - Não é um número):

NaN é um valor especial que indica uma operação inválida envolvendo números.
Ele é retornado quando uma operação matemática não pode ser realizada ou produz um resultado indefinido.
NaN é contagioso: qualquer operação matemática realizada com NaN resultará em NaN

--------------------------------------------------------------------------------

Em JavaScript, o operador typeof é usado para determinar o tipo de dado de uma expressão. Ele retorna uma string que indica o tipo de dado da expressão fornecida. Aqui estão alguns pontos importantes sobre o typeof:

1. Sintaxe:
O operador typeof é seguido por uma expressão cujo tipo de dados queremos verificar. A sintaxe é:
*/

typeof expressao

/*

2. Retorno:
O typeof retorna uma string que representa o tipo de dado da expressão fornecida. As possíveis strings de retorno são:

"undefined": Se a expressão é indefinida.
"number": Se a expressão é um número.
"string": Se a expressão é uma string.
"boolean": Se a expressão é um booleano.
"object": Se a expressão é um objeto (exceto para null).
"function": Se a expressão é uma função.
"symbol": Se a expressão é um símbolo (introduzido no ECMAScript 6).

3. Exemplos: 

*/

console.log(typeof 42); // Saída: "number"
console.log(typeof "Olá"); // Saída: "string"
console.log(typeof true); // Saída: "boolean"
console.log(typeof {}); // Saída: "object"
console.log(typeof function(){}); // Saída: "function"
console.log(typeof undefined); // Saída: "undefined"
console.log(typeof null); // Saída: "object" (isso é um erro de design do JavaScript)
console.log(typeof Symbol()); // Saída: "symbol" (introduzido no ECMAScript 6)

/*

4. Nota sobre null:

É importante observar que o typeof null retorna "object", o que é tecnicamente um erro de design do JavaScript. Isso ocorre porque em versões antigas do JavaScript, o tipo de null foi erroneamente definido como "object", e isso foi mantido por razões de compatibilidade com versões anteriores. No entanto, null é uma primitiva e não um objeto.

O operador typeof é útil para verificar os tipos de dados das variáveis e para realizar verificações condicionais baseadas nos tipos de dados. Ele é frequentemente usado em conjunto com estruturas de controle, como if e switch, para tomar decisões com base nos tipos de dados das variáveis.

--------------------------------------------------------------------------------

*/
