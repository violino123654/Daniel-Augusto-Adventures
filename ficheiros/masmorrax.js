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

//stats jogador :)))
let nivel = 1;

let forca = 0;
let destreza = 0;
let constituicao = 0;
let velocidade = 0;
let sorte = 0;

let armaduraDefesa = [2,3,1];
let armaduraStatUp = [0,0,0];
let armaduraQualStat = [0,0,0];
let armaduraResist = [0,0,0];
let armaduraQualResist = [0,0,0];
let armaduraMat = [1,1,1];
let armaduraPerfec = [0,0,0];

let xpProxNivel = 100;
// fim stats jogador :(((


function atualizarInimigos(){
    document.getElementById("inimigo").textContent = inimigo.nome;
    document.getElementById("inimigoVida").textContent = inimigoVida;
    document.getElementById("inimigoVidaMAX").textContent = inimigoVidaMax;
    document.getElementById("inimigoDano").textContent = inimigoDano;
    document.querySelector("img").src = inimigo.imagem;
}

function atualizarJogador(){
    document.getElementById("jogadorVida").textContent = jogadorVida;
    document.getElementById("jogadorVidaMAX").textContent = jogadorVidaMax;
    document.getElementById("danoAtaqueJGDR").textContent = 5 + forca;
}

function mudarInismigo(){
    inimigoID = Math.floor(Math.random() * inimigos.length);
    inimigo = inimigos.find(i => i.id === inimigoID);
    inimigoVidaMax = inimigo.vida;
    inimigoVida = inimigoVidaMax;
    inimigoDano = inimigo.dano;
    atualizarInimigos();
}

let danoDoAtaque;
let crit = 100-sorte;
function atacar(){
    danoDoAtaque = 5+(forca);
    if(Math.floor(Math.random() * crit) == 0){
        danoDoAtaque = danoDoAtaque*2;
    }

    document.getElementById("textoBatalha").innerHTML += "<br/>Daniel atacou "+inimigo.nome+" por "+danoDoAtaque+" de dano!\n";

    inimigoVida = inimigoVida - danoDoAtaque;
    if(inimigoVida<=0){
        inimigoVida=0;
    }
    else{
        danoDoAtaque = inimigoDano;
        if(Math.floor(Math.random() * 100) == 0){
            danoDoAtaque = danoDoAtaque*2;
        }

        jogadorVidaVida = jogadorVida - danoDoAtaque;
        if(jogadorVidaVida<0){
           jogadorVida=0;
        }
        document.getElementById("textoBatalha").innerHTML += "<br/>"+inimigo.nome+" atacou Daniel por "+danoDoAtaque+" de dano!\n";
    }

    if(inimigoVida==0){
        document.getElementById("textoBatalha").innerHTML += "<br/>Daniel Venceu!!";

        var stsBts = document.getElementsByClassName("butaoJGDR");
        for(let i = 0; i < stsBts.length; i++){
                stsBts[i].style.display = "none";
        }
    }
    else if(jogadorVida==0){
        document.getElementById("textoBatalha").innerHTML += "<br/>"+inimigo.nome+" Venceu!!";
    }

    atualizarInimigos();
}

atualizarInimigos();
atualizarJogador();