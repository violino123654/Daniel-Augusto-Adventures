const inimigos = [
    {id: 0, nome: "Slime", vida: 6, dano: 3, imagem: "Imagens/Inimigos/slime.png", xp: 2},
    {id: 1, nome: "Goblin", vida: 15, dano: 10, imagem: "Imagens/Inimigos/goblin.png", xp: 5},
    {id: 2, nome: "Esqueleto", vida: 10, dano: 7, imagem: "Imagens/Inimigos/esqueleto.png", xp: 4}
];


let inimigoID = Math.floor(Math.random() * inimigos.length);
let inimigo = inimigos.find(i => i.id === inimigoID);

let inimigoVidaMax = inimigo.vida;
let inimigoVida = inimigoVidaMax;
let inimigoDano = inimigo.dano;
let inimigoXP = inimigo.xp;

let sala = 1;


//stats jogador :)))
let jogadorVidaMax = 100;
let jogadorVida = jogadorVidaMax;

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

let totalDefesa = armaduraDefesa[0] + armaduraDefesa[1] + armaduraDefesa[2];

let danoDoAtaque;
let crit = 100;
// fim stats jogador :(((

var stsBts = document.getElementById("butaoJGDR");
var mtrBts = document.getElementById("depoisDeMTR");
mtrBts.style.display = "none";


function getCookieValue(nome, ca, padrao = 0) {
  const cookie = ca.find(c => c.trim().startsWith(nome + "="));
  return cookie ? parseInt(cookie.split('=')[1], 10) || padrao : padrao;
}
function carregarProgresso() {
  if(typeof localStorage !== "undefined" && localStorage.length > 0){
    nivel = parseInt(localStorage.getItem("nivel"), 10) || nivel;
    forca = parseInt(localStorage.getItem("forca"), 10) || forca;
    destreza = parseInt(localStorage.getItem("destreza"), 10) || destreza;
    constituicao = parseInt(localStorage.getItem("constituicao"), 10) || constituicao;
    velocidade = parseInt(localStorage.getItem("velocidade"), 10) || velocidade;
    sorte = parseInt(localStorage.getItem("sorte"), 10) || sorte;
    xpProxNivel = parseInt(localStorage.getItem("xpProxNivel"), 10) || xpProxNivel;
  }
  else{
    const decodedCookie = decodeURIComponent(document.cookie || "");
    const ca = decodedCookie.split(';');
    nivel = getCookieValue("nivel", ca);
    forca = getCookieValue("forca", ca);
    destreza = getCookieValue("destreza", ca);
    constituicao = getCookieValue("constituicao", ca);
    velocidade = getCookieValue("velocidade", ca);
    sorte = getCookieValue("sorte", ca);
    xpProxNivel = getCookieValue("xpProxNivel", ca, 100);
  }
  crit = 100 - sorte;
}
function salvarProgresso() {
  if(typeof localStorage !== "undefined"){
    localStorage.setItem("nivel", nivel.toString());
    localStorage.setItem("forca", forca.toString());
    localStorage.setItem("destreza", destreza.toString());
    localStorage.setItem("constituicao", constituicao.toString());
    localStorage.setItem("velocidade", velocidade.toString());
    localStorage.setItem("sorte", sorte.toString());
    localStorage.setItem("xpProxNivel", xpProxNivel.toString());
  }
  else{
    console.warn("LocalStorage não está disponível no navegador.");
  }
}


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
    document.getElementById("danoFlechaJGDR").textContent = 2 + destreza;
    document.getElementById("danoMagiaJGDR").textContent = Math.floor(2/(forca+destreza)+1);
    document.getElementById("nivel").textContent = nivel;
}

function mudarInismigo(){
    inimigoID = Math.floor(Math.random() * inimigos.length);
    inimigo = inimigos.find(i => i.id === inimigoID);
    inimigoVidaMax = inimigo.vida;
    inimigoVida = inimigoVidaMax;
    inimigoDano = inimigo.dano;
    inimigoXP = inimigo.xp;
    document.getElementById("imagemInimigo").style.filter = "grayscale(0%)";
    document.getElementById("textoBatalha").innerHTML = "";
    atualizarInimigos();
}

function morteInimigo(){
  document.getElementById("imagemInimigo").style.filter = "grayscale(100%)";
  xpProxNivel -= inimigoXP*sala;
  document.getElementById("xpGanho").textContent = inimigoXP*sala;
  if (xpProxNivel <= 0){
    nivel++;
    xpProxNivel = 100 * nivel;
  }
}

function atacar(){
    inimigoVida = inimigoVida - danoDoAtaque;
    if(inimigoVida<=0){
        inimigoVida=0;
    }
    else{
        danoDoAtaque = inimigoDano;//ataque inimigo

        danoDoAtaque = danoDoAtaque - Math.floor(totalDefesa/3);
        if(danoDoAtaque<0){
            danoDoAtaque=1;
        }

        if(Math.floor(Math.random() * 100) == 0){
            danoDoAtaque = danoDoAtaque*2;
            document.getElementById("textoBatalha").innerHTML += "<br/>Critico!\n";
        }

        jogadorVida = jogadorVida - danoDoAtaque;
        if(jogadorVida<0){
           jogadorVida=0;
        }
        document.getElementById("textoBatalha").innerHTML += "<br/>"+inimigo.nome+" atacou Daniel por "+danoDoAtaque+" de dano!\n";
    }

    if(inimigoVida==0){ //caso inimigo morra
        document.getElementById("textoBatalha").innerHTML += "<br/>Daniel Venceu!!";
        morteInimigo();

        stsBts.style.display = "none";
        mtrBts.style.display = "block";
    }
    else if(jogadorVida==0){//caso jogador morra
        document.getElementById("textoBatalha").innerHTML += "<br/>"+inimigo.nome+" Venceu!!";
        stsBts.style.display = "none";
        var voltar = document.getElementById("voltar");
        voltar.style.display = "block";
    }

    atualizarInimigos();
    atualizarJogador();
}

function usarSoco(){
    danoDoAtaque = 5+(forca); //ataque jogador
    if(Math.floor(Math.random() * crit) == 0){
        danoDoAtaque = danoDoAtaque*2;
        document.getElementById("textoBatalha").innerHTML += "<br/>Critico!\n";
    }

    document.getElementById("textoBatalha").innerHTML += "<br/>Daniel deu um soco "+inimigo.nome+" por "+danoDoAtaque+" de dano!\n";
    atacar();
}

function usarTiro(){
    danoDoAtaque = 2+(destreza); //ataque jogador
    if(Math.floor(Math.random() * (crit-20)) == 0){
        danoDoAtaque = danoDoAtaque*2;
        document.getElementById("textoBatalha").innerHTML += "<br/>Critico!\n";
    }

    document.getElementById("textoBatalha").innerHTML += "<br/>Daniel disparou no "+inimigo.nome+" por "+danoDoAtaque+" de dano!\n";
    atacar();
}

function usarMagia(){
    danoDoAtaque = Math.floor(2/(forca + destreza)+1); //ataque jogador
    if(Math.floor(Math.random() * (crit-20)) == 0){
        danoDoAtaque = danoDoAtaque*2;
        document.getElementById("textoBatalha").innerHTML += "<br/>Critico!\n";
    }

    document.getElementById("textoBatalha").innerHTML += "<br/>Daniel disparou no "+inimigo.nome+" por "+danoDoAtaque+" de dano!\n";
    atacar();
}

function continuar(){
    mudarInismigo();
    stsBts.style.display = "block";
    mtrBts.style.display = "none";
    atualizarInimigos();
    sala++;
}

function voltar(){
    salvarProgresso();
    window.location.href = "jogo.html";
}

carregarProgresso();

atualizarInimigos();
atualizarJogador();