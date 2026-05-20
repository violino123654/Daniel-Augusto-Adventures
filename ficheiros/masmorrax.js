const inimigos = [
    {id: 0, nome: "Slime", vida: 5, dano: 5, imagem: "Imagens/Inimigos/slime.png"},
    {id: 1, nome: "Goblin", vida: 15, dano: 10, imagem: "Imagens/Inimigos/goblin.png"}
];


let inimigoID = Math.floor(Math.random() * inimigos.length);
let inimigo = inimigos.find(i => i.id === inimigoID);

let inimigoVidaMax = inimigo.vida;
let inimigoVida = inimigoVidaMax;
let inimigoDano = inimigo.dano;

let jogadorVidaMax = 100;
let jogadorVida = jogadorVidaMax;


document.getElementById("inimigo").textContent = inimigo.nome;
document.getElementById("inimigoVida").textContent = inimigoVida;
document.getElementById("inimigoVidaMAX").textContent = inimigoVidaMax;
document.getElementById("inimigoDano").textContent = inimigoDano;
document.querySelector("img").src = inimigo.imagem;