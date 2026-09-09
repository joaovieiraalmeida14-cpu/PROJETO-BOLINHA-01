//Projeto bolinha - 01
let xBolinha = 200;
let yBolinha = 200;
let raio = 15;
let xVelocidade = 3;


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  mostrarBolinha();
  movimentaBolinha();
  verificaColisao();
}
//----------função mostrar bolinha
function mostrarBolinha(){
  circle (xBolinha,yBolinha,raio);
}

//----Movimenta Bolinha-------
function movimentaBolinha(){
  xBolinha += xVelocidade;
}

//-------Verifica colisao---
function verificaColisao(){
  if(xBolinha > width || xBolinha < 0){
    xVelocidade *= -1;
  }
}