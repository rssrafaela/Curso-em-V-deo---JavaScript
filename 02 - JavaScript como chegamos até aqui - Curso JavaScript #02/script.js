/*

Evolução JS

Em meados da década de 60 - Surgiu os primordios da internet com a Guerra Fria. Ela foi uma guerra essencialmente psicológica e tecnológica. A União Soviética tinha muito mais tecnologia naquela época do que os EUA, inclusive foi a URSS que lançou o primeiro satélite artificial, o famoso Sputnik.

Nessa época, o presidente militar Dwight D. Eisenhower decretou a criação de uma agência de pesquida tecnológica, a DARPA.

A função da DARPA era pesquisar tecnologias para a guerra. Uma dessas tecnologias envolvia a segurança dos centros militares. 

O centro militar nessa época tinham grandes computadores que comportavam muitos dados. Se por acaso a URSS bombardeasse esse centro militar, todos os dados seriam perdidos.

A ideia da DARPA foi criar uma rede para proteger esses dados, onde um centro militar se comunicaria com o outro e se por acaso um fosse bombardeado, os dados de um estavam dentro desse outro então os danos seriam físicos e não aos dados.

Essa rede foi chamada de ARPANET. Era uma rede essencialmente gerenciada pelo governo e por militares, mas tinha também muitas universidades dentro. Principalmente duas muito importantes: a Universidade da Califórnia e um departamento que era o MIT, lá do outro lado dos EUA. Essa rede sofreu um crescimento gigante durante alguns anos, só que chegou um momento em que os militares e o governo não estavam mais dando conta, porque a rede cresceu muito e a elas se juntaram a outras pequenas redes. E foi nesse momento, durante a história da ARPANET, que ela mudou de nome várias vezes. O último nome que ficou foi a Internet.

Os anos se passaram e a ARPANET (no caso a Internet) sofreu várias atualizações, várias tecnologias que surgiram, mas uma que vai importar pra gente surgiu em 1993.

Em 1993 em Genebra, um inglês chamado Timothy Berners-Lee ou Tim Berners-Lee ou TBL, e sua equipe que trabalha no CERN, que é uma Organização Européria para Pesquisa de Energia Nuclear, pesquisaram um meio de transformar o conteúdo em algo mais interativo através de ligações entre documentos. Surgiu então a linguagem HTML, que foi criada por ele e por sua equipe, o protocolo HTTP, que se juntou ao conjunto de protocolos TCP/IP que fazem parte da Internet, e também funcou a World Wide Web, a WWW que a gente usa até hoje. 

Nesse mesmo ano, para que todas essas invenções de Tim Berners-Lee funcionassem também era necessário um navegador. Surgiu então, nos EUA, o Mosaic. Ele era uma criação de um outro pesquisador, em outro centro de pesquisa que era NCSA ou Centro Nacional de Aplicações de Supercomputadores. Esse pesquisador era o Marc Andreessen

O Mosaic foi um navegador muito importante para a evolução da tecnologia, porque ele foi o primeiro, na verdade ele foi adaptado de um interpretador de Gopher que era um protocolo anterior ao HTTP, mas ele foi adaptado e também funcionava com HTTP e também mostrava páginas Web.

Inclusive Marc Andreesen foi muito importante em 1994, quando ele saiu da NCSA e se juntou com o cara bilionário o fundador da Silicon Graphics, chamado Jim Clark. Os dois juntos, jundaram uma empresa chamada Netscape.

A empresa Netscape criou um navegador baseado no Mosaic e com toda a experiência que Andreessen tinha, e facilmente se tornou o navegador por mais famoso da Internet. 

A Netscape resolveu criar uma coisa baseada numa necessidade. O HTML era muito estático e foi aí, em 1995 que um ex-funcionário da Silicon Graphics, que trabalhava para o Jim Clark passou da Silicon Graphics para dentro da Netscape. O nome dele Brandon Eich, ele era um desenvolvedor e a tarefa dele foi a seguinte: criar uma linguagem que desse mais funcionalidades ao simples HTML que existia na época. O Brandon Eich tinha um projeto e batizou a sua linguagem inicialmente de Mocha que é um tipo de cafezinho e nessa mesma época estava surgindo uma linguagem da Sun Microsystems chamada Java. 

Em 1995, o Brandon Eich estava criando a linguagem Mocha e estava nascendo ao mesmo tempo a linguagem Java. E essa linguagem Java ganhou um sucesso muito grande na mídia, a mídia chamava a linguagem de "linguagem do futuro".

Mocha foi o nome inicial ela se chamava depois LiveScript, e a Netscape pensou: "Devido ao nome JAVA fazer sucesso, decidiram alterar o nome de LiveScript para JavaScript". (jogada de marketing)

Mas JAVA e JAVASCRIPT são diferentes. Alguns comandos se parecem bastant pois foram baseadas numa outra linguagem, chamada linguagem C.

JavaScript foi uma linguagem que fez bastante sucesso. 

A Empresa Microsoft, a criadora do Windows. Decidiu criar a própria linguagem. Isso pq tinha acabado de criar o próprio navegador que basicamente era o código do Mosaic. O Mosaic foi passado para uma empresa, essa empresa foi comprada pela Microsoft, a Microsoft pegou o código do Mosaic e lançou um navegador chamado Internet Explores.  

O Internet Explores foi lançado muito perto do ano de 1995, junto com o Windows95 e a Microsoft não deixou pra trás: "vamos criar o nosso próprio JavaScript, com os mesmos comandos resolvendo alguns problemas que as pessoas já tinham identificado e vamos batizar de JScript".

Com isso, a NetScape teve uma sacada muito boa, que foi padronizar a linguagem. E isso aconteceu em 1997. A Netscape procurou uma empresa de padronização, nesse caso uma empresa européia, a ECMA, que é a Associação Europeia de Fabricantes de Computadores. A ECMA na Europa é tipo uma ISO nos EUA, ela padroniza as coisas. E foi daí que surgiu a linguagem ECMAScript. Basicamente a ECMAScript é a linguagem JavaScript padronizada. 

2002 foi o ano de encerramento da briga que existia entre a Netscape e a Microsoft. Houve uma briga muito grande. O Internet Explores foi embutido no sistema operacional Windows95, o que fez com que a Netscape deixasse de ser um navegador mais famoso e mais instalado, porque as pessoas já compravam um computador que já tinham navegador, que era o Internet Explorer. Com isso, a NetScape deu uma caída e acabou falindo, mas as pessoas que trabalham lá criaram a Fundação Mozilla.

Essa fundação mozilla ganhou uma nova roupagem , um novo nome, um novo código e passou a ser o Firefox.

O Firefox até que ganhou uma grande notoriedade mas acabou não sendo um grande navegador. Ele acabou perdendo muito espaço porque em 2008, uma outra grande empresa acabou entrando nessa briga, a BetScape, a Microsoft, o mercado de Internet crescendo pra caramba. Surgiu o Google Chrome, e cresceu muito nos primeiros dois anos de vida, ele já se tornou o terceiro navegador mais usado do mundo. Hoje o Google Chrome (2024) é o navegador mais famoso do mundo. Ele tem praticamente 50% do mercado. 

O que o Google Chrome trouxe de bom e que vai interessar no aprendizado da linguagem JavaScript? 

Ele tinha um motor interno de JavaScript muito podersoso e foi em 2009, que surgiu a versão da V8, uma referência aos motores. O V8 é o motor por baixo do capô do Google Chrome que roda JavaScript. Cada navegador tem o seu próprio motor, por exemplo: 

O Firefox tem o SpiderMonkey

O Safari tem o Nitro

O Opera tem o Karakan

Na Microsoft no Edge tem o Chakra

Uma das grandes vantagens do V8, e que tornou ele muito importante, é que ele gerava código JIT ou código "Just in Time". O V8 também tem código aberto, é código livre qualquer pessoa pode mexer. 

Inclusive, um grupo pegou o código do V8 mexeu e fez a seguinte transformação:

O V8 só roda se eu tiver Google Chrome ele é código aberto, se ele é código aberto eu posso modificar ele funcionar fora do Google Chrome. E essa iniciativa deu origem a uma ferramente que surgiu em 2010, chamada Node.js

Node.js é uma máquina que roda JavaScript fora do navegador. Foi uma das grandes iniciativas, foi a que popularizou a saída do JavaScript dos navegadores. Então hoje graças ao Node.js, e graças a outras máquinas que também rodam do lado de fora, que podemos ter o JS do lado do servidor também. 

Evolução do ECMAScript: 

Surgiu em 1997 com a versão 1.0 que era JavaScript 1.1, que foi padrinizado pela ECMA.

Em 1998 foi lançada a versão 2.0. Ela trouxe apenas algumas pequenas atualizações ao que tinha feito a versão 1.0.

Em 1999 foi lançada a versão 3.0. Ela trouxe compatibilidade com expresões regulares. Já tinha o bloco try/cath para poder tratar erros, que não existia antes nas versões 1 e 2.0. Mas já tinha na linguagem C, já tinha na linguagem Java e em 1999 meio que travou o projeto. As promessas para versão 4.0 foram tão grandes que a versão nucna saía.

Somente em 2009, pulando a versão 4, surgiu o ECMAScript versão 5 que já ficou conhecido como ES5. Essa versão é a mais popular de todas, compatíveis com quase todos os navegadores atuais. Ela se tornou compatível com o JSON e também trouxe vários métodos para tratar arrays.

Em 2015 surgiu o ES6, que trouxe os declaradores let e const e também as Strings em Templates. 

A partir da versão 7, ele já começou a se chamar pelo ano ES2016 que trouxe algumas funcionalidades como por exemplo o operador de exponenciação. 

Depois veio o ES2017 que trouxe a compatibilidade com funções assíncronas e outras muitas coisas.

E a última versão até o momento, o ES2018, que trouxe novidades em expressões regulares as RegEx, e também trouxe a possibilidade de promises, de promessas. 

A evolução do JavaScript não foi só a evolução da linguagem. Várias ferramentas surgiram:

jQuery - Na verdadel, ele nem é um framework, ele é um conjunto de bicliotecas. Foi muito famoso durante muitos anos e agora deu uma caidinha, mas ele foi criado por uma galera da Mozilla. A biblioteca, que facilitava muito o uso de interatividade em JavaScript

Em 2009 surgiu o Angular, o Angular é criado e mantido pela Google, ele facilita muito a criação de aplicações Web, ele é uma linguagem menos imperativa, ele é uma linguagem mais declarativa, semelhante ao SQL para banco de dados. Traçando um pqeuano paralelo, existe uma briga entre o Angular 1, que é o tradicional AngularJS e o Angular(só Angular) que é da versão 2 pra cima. 

O Facebook também lançou sua famosa biblioteca, o React. Ele tem mais ou menos a mesma funcionalidade do Angular, mas ele tem algumas flexibilidades maiores, existe o React Native para a criação de aplicações e celular.

Em 2014 surgiu um framework que é muito poderoso que é o Vue.js. Ele foi criado por um ex-programador do Google, que segundo ele mesmo, já estava meio cansado de usar o Angular e criou uma versão bem melhor e chamou de Vue.js.

Outras ferramentas muito importantes, o Electron que hoje é mantido pela Github. Ele é especializado para a criação de interfaces gráficas, para programas de interface gráfica. O próprio Visual Studio Code da Microsoft foi feito em Electron. O programa que instala no wpp para acessar o WhatsApp também foi feito em Electron. O Discord também feito em Electron. O Slack também feito na mesma tecnologia.

Outra coisa que surgiu também baseado em JavaScript foi o Ionic, que é um SDK para poder criar aplicações para dispositivos móveis. O Ionic, por sinal que utiliza o próprio Node.js. Na verdade, vários dessas tecnologias usam o Node.js para rodas o JavaScript fora do navegador.
O IONIC se baseava também numa versão antiga de uma tecnologia chamada PhoneGap que hoje evoluiu, está na mão da Apache e se chama Cordova. 

*/