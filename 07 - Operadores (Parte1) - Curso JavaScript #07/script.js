/*
Em JavaScript, os operadores são símbolos ou palavras-chave que realizam operações em operandos para produzir um resultado. Eles podem ser usados para executar várias operações, como aritmética, comparação, lógica, atribuição, entre outras. Aqui estão os principais tipos de operadores em JavaScript:

------------------------------------------------------------------------------------

1. Operadores Aritméticos:

Realizam operações matemáticas básicas, como adição, subtração, multiplicação e divisão.
Exemplos: + (adição), - (subtração), * (multiplicação), / (divisão), % (módulo).

5 + 2 -> 7
5 - 2 -> 3
5 * 2 -> 10
5 / 2 -> 2.5
5 % 2 -> 1
5 ** 2 -> 25
5 + 3 / 2 -> 6.5 (ordem de precedência)
(5 + 3) / 2 -> 4

Ordem de Precedência

()
**
* / %
+ -

------------------------------------------------------------------------------------

2. Operadores de Atribuição:

Atribuem valores a variáveis.
Exemplos: = (atribuição simples), += (atribuição de adição), -= (atribuição de subtração), entre outros.

var a = 5 + 3; // a = 8
var b = a % 5; // b = 3
var c = 5 * b ** 2; // c = 45
var d = 10 - a / 2; // d = 6
var e = 6 * 2 / d; // e = 2
var f = b % e + 4 / e; // f = 3

Auto-atribuições

var n = 3;
n = n + 4; // n = 7

Simplificando

n += 4; // n = 7 + 4 = 11
n -= 5; // n = 11 - 5 = 6
n *= 4; // n = 6 * 4 = 24
n /= 2; // n = 24 / 2 = 12
n **= 2; // n = 12 ^ 2 = 144
n %= 5; // n = 144 % 5 = 4

------------------------------------------------------------------------------------

3. Operadores de Comparação ou Relacionais:

Comparam dois valores e retornam um resultado booleano (true ou false).
Exemplos: == (igual a), != (diferente de), > (maior que), < (menor que), >= (maior ou igual a), <= (menor ou igual a).

5 > 2; // true, pois 5 é maior que 2
7 < 4; // false, pois 7 não é menor que 4
8 >= 8; // true, pois 8 é maior ou igual a 8
9 <= 7; // false, pois 9 não é menor ou igual a 7
5 == 5; // true, pois 5 é igual a 5
4 != 4; // false, pois 4 é igual a 4 (a condição é de "diferente de")

preço >= 200.50 // O preço é maior ou igual a 200.50?
idade < 18 // A idade é menor do que 18?
curso == 'JavaScript' // O curso é JavaScript?
n1 != n2 // O primeiro número é diferente do segundo?

Identidade

5 == 5 -> true
5 == '5' -> true (o sinal de igualdade == não testa o tipo)
5 === '5' -> false (o sinal === testa o tipo)
5 === 5 -> true (são identicos)
5 != '5' -> false (tem um sinal de igualdade então não leva em consideração o tipo)
5 !== '5' -> true (desigual restrito, tipos diferentes)

------------------------------------------------------------------------------------

4. Operadores Lógicos:

Realizam operações lógicas em valores booleanos e retornam um resultado booleano.
Exemplos: && (E lógico / conjunção), || (OU lógico / disjunção), ! (NÃO lógico / negação).

E Lógico só me satisfaz se as duas forem verdadeiras.
true && true -> true
true && false -> false
false && true -> false 
false && false -> false

Ou lógico basta um deles seja verdadeira.

true || true -> true
true || false -> true
false || true -> true
false || false -> false

Ordem Precedência

! 
&& 
||

Exemplos:

idade >= 15 && idade <= 17 // A idade está entre 15 e 17?
estado == 'RJ' || estado == 'SP' // O estado é RJ ou SP?
salário > 1500 && sexo "= 'M" // O salário é acima de 1500 e não é homem?

------------------------------------------------------------------------------------

5. Operadores de Concatenação:

Concatenam strings ou valores.
Exemplo: + (concatenação de strings).

------------------------------------------------------------------------------------

6. Operadores de Incremento/Decremento:

Aumentam ou diminuem o valor de uma variável em uma unidade.
Exemplos: ++ (incremento), -- (decremento).

var n = 10;
n++; // Agora n é 11 (incremento pós-fixado)
console.log(n); // Saída: 11

n--; // Agora n é 10 (decremento pós-fixado)
console.log(n); // Saída: 10

++n; // Agora n é 11 (incremento pré-fixado)
console.log(n); // Saída: 11

--n; // Agora n é 10 (decremento pré-fixado)
console.log(n); // Saída: 10

------------------------------------------------------------------------------------

7. Operadores Bitwise:

Realizam operações em nível de bit em valores numéricos.
Exemplos: & (AND bit a bit), | (OR bit a bit), ^ (XOR bit a bit), << (shift left), >> (shift right).

------------------------------------------------------------------------------------

8. Operador de Ternário:

É o único operador JavaScript que possui três operandos.
É uma forma concisa de escrever instruções condicionais.
Sintaxe: condição ? valor_se_verdadeiro : valor_se_falso.

Esses são alguns dos principais operadores em JavaScript, que são fundamentais para escrever expressões e instruções que realizam diversas operações em seus programas.

Exemplo:

1)
var media = 5.5
média >= 7.0 ? "Aprovado" : "Reprovado"
resultado == Reprovado

2)
var x = 8
var res = x % 2 == 0 ? 5 : 9
resultado de x == 8
resultado de res == 5

3) 
var idade = 19
var r = idade >= 18 ? 'MAIOR' : 'MENOR'
resultado == MAIOR
------------------------------------------------------------------------------------

*/