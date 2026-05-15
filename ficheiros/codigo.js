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
let pontosPorMeter = nivel - (forca+destreza+constituicao+velocidade+sorte);


const nivelDisplay = document.getElementById("nivel");

const forcaDisplay = document.getElementById("forca");
const destrezaDisplay = document.getElementById("destreza");
const constituicaoDisplay = document.getElementById("constituicao");
const velocidadeDisplay = document.getElementById("velocidade");
const sorteDisplay = document.getElementById("sorte");

const xpProxNivelDisplay = document.getElementById("xpProxNivel");
const pontosPorMeterDisplay = document.getElementById("pontosPorMeter");


function guardarProgresso() {
  document.cookie = "forca=" + forca;
  document.cookie = "destreza=" + destreza;
  document.cookie = "constituicao=" + constituicao;
  document.cookie = "velocidade=" + velocidade;
  document.cookie = "sorte=" + sorte;

  document.cookie = "xpProxNivel=" + xpProxNivel;
}

function atualizarStats(){
    nivelDisplay.textContent = nivel;

    forcaDisplay.textContent = forca;
    destrezaDisplay.textContent = destreza;
    constituicaoDisplay.textContent = constituicao;
    velocidadeDisplay.textContent = velocidade;
    sorteDisplay.textContent = sorte;

    xpProxNivelDisplay.textContent = xpProxNivel;
    pontosPorMeterDisplay.textContent = pontosPorMeter;

    var stsBts = document.getElementsByClassName("statsBotoes");
    for(let i = 0; i < stsBts.length; i++){
        if(pontosPorMeter == 0){
            stsBts[i].style.display = "none";
        }
        else{
            stsBts[i].style.display = "block";
        }
}
}
function aumentarForca(){
    if(pontosPorMeter>0){
        pontosPorMeter--;
        forca++;
    }
    atualizarStats();
}
function aumentarDestreza(){
    if(pontosPorMeter>0){
        pontosPorMeter--;
        destreza++;
    }
    atualizarStats();
}
function aumentarConstituicao(){
    if(pontosPorMeter>0){
        pontosPorMeter--;
        constituicao++;
    }
    atualizarStats();
}
function aumentarVelocidade(){
    if(pontosPorMeter>0){
        pontosPorMeter--;
        velocidade++;
    }
    atualizarStats();
}
function aumentarSorte(){
    if(pontosPorMeter>0){
        pontosPorMeter--;
        sorte++;
    }
    atualizarStats();
}

let Resistencia = "nada";
let Material = "nada";
let StatUp = "nada";
function atualizarArmadura(){
    for(let i = 0; i<3;i++){
        if(armaduraQualResist[i] == 0){
            Resistencia = "nada";
        }
        else if(armaduraQualResist[i] == 1){
            Resistencia = "fogo";
        }
        else if(armaduraQualResist[i] == 2){
            Resistencia = "gelo";
        }
        else if(armaduraQualResist[i] == 3){
            Resistencia = "veneno";
        }
        else if(armaduraQualResist[i] == 4){
            Resistencia = "magia";
        }

        if(armaduraMat[i] == 0){
            Material = "nada";
        }
        else if(armaduraMat[i] == 1){
            Material = "couro";
        }
        else if(armaduraMat[i] == 2){
            Material = "cobre";
        }
        else if(armaduraMat[i] == 3){
            Material = "prata";
        }
        else if(armaduraMat[i] == 4){
            Material = "ouro";
        }

        if(armaduraQualStat[i] == 0){
            StatUp = "nada";
        }
        else if(armaduraQualStat[i] == 1){
            StatUp = "forca";
        }
        else if(armaduraQualStat[i] == 2){
            StatUp = "destreza";
        }
        else if(armaduraQualStat[i] == 3){
            StatUp = "constituicao";
        }
        else if(armaduraQualStat[i] == 4){
            StatUp = "velocidade";
        }
        else if(armaduraQualStat[i] == 4){
            StatUp = "sorte";
        }

        if(i==0){
            document.getElementById("capacete").title = 'Capacete\nDefesa: '+armaduraDefesa[0]+'\n+'+armaduraStatUp[0]+' em '+StatUp+'\nResiste '+Resistencia+' por '+armaduraResist[0]+'%\nMaterial: '+Material+'\nPerfeicao: '+armaduraPerfec[0]+'%';
        }
        else if(i==1){
            document.getElementById("peitoral").title = 'Peitoral\nDefesa: '+armaduraDefesa[1]+'\n+'+armaduraStatUp[0]+' em '+StatUp+'\nResiste '+Resistencia+' por '+armaduraResist[1]+'%\nMaterial: '+Material+'\nPerfeicao: '+armaduraPerfec[1]+'%';
        }
        else if(i==2){
            document.getElementById("calcas").title = 'Calcas\nDefesa: '+armaduraDefesa[2]+'\n+'+armaduraStatUp[0]+' em '+StatUp+'\nResiste '+Resistencia+' por '+armaduraResist[2]+'%\nMaterial: '+Material+'\nPerfeicao: '+armaduraPerfec[2]+'%';
        }
    }
}
atualizarArmadura()




function mostrarStatus(){
    var st = document.getElementById("status");
    var inv = document.getElementById("inventario");
    var gr = document.getElementById("geral");

    st.style.display = "block";
    inv.style.display = "none";
    gr.style.display = "none";
}
function mostrarInventario(){
    var st = document.getElementById("status");
    var inv = document.getElementById("inventario");
    var gr = document.getElementById("geral");

    st.style.display = "none";
    inv.style.display = "block";
    gr.style.display = "none";
}
function mostrarGeral(){
    var st = document.getElementById("status");
    var inv = document.getElementById("inventario");
    var gr = document.getElementById("geral");

    st.style.display = "none";
    inv.style.display = "none";
    gr.style.display = "block";
}

function cenasIniciais(){
    var st = document.getElementById("status");
    var inv = document.getElementById("inventario");
    var gr = document.getElementById("geral");

    st.style.display = "block";
    inv.style.display = "none";
    gr.style.display = "none";
}

cenasIniciais();
atualizarStats();