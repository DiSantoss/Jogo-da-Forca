// abaixo palavras que serao usadas no jogo, para serem descobertas.
let palavras = ["Futebol","Flamengo","Fluminense","Ivete Sangalo","Diego","Raul","Maria","Aparecido"];

// para jogar precisamos de uma palavra por vez e é mais interessante que sera aleatória. entao ele cricou uma variavel chamada palavra para armazenar uma dessas palavras do array palavras.
// para selecionar de forma aleatoria ele usou o metodo random do objeto math. > math.random()
// ele observa para quem é novo em js a linguagem possui objetos e metodos para realizarmos determinadas operações. Math é exemplo de objeto e random é um método desse objeto.
// o retorno desse metodo é um valor entre 0 e 1, colocando ele no console dá simplesmente esse valor 0.24801162951842604 nesse exato momento em que escrevia. sempre da um valor entre 0 e 1.
// entao é necessario outro metodo para que o retorno seja de 0 ao tamanho do array de no caso > palavras.
// esse outro metodo é o Math.floor que retorna 0 sendo dessa forma "Math.floor(Math.random())"
// oque math.floor faz é pegar o valor inteiro do numero. entao multiplicando esse valor random por 10 retornara um valor quebrado que dentro de math.floor retornara um valor inteiro.
// Math.floor(Math.random()* 10) ou seja sempre retornara um valor aleatorio. 
// para pegar uma posicao do array basta escrever e depois colocar o numero da posicao ou seja palavras[5].
//  entao para escrevermos palavras aleatorias desse aray escrevemos
// let palavra = palavras[Math.floor(Math.random() * palavras.length)]; onde multiplicamos essas instruções, esses métodos pelo tamanho do array.

let palavra = palavras[Math.floor(Math.random() * palavras.length)];

// alem dessas variaveis precisamos criar variaveis para armazenar, o numero de chances e o numero de acertos.
// ou seja 6 partes do corpo e o numero de acertos que começa com 0.

let chances = 6;
let acertos = 0;

// tambem criamos uma variavel chamada imagem que armazena a imagem na forca. que tem que carregar a cada tentativa do usuaio, com o tempo ficara mais claro.

let imagem = 0;

// e teremos tbm varios laços for para percorrer as letras da palavra.

let posição;

// eai criamos um laço for que vai de 0 até o tamanho da palavra selecionada.
// 


for (posicao = 0; posicao < palavra.length; posicao++) {
    let span = document.createElement("span");
    span.setAttribute('id', posicao);

    let div = document.getElementById("palavra");
    div.appendChild(span);
}