//http://www.colabeduc.org/descricao/show/1344
//http://www.colabeduc.org/projeto/show/1554
//Video do Projeto Parte 2!!
//https://youtu.be/uKzCMMDjFbo

//VIDEO FINAL DETALHANDO AS COISAS:
//https://youtu.be/WWYp8uKoMbE

//Video resumido da explicação:(8 minutos)
//https://youtu.be/yIWnpZQ_aOo

//Video explicando os menus:(DETALHANDO 40 MINUTOS)
//https://youtu.be/zRs3chFlEoo
var voluX=545
  
var score = 0;
var vidas = 3;
var gameOverr = false
var numer=0

const enemyy = { hP:70,wP:70,frameX:0,frameY:0,cutX:270,cutY:0};
var frames=0;
var numerF = 0;
var plX = 300;
var plY = 340;

var enemyX=850;
var enemyY=0;
var eSpeed=4;
var velE=0.08;
var framesE=0;

var baseX =0;
var baseY =150;

var tirosX = []
var tirosY = []
var hitBoxX=0;
var hitBoxY=0;
var tirosW=48;
var tirosH=14;
var qtdTiros=1;
var tiroVisivel=false

var jogoRodando = true;
var gameover = false;

var tela = 0
var ultTela = 0
var subTela = 0

var isMobile = window.orientation > -1;

var canhoto=false;
var mudo=false;

var carregados=0;
var carregou=false;

var nT=0

function preload(){
  soundFormats('mp3', 'ogg');
  pontos=loadSound('sons/pontosF.ogg')
  playerV=loadJSON('dataa.json')
  musica=loadJSON('musica.json')
}
function setup(){

  sounds = loadSound('sons/sounds.mp3',loadGGG);
  oof = loadSound('sons/ooff.mp3',loadGGG)
  cenario=loadImage('imagens/cenario.png',loadGGG)
  spriteEx=loadImage('imagens/spriteExu.png',loadGGG)
  spriteOx=loadImage('imagens/spriteOxo.png',loadGGG)
  spriteOg=loadImage('imagens/spriteOgu.png',loadGGG)
  spritePob=loadImage('imagens/spritePob.png',loadGGG)
  spriteEne=loadImage('imagens/SpriteEnem.png',loadGGG)
  fundos=loadImage('imagens/fundos.png',loadGGG)
  fotoMinha=loadImage('imagens/FotoMinha.png',loadGGG)
  fotoProf=loadImage("imagens/fotoProf.png",loadGGG)
  leagueGothic = loadFont('LeagueGothic.ttf',loadGGG);
  edo=loadFont("edo.ttf",loadGGG)
  fontee=loadFont("ZonaPro-Bold.otf",loadGGG)
  
  
  createCanvas(800, 400);
  rectMode(CENTER);
  textAlign(CENTER);
  art();
  ranCC()
  musicaR()
}

function draw() {

  if(carregou==true){
    
    if(floor(pontos.currentTime())>musica[nT].fim){
      pontos.stop()
      musicaR()
    }

       
  bg()
  switchTelas()
  if(gameover==true){
    gameOver();
  }
}else{
  loadingBar()
}
}
//Tela de Loading
function loadGGG(){
  carregados++
  if(carregados==12)carregou=true
}
function musicaR(){
    nT=random([0,1,2,3])
  
    pontos.play()
    pontos.jump(musica[nT].inicio)

}

//Condição pra iniciar o jogo
function art(){
  plX = 300;
  plY = 340;
  vidas=3;
  score=0;
  enemyX=810;
  enemyY=random(190,370)
  gameover=false
  
}

//Pause
function gamePause(){
  
  if(jogoRodando==true){
    jogoRodando=false;
      noLoop()
    }else{
      jogoRodando=true;
      loop()
    }
}

//Funcionamento do Inimigo
function enemy(){
     if(score>=5){
       enemyX-=eSpeed+(score/5)
       
     }else
        enemyX-=eSpeed;

    if(enemyX<plX+playerV[numer].wP&&enemyX+enemyy.wP>plX &&
    enemyY<plY+playerV[numer].hP&&enemyy.hP+enemyY>plY||
    enemyX<hitBoxX+tirosW&&enemyX+enemyy.wP>hitBoxX &&
    enemyY<hitBoxY+tirosH&&enemyy.hP+enemyY>hitBoxY&&tiroVisivel==true){score=score+1;enemyX=850; enemyY=random(150,370); oof.play()}else
    if(enemyX<=(baseX+90)){
      vidas=vidas-1;enemyX=850; enemyY=random(150,370);sounds.play();sounds.stop(0.4)
    }
 
}
function mouseClicked(){
 //Tela Inicial para Tela de instruções - Tela 0 -> Tela 2
  if (mouseX>270&&mouseX<480&&mouseY>180&&mouseY<240&&tela==0){  
   instrucoes();
  subTela=0
    sounds.play();sounds.jump(0.7)
    
    ranCC()
  }else
  //+-105X +-30Y  -> Y=350 
  //Tela de inruções para Fase - Tela 2 -> Tela 1
  if (mouseX>270&&mouseX<480&&mouseY>320&&mouseY<380&&tela==2){
   tela=1;
  sounds.play();sounds.jump(0.7)}
else
  //Gameover para tela inicial - Tela 3 -> Tela 0
  if (mouseX>270&&mouseX<480&&mouseY>180&&mouseY<240&&tela==3){
   art()
   telaInicial()
    sounds.play();sounds.jump(0.7)
  }
  if(tela==2){
    if(colisao(588.5,192.5,mouseX,mouseY)&&subTela<2){subTela++;sounds.play();sounds.jump(0.7)}
    if(colisao(158.5,192.5,mouseX,mouseY)&&subTela>0){subTela--;sounds.play();sounds.jump(0.7);if(subTela==0)ranCC()}
  }
  //Fase 1 para Tela de Pause a partir do botão na fase 1
  //Tela 1 -> tela 4
  if (colisao(755,35,mouseX,mouseY)&&tela==1){
   telaPause()
    sounds.play();sounds.jump(0.7)
    noLoop()
  }else
  //Tela de Opções para tela anterior
  //Tela 5-> tela anterior
  if (colisao(755,100,mouseX,mouseY)&&tela==5){
    if(ultTela==4){
      telaPause()
      sounds.play();sounds.jump(0.7)
    }else if(ultTela==0){
      telaInicial()
      sounds.play();sounds.jump(0.7)
    }else if(ultTela==2){
      instrucoes()
    sounds.play();sounds.jump(0.7)
      
    }
  }else
  //Tela inicial - Tela de Opcoes - Tela 0 -> Tela 5
  if (mouseX>270&&mouseX<480&&mouseY>250&&mouseY<310&&tela==0){
   ultTela=tela;
   menuOpcoes();
  sounds.play();sounds.jump(0.7);
    
  }else
  //Tela inicial - Créditos - Tela 0 -> Tela 7
  if (mouseX>270&&mouseX<480&&mouseY>320&&mouseY<380&&tela==0){    
    creditos()
    sounds.play();sounds.jump(0.7)
  }
  else
  //Créditos - Tela 0
  if (colisao(755,100,mouseX,mouseY)&&tela==7){  
   sounds.play();sounds.jump(0.7)
    telaInicial();
  }else
  //Tela de inruções para  Tela Inicial- Tela 2 -> Tela 0
  if (colisao(755,100,mouseX,mouseY)&&tela==2){  
   subTela=0
    telaInicial();
    sounds.play();sounds.jump(0.7)
  }else
  //Tela de Personagens para  Opções - Tela 6 -> Tela 5
  if (colisao(755,100,mouseX,mouseY)&&tela==6){ 
   sounds.play();sounds.jump(0.7)
    menuOpcoes();
  }
  //Tela de pause para retornar ao jogo - Tela 4 -> Tela 0+Game over
  if (mouseX>270&&mouseX<480&&mouseY>180&&mouseY<240&&tela==4){
    sounds.play();sounds.jump(0.7)
    tela=1;
    loop()
  }
    //Tela de pause para opções - Tela 4 -> tela 5
  if (mouseX>270&&mouseX<480&&mouseY>250&&mouseY<310&&tela==4){
   ultTela=tela;
   menuOpcoes();
    sounds.play();sounds.jump(0.7)
  }
  //Tela 4 para sair - Tela 4 -> game over
  if (mouseX>270&&mouseX<480&&mouseY>320&&mouseY<380&&tela==4){
   gameOver();
    sounds.play();sounds.jump(0.7)
  }
  //Tela 5 -> Tela 6
  
  if (mouseX>102.5&&mouseX<312.5&&mouseY>310&&mouseY<370&&tela==5){ 
   telaPersonagens();
  sounds.play();sounds.jump(0.7)
  }
  if(canhoto==true&&colisao(280,180,mouseX,mouseY)&&tela==5){
    canhoto=false;
    
      
    }else if(canhoto==false&&colisao(370,180,mouseX,mouseY)&&tela==5){
      canhoto=true
      
    }
  //Botão para Tela cheia no mobile
  if(isMobile == true){
  if(colisao(690,35,mouseX,mouseY)&&tela==1||
     colisao(540,125,mouseX,mouseY)&&tela==2&&subTela==2||
    colisao(755,35,mouseX,mouseY)&&tela==0||
    colisao(755,35,mouseX,mouseY)&&tela==2||
    colisao(690,35,mouseX,mouseY)&&tela==3||
    colisao(690,35,mouseX,mouseY)&&tela==4||
    colisao(690,35,mouseX,mouseY)&&tela==5||
    colisao(690,35,mouseX,mouseY)&&tela==6||
    colisao(755,35,mouseX,mouseY)&&tela==7){sounds.play();sounds.jump(0.7)
    //fs();
                                           }
  if(colisao(517.5,185,mouseX,mouseY)&&tela==2&&subTela==2){
    ultTela=tela;
   menuOpcoes();
      sounds.play();sounds.jump(0.7)
  }
  }else
  if(colisao(517.5,145,mouseX,mouseY)&&tela==2&&subTela==2){
    ultTela=tela;
   menuOpcoes();
    sounds.play();sounds.jump(0.7)
  }
    
  if(colisao(340,180,mouseX,mouseY)&&tela==5&&isMobile == false){
    //fs();
  sounds.play();sounds.jump(0.7)
  }
  if(colisao(340,235,mouseX,mouseY)&&tela==5&&isMobile == true){
    //fs();
  sounds.play();sounds.jump(0.7)
  }
  if(colisao(80,120,mouseX,mouseY)&&tela==6){
    numerF=0;sounds.play();sounds.jump(0.7)
  }  
  if(colisao(80,190,mouseX,mouseY)&&tela==6){
    numerF=1;sounds.play();sounds.jump(0.7)
  }
  if(colisao(80,260,mouseX,mouseY)&&tela==6){
    numerF=2; sounds.play();sounds.jump(0.7)
  }else
  if(colisao(80,330,mouseX,mouseY)&&tela==6){
    numerF=3; sounds.play();sounds.jump(0.7)
  }
  if(mudo==true&&colisao(220,107.5,mouseX,mouseY)&&tela==5)
    mudo=false;

    else if(mudo==false&&colisao(310,107.5,mouseX,mouseY)&&tela==5) mudo=true


  if(mudo==true){sounds.setVolume(0);pontos.setVolume(0);oof.setVolume(0)}
  else {sounds.setVolume(1);pontos.setVolume(1);oof.setVolume(1)}
  //Confirmar personagem
//219,327 
if(mouseX>114&&mouseX<324&&mouseY>197&&mouseY<357&&tela==6){
     numer=numerF;sounds.play();sounds.jump(0.7)
  }

}

//Jogo através das setas/WASD
function keyPressed(){
  if(keyIsDown(27)){
    if(tela==1){
      telaPause()
      noLoop()
    }else
    if(tela==2)
      telaInicial()
    else
      if(tela==3){
         art()
       telaInicial()
    }else
      if(tela==5){
        if(ultTela==4)
      telaPause()
    if(ultTela==0)
      telaInicial()
    }else
      if(tela==6)
        menuOpcoes()
    else
      if(tela==7)
        telaInicial()
      
  }
    
  if(keyIsDown(LEFT_ARROW)||keyIsDown(65))
    plX-=5;
  if(keyIsDown(RIGHT_ARROW)||keyIsDown(68))
    plX+=5;
  if(keyIsDown(UP_ARROW)||keyIsDown(87))
    plY-=5;
  if(keyIsDown(DOWN_ARROW)||keyIsDown(83))
    plY+=5;
  if(keyIsDown(32)&&playerV[numer].bow==true) {
    tirosX[tirosX.length]=plX+25;
    tirosY[tirosY.length]=plY-25;
    tiroVisivel=true
  }
    }

//Gamepad para o jogo no celular
function gamepad(){
if(tela==1){
  gamePad()
  
  if(canhoto==false){
    if (touches.length>0) {

      if(colisao(650,325,touches[0].x, touches[0].y))
           plX-=5;
      if(colisao(750,325,touches[0].x, touches[0].y))
           plX+=5;
      if (colisao(700,275,touches[0].x, touches[0].y))
        plY-=5;
      if(colisao(700,375,touches[0].x,touches[0].y))
        plY+=5;
      if(colisao(100,300,touches[0].x,touches[0].y)&&playerV[numer].bow==true){
        tirosX[tirosX.length]=plX+25;

    tirosY[tirosY.length]=plY-25;

    tiroVisivel=true
    
}
}
     
}else
  
  if(canhoto==true){
    if (touches.length>0) {

      if(colisao(70,325,touches[0].x, touches[0].y))
           plX-=5;
      if(colisao(170,325,touches[0].x, touches[0].y))
           plX+=5;
      if (colisao(120,275,touches[0].x, touches[0].y))
        plY-=5;
      if(colisao(120,375,touches[0].x,touches[0].y))
        plY+=5;
 if(colisao(680,300,touches[0].x,touches[0].y)&&playerV[numer].bow==true){

        tirosX[tirosX.length]=plX+25;

    tirosY[tirosY.length]=plY-25;

    tiroVisivel=true
}
}
    
  }
}
}

//Colisão dos botões na tela do jogo
//seja de menu ou do gamepad
function colisao(x1,y1,x2,y2) {
          if(x1 > x2 + 48)
            return false;
          if(y1 > y2 + 48)
            return false;
          if(x1 + 48 < x2)
            return false;
          if(y1 + 48 < y2)
            return false;
          return true;
  }
//Limites que o jogador pode ir
function limites(){
  if(plY<150)
    plY=150;
  
  if(plY>370)
     plY=365;
     
  if(plX<90)
    plX=90;
  
  if(plX>785)
    plX=785;
}
function keyReleased(){
    playerV[numer].moving=false
    
  }
function touchEnded(){
    playerV[numer].moving=false
    
  }
