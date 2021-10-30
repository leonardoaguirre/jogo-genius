let order = [];
let clickedOrder = [];
let score = 0;

//0=verde 1=vermelho 2= amarelo 3=azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//cria a ordem aleatoria das cores
let geraOrdem = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for (let i in order) {
        let elementColor = createElementColor(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//acende e mostra a proxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 500);
    setTimeout(() => {
        element.classList.remove('selected');
    }, number - 250);
}

//funcao que verifica se a cor escolhida é a correta
let checkOrder = () => {
    for (let i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if (clickedOrder.length == order.length) {
        alert(`Pontuacao: ${score} \n Voce acertou... Iniciando o proximo nivel`);
        nextLevel();
    }
}

//funcao de click de botao
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createElementColor(color).classList.add('selected');

    setTimeout(() => {
        createElementColor(color).classList.remove('selected');
        checkOrder();
    }, 250)
}

//funcao que retorna a cor
let createElementColor = (color) => {
    switch (color) {
        case 0:
            return green;
        case 1:
            return red;
        case 2:
            return yellow;
        case 3:
            return blue;
    }
}

//funcao que gera o proximo level de dificuldade
let nextLevel = () => {
    score++;
    geraOrdem();
}

//funcao de fim de jogo caso o jogador erre a ordem
let gameOver = () => {
    alert(`Pontuacao: ${score} \n Voce perdeu o jogo`);
    order = [];
    clickedOrder = [];

    playGame();
}

//funcao que inicia o jogo e da as boas vindas
let playGame = () => {
    alert('Bem vindo ao genius, iniciando novo jogo');
    score = 0;
    nextLevel();
}

//eventos de click para cada cor
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

//inicia o jogo
playGame();