/*

Condição Múltiplas -> realizar uma seleção entre várias opções com base no valor de uma expressão.

O uso do break é importante para evitar que a execução continue para os casos subsequentes após um caso correspondido.

switch (expressão) {
  case valor 1 :
    bloco 1 
    break

  case valor 2 :
    bloco 2
    break
  case valor 3 :
    bloco 3 
    break

  default:
    break
}

*/

var agora = new Date()
var diaSem = agora.getDay()

/*

  0 - Domingo
  1 - Segunda
  2 - Terça
  3 - Quarta
  4 - Quinta
  5 - Sexta
  6 - Sábado

*/

//console.log(diaSem)

switch(diaSem) {
  case 0:
    console.log('Domingo')
    break
  case 1:
    console.log('Segunda')
    break
  case 2:
    console.log('Terça')
    break
  case 3:
    console.log('Quarta')
    break
  case 4:
    console.log('Quinta')
    break
  case 5:
    console.log('Sexta')
    break
  case 6:
    console.log('Sábado')
    break
  default:
    console.log('[ERRO] Dia Inválido!')
    break
}

/*

Use if-else quando:

1. Você precisa verificar uma condição mais complexa: Se a lógica de sua condição é mais complexa e requer avaliações mais detalhadas, if-else pode ser mais flexível e permitir expressar condições mais elaboradas.

2. As condições não são mutuamente exclusivas: Se as condições que você está verificando não são mutuamente exclusivas (ou seja, várias delas podem ser verdadeiras ao mesmo tempo), if-else é a escolha adequada. Você pode ter várias condições independentes sendo avaliadas.

3. A lógica de sua condição é baseada em comparações diretas: Se você estiver comparando valores diretamente uns com os outros ou usando operadores de comparação (como <, >, ===, etc.), o if-else pode ser mais apropriado.

Use switch quando:

1. Você está comparando uma expressão com múltiplos valores pontuais: O switch é especialmente útil quando você tem uma expressão que precisa ser comparada com vários valores distintos e quer executar diferentes blocos de código com base nesses valores.

2. Você tem muitos casos a serem considerados: Se você tem muitos casos para considerar e eles são mutuamente exclusivos, o switch pode tornar o código mais limpo e legível do que uma série de instruções if-else if-else.

3. A lógica de sua condição é baseada em igualdades diretas: Se a lógica da sua condição envolve testar a igualdade entre a expressão e os valores específicos, o switch pode ser mais apropriado e mais conciso do que uma série de instruções if-else.

Em geral, é uma questão de preferência e estilo de codificação, mas essas diretrizes podem ajudá-lo a tomar uma decisão informada sobre qual estrutura de controle usar em diferentes situações.




*/