//tela icicial - tela = 0
function telaInicial(){
  
  tela=0
  background(0)
playerVar()
  textFont(fontee)
  
  
  //Iniciar
  push()
  rectMode(CORNER)
  gameBTN(270,180,210,60,playerV[numer].cor2,"Iniciar",270,217,28);
  push()
  rectMode(CORNER)
  translate(126,46)
  scale(0.7)
  startIcon(450,210,playerV[numer].cor2)
  pop()
  pop()
  //Opções
  push()
  rectMode(CORNER)
  gameBTN(270,250,210,60,playerV[numer].cor2,"Opções",270,287,28);
  push()
  rectMode(CORNER)
  translate(126,66.5)
  scale(0.7)
  gearIcon(450,280,playerV[numer].cor2)
  pop()
  pop()
  //Créditos
  push()
  rectMode(CORNER)
  gameBTN(270,320,210,60,playerV[numer].cor2,"Créditos",270,357,28);
  push()
  rectMode(CORNER)
  translate(126,185)
  scale(0.7)
  perfilIcon(455,210,playerV[numer].cor2)
  pop()
  pop()
  
  push()
  strokeWeight(5)
  stroke(playerV[numer].cor6)
  fill("#FFF")
  textFont(edo)
  textSize(100);
  text(playerV[numer].name, 375 ,100);
  pop()
  push()
  stroke(playerV[numer].cor6)
  strokeWeight(4)
  fill("#fff")
  textFont(fontee)
  textSize(30)
  text("NÃO É DIABO",375,145.5)
  text("NÃO É DIABO",375,144)
  
  pop()
  
  if(isMobile==true){
    push()
    rectMode(CORNER)
        gameBTN(722.5,12.5,playerV[numer].cor2);
        fsIcon(722.5,12.5,playerV[numer].cor2)
    pop()
      }
}
  //fase 1 - tela = 1
  function phase1() {
    tela=1
      limites();
      keyPressed()
        enemy();

      if(vidas==0){
    gameover=true;
      
    }
      image(cenario,0,0,800,400)
      noFill();
      stroke(playerV[numer].cor6);
      strokeWeight(6);
      rect(width/2, height/2, width, height);
      personagem();
        tiros()
      strokeWeight(3);
      stroke('#f03c2b00');
    noFill()
    rect(enemyX,enemyY,enemyy.wP,enemyy.hP);
    eFrame()
    switch(framesE){
    case 1:
      player.frameX=0
      break
    case 2:
      enemyy.frameX=enemyy.cutX*1
      break
    case 3:
      enemyy.frameX=enemyy.cutX*2
      break
    case 4:
      enemyy.frameX=enemyy.cutX*3
  }
    image(spriteEne,enemyX-enemyy.hP/4,enemyY-enemyy.wP/2,enemyy.hP,enemyy.wP,enemyy.cutX*floor(framesE),enemyy.frameY,enemyy.cutX,enemyy.cutY)
    push()
      stroke(playerV[numer].cor6)
      strokeWeight(3)
      fill("#fff");
      textSize(20);
      text("Vidas",85,28);
      for (x = 45; x < vidas*50; x += 40) {
      coracao(x,37.5,20)
    }
      textSize(22)
      text("Pontos: "+score,240,40);
    pop()
      if(isMobile == true){
        gamepad();
        push()
        rectMode(CORNER)
        gameBTN(657.5,12.5,playerV[numer].cor2);
        fsIcon(657.5,12.5,playerV[numer].cor2)
        pop()
        
  }   
      push()
      rectMode(CORNER)
      gameBTN(743,12,playerV[numer].cor2)
      menuIcon(743,12,playerV[numer].cor2)
      pop()
    
  }  
//Menu de Instruções - Tela = 2
  function instrucoes(){
    tela=2
    background(0)
playerVar()
    textFont(fontee)
    push()
    rectMode(CORNER)
    gameBTN(270,320,210,60,playerV[numer].cor2,"Iniciar",270,357,28);
    pop()
    stroke(playerV[numer].cor6)
    strokeWeight(4)
    fill("#fff")
    
    
    textSize(40);
    text("TUTORIAL", 370 ,55.5)
    text("TUTORIAL", 370 ,54);
    push()
    rectMode(CORNER)
    gameBTN(732.5,77.5,playerV[numer].cor2)
    xicon(732.5,77.5,playerV[numer].cor2)
    pop()
    if(isMobile == true){
      push()
      rectMode(CORNER)
    gameBTN(722.5,12.5,playerV[numer].cor2);
    fsIcon(722.5,12.5,playerV[numer].cor2)
      pop()
    }
    push()
          stroke(playerV[numer].cor6+"BF");
      fill(playerV[numer].cor3+"BF")
      
      rect(375,188.5,437.5,252,5)
      switch(subTela){
        case 0:
          push()
          translate(234,55)
          noStroke()
          rect(140,190,410,115,10)
          drawingContext.clip();
          translate(-234,-56)
          image(cenario,170,190,410,115)
          pop()
          push()
          rectMode(CORNER)
        gameBTN(566,172.5)
      dirIcon("RGT",566,172.5)
          pop()
        push()
        stroke(playerV[numer].cor6)
        fill("#fff")
        
        textSize(26)
        text("OBJETIVO DO JOGO", 375,91.5)
        text("OBJETIVO DO JOGO", 375,90)
        textSize(16)
        textAlign(LEFT)
    text("Seu objetivo é ajudar os Orixás e Entidades a impe-\ndir os inimigos que alcancem e tentem acabar com\no terreiro, local sagrado para as religiões de matriz\nafricana como o Candomblé e Umbanda.", 170,116.5)
    
    text("Seu objetivo é ajudar os Orixás e Entidades a impe-\ndir os inimigos que alcancem e tentem acabar com\no terreiro, local sagrado para as religiões de matriz\nafricana como o Candomblé e Umbanda.", 170,115)
    pop()
          push()
          
      image(imageF,210,230,50,50,PF,540,270,270)
        image(spriteEne,ExC,EyC,50,50,EF,0,270,270)
    pop()
          break
        case 1:
        push()
          rectMode(CORNER)
        gameBTN(566,172.5)
      dirIcon("RGT",566,172.5)
        gameBTN(136,172.5)
      dirIcon("LFT",136,172.5)
          pop()
        stroke(playerV[numer].cor6)  
        fill("#fff")
        textSize(26)
        text("CONTROLES DO JOGO", 375,91.5)
        text("CONTROLES DO JOGO", 375,90)
          
          if(isMobile == true){  
  textSize(18)
    text("Você pode se mover com o controle\n no canto da tela",375,116.5)
    text("Para melhorar a experiência do jogo\n deixe o celular na horizontal",375,277.5)
            if(playerV[numer].bow==true){
              textSize(16)
              if(canhoto==false){
            text("e atirar ao apertar nesse botão",320.5,176.5)}
              else if(canhoto==true){
            text("e atirar ao apertar nesse botão",427.5,176.5)}
            } 
            push()
            scale(0.7)
            if(canhoto==false){
            translate(10,-35)
            gamePad()
            }
            else if(canhoto==true){
            translate(240,-35)
            gamePad()  
            }
            
             
            pop()
    
    }else{
      
      textSize(18)
      text("Você pode se mover com\nas setas do teclado ou WASD",375,116.5)
      text("Você pode se mover com\nas setas do teclado ou WASD",375,115)
      if(playerV[numer].num==1){
text("e atirar com o espaço",375,236.5)
text("e atirar com o espaço",375,235)
      push()
        scale(0.8)
      translate(95,90)
        botaoG(375,255,200,60,"",0,4)
      espaco(273.5,225)
        pop()
      }
      
      scale(0.8)
      translate(95,90)
      //Down
      //X= 195-172.5= 22.5 --- Y= 215-195= 120
      push()
      rectMode(CORNER)
      gameBTN(159.5,195)
      dirIcon("UP",159.5,195)
      //Up
      gameBTN(159.5,245)
      dirIcon("DWN",159.5,245)
      //Left
      gameBTN(109.5,245)
      //133-110.5=22.5 Y 265-245=20
      dirIcon("LFT",109.5,245)
      //Right
      gameBTN(209.5,245)
      dirIcon("RGT",209.5,245)
      pop()
      push()
      noStroke()
      textFont(fontee)
      push()
      rectMode(CORNER)
      gameBTN(535,195,48,50.5,"#B5B6B4","W",535,228,28)      
      gameBTN(535,245,48,50.5,"#B5B6B4","S",535,278,28)
      gameBTN(485,245,48,50.5,"#B5B6B4","A",485,278,28)
      gameBTN(585,245,48,50.5,"#B5B6B4","D",585,278,28)
      pop()
      
      
      pop()
    }
          
          break
        case 2:
        push()
          stroke(playerV[numer].cor6)
          fill("#fff")
        textSize(26)
        text("EXTRAS", 375,91.5)
        text("EXTRAS", 375,90)
        textSize(18)
        push()
        rectMode(CORNER)
        gameBTN(136,172.5)
      dirIcon("LFT",136,172.5)
        pop()
          if(isMobile == true){
            textSize(18)
    text("Você pode colocar o jogo em\n tela cheia ao cliclar no botão", 340,116.5)
        push()
        rectMode(CORNER)
        gameBTN(507.5,102.5,playerV[numer].cor2)
        fsIcon(507.5,102.5,playerV[numer].cor2)
        pop()
            push()
            textAlign(LEFT)
            textSize(18)
    text("É possível trocar de personagem\nno menu de opções", 205,176.5)
            push()
            rectMode(CORNER)
            gameBTN(517.5,165,playerV[numer].cor2)
            gearIcon(517.5,165,playerV[numer].cor2)
            pop()
            pop()
          }else{
            textAlign(LEFT)
            textSize(18)
    text("É possível trocar de personagem\nno menu de opções", 205,116.5)
            push()
            rectMode(CORNER)
            gameBTN(526,97,playerV[numer].cor2)
            gearIcon(526,97,playerV[numer].cor2)
            pop()
          }
          pop()
          push()
          if(isMobile == true){
          push()
          scale(0.8)
          translate(50,90)
            
          image(spriteEx,200,180,100,100,0,0,270,270)
          image(spriteOx,280,180,100,100,0,0,270,270)
          image(spriteOg,360,180,100,100,0,0,270,270)
          image(spritePob,440,180,100,100,0,0,270,270)
          switch(numer){
            case 0:
            noFill()
            stroke(playerV[numer].cor6)
            strokeWeight(3)
            rect(247.5,230,77.5,110,5)
            break
            case 1:
            noFill()
            stroke(playerV[numer].cor6)
            strokeWeight(3)
            rect(327.5,230,77.5,110,5)
            break
            case 2:
            noFill()
            stroke(playerV[numer].cor6)
            strokeWeight(3)
            rect(407.5,230,77.5,110,5)
            break
            case 3:
            noFill()
            stroke(playerV[numer].cor6)
            strokeWeight(3)
            rect(487.5,230,77.5,110,5)
            break
            
          }
          pop()}
          else{
          
          image(spriteEx,200,180,100,100,0,0,270,270)
          image(spriteOx,280,180,100,100,0,0,270,270)
          image(spriteOg,360,180,100,100,0,0,270,270)
          image(spritePob,440,180,100,100,0,0,270,270)
          switch(numer){
            case 0:
            noFill()
            stroke(playerV[numer].cor6)
            strokeWeight(3)
            rect(247.5,230,77.5,110,5)
            break
            case 1:
            noFill()
            stroke(playerV[numer].cor6)
            strokeWeight(3)
            rect(327.5,230,77.5,110,5)
            break
            case 2:
            noFill()
            stroke(playerV[numer].cor6)
            strokeWeight(3)
            rect(407.5,230,77.5,110,5)
            break
            case 3:
            noFill()
            stroke(playerV[numer].cor6)
            strokeWeight(3)
            rect(487.5,230,77.5,110,5)
            break
            
          }}
          pop()
          break
      }
      pop()
  
  
  }
//Tela de Gave Over - tela = 3
function gameOver(){
  tela=3
  highScore=score;
  background(0)
playerVar()
  playerV[numer].state="idle"
  push()
  rectMode(CORNER)
  gameBTN(270,180,210,60,playerV[numer].cor2,"Voltar",270,217,28)
  pop()
  strokeWeight(4)
  stroke(playerV[numer].cor6);
  textFont(fontee);
  fill("#FFF")
  textSize(50);
  text("FIM DE JOGO", 375 ,121.5);
  text("FIM DE JOGO", 375 ,120);
  textSize(20)
  text("Você fez "+highScore+" pontos",375,156.5)
  text("Você fez "+highScore+" pontos",375,155)

  
  
  if(isMobile==true){
      push()
      rectMode(CORNER)
        gameBTN(657.5,12.5,playerV[numer].cor2);
        fsIcon(657.5,12.5,playerV[numer].cor2)
      pop()
      }
  
}
//Tela de pause/tela 4
function telaPause(){
  gamePause()
  tela=4
  highScore=score;
  background(0)
playerVar()
  
  
  //Voltar
  push()
  rectMode(CORNER)
  gameBTN(270,180,210,60,playerV[numer].cor2,"Voltar",270,217,28);
  //Opções
  gameBTN(270,250,210,60,playerV[numer].cor2,"Opções",270,287,28);
  //Sair
  gameBTN(270,320,210,60,playerV[numer].cor2,"Sair",270,357,28);
  pop()
  
  strokeWeight(4)
  stroke(playerV[numer].cor6);
  textFont(fontee);
  fill("#FFF")
  textSize(50);
  text("JOGO PAUSADO", 375 ,121.5);
  text("JOGO PAUSADO", 375 ,120);
  textSize(20)
  text("Você tem "+score+" pontos",375,155)

    if(isMobile==true){
      push()
      rectMode(CORNER)
        gameBTN(657.5,12.5,playerV[numer].cor2)
        fsIcon(657.5,12.5,playerV[numer].cor2)
      pop()
      }
}
//menu de opções Tela 5
function menuOpcoes(){
    personagem()
  tela=5
  
  background(0)
playerVar()
  textFont(fontee)
  push()
  translate(360,100)
  strokeWeight(4)
  stroke(playerV[numer].cor6)
  fill(playerV[numer].cor6+"80")
  rect(30,120,630,300,10)
  pop()
  push()

  strokeWeight(6)
  stroke(playerV[numer].cor6);
  textFont(fontee);
  fill("#FFF")
  textSize(50);
  text("OPÇÕES", 375 ,81.5);
  text("OPÇÕES", 375 ,80);
  
  pop()

  push()
      
  fill("#FFF")
  stroke(playerV[numer].cor6)
  strokeWeight(6)
  textFont(fontee)
  textSize(36)

  pop()
  push()
  textFont(fontee)
  fill("#FFF")
  
  strokeWeight(5)
  stroke(playerV[numer].cor1)
  textSize(26)
  push()
  rectMode(CORNER)
  gameBTN(102.5,310,210,60,playerV[numer].cor2,"Personagens",102.5,347,26);
  pop()
  pop()
  push()
  rectMode(CORNER)
  gameBTN(732.5,77.5,playerV[numer].cor2)
  xicon(732.5,77.5,playerV[numer].cor2)
  pop()
    if(isMobile==true){
      push()
      rectMode(CORNER)
        gameBTN(657.5,12.5,playerV[numer].cor2);
        fsIcon(657.5,12.5,playerV[numer].cor2)
      pop()
      push()
  fill("#FFF")
  stroke(playerV[numer].cor6)
  strokeWeight(6)
  textFont(fontee)
  textSize(36)
      text("Mudo",160,141.5)
      text("Mudo",160,140)

        push()
        if(mudo==false){
    
    stroke("rgba(77,1,1,0.75)");
      strokeWeight(3)
      fill("rgba(248,0,0,0.75)")
      rect(270,127.5,90,45,5);
      push()
      rectMode(CORNER)
      gameBTN(220,105.5)
      soundOn(107,110)
      pop()
  }else if(mudo==true){
    stroke("rgba(1,77,3,0.75)");
      strokeWeight(3)
      fill("rgba(3,248,0,0.75)")
      rect(270,127.5,90,45,5);
    push()
    rectMode(CORNER)
    gameBTN(270,105.5)
    mute(270,105)
    pop()
  }
      pop()
  text("Canhoto",187,191.5)
  text("Canhoto",187,190)
  text("Tela Cheia",205,248.5)
  text("Tela Cheia",205,247)
  push()
  rectMode(CORNER)
  gameBTN(316.5,212.5,playerV[numer].cor2);
  fsIcon(316.5,212.5,playerV[numer].cor2)
  pop()
  pop()  
      push()
  if(canhoto==false){
    
    stroke("rgba(77,1,1,0.75)");
      strokeWeight(3)
      fill("rgba(248,0,0,0.75)")
      rect(330,180,90,45,5);
    push()
    rectMode(CORNER)
    gameBTN(280,158)
    pop()
  }else if(canhoto==true){
    stroke("rgba(1,77,3,0.75)");
      strokeWeight(3)
      fill("rgba(3,248,0,0.75)")
      rect(330,180,90,45,5);
    push()
    rectMode(CORNER)
    gameBTN(330,158)
    pop()
  }
  pop()
      
      }else{
        push()
        rectMode(CORNER)
        gameBTN(316.5,157.5,48,50.5,playerV[numer].cor2)
        fsIcon(316.5,157.5,playerV[numer].cor2)
        pop()
        push()
        fill("#FFF")
        stroke(playerV[numer].cor6)
        strokeWeight(6)
        textFont(fontee)
        textSize(36)
        text("Mudo",160,141.5)
        text("Mudo",160,140)
        
        push()
        if(mudo==false){
    
    stroke("rgba(77,1,1,0.75)");
      strokeWeight(3)
      fill("rgba(248,0,0,0.75)")
      rect(270,127.5,90,45,5);
    push()
      rectMode(CORNER)
      gameBTN(220,105.5)
      soundOn(107,110)
      pop()
  }else if(mudo==true){
    stroke("rgba(1,77,3,0.75)");
      strokeWeight(3)
      fill("rgba(3,248,0,0.75)")
      rect(270,127.5,90,45,5);
    push()
    rectMode(CORNER)
    gameBTN(270,105.5)
    mute(270,105)
    pop()
  }
        
        pop()
        text("Tela Cheia",208,191.5)
        text("Tela Cheia",208,190)
        pop()
  }
}
//Tela de troca de personagens 6
function telaPersonagens(){
  tela=6
  personagem()

  background(0)
playerVar()
  push()
  textFont(fontee);
  push()
      stroke(playerV[numerF].cor6+"BF");
      
    strokeWeight(3)
      beginShape()
      vertex(playerV[numerF].vX1,playerV[numerF].vY)
      vertex(playerV[numerF].vX2,playerV[numerF].vY)
    endShape()
      translate(300,105.5)
      fill(playerV[numerF].color+"B2")
      rect(120,120,577.5,262,5)
      translate(-200,0)
      fill(playerV[numerF].color+"B2")
      rect(120,120,177.5,262.5)
      pop()
      
    push()
    strokeWeight(4)
    stroke("#000");
    fill("#FFF")
    if(playerV[numerF].name.length>6)textSize(26)
    else textSize(32)
    text(playerV[numerF].name, 220,125)
    pop()
    push()
    strokeWeight(3)
    stroke("#000");
    fill("#FFF")
    textSize(20)
  if(playerV[numerF].name.length>6)
   text("Quem é "+ playerV[numerF].name+"?",424,120)
  else if(playerV[numerF].name.length>3)
   text("Quem é "+ playerV[numerF].name+"?",394,120)
  else text("Quem é "+ playerV[numerF].name+"?",384,120)
      
     textSize(16)
     textAlign(LEFT)
     text(playerV[numerF].hist,316,142)
      
    pop()
  switch(numerF){
    case 0:
    push()
      image(spriteEx,150,140,150,150,0,0,270,270)
    pop()
    break
    case 1:
      push()
      image(spriteOx,150,140,150,150,0,0,270,270)
    pop()
      break
    case 2:
      push()
      image(spriteOg,150,140,150,150,0,0,270,270)
    pop()
      break
    case 3:
      push()
      image(spritePob,150,140,150,150,0,0,270,270)
    pop()
  }
  
  pop()
  
      
  for(y=100;y<=310;y+=70){
   push()
    rectMode(CORNER)
    gameBTN(55,y)
  pop();   
  }
 exu(55,100)
 oxossi(57,170)
 ogum(55,240)
 pombag(56,310)
  
  
  push()
  
      if(numerF==playerV[numer].num){textFont(fontee)
  push()
    rectMode(CORNER)
gameBTN(132,302,177.5,60, playerV[numer].cor2,"Selecionado",132,339,25);
  pop()
      }else{textFont(fontee)
        push()
        rectMode(CORNER)
        gameBTN(132,302,177.5,60,"#B5B6B4","Selecionar",132,339,25);
        pop()
      }
  pop()
  push()
    stroke(playerV[numer].cor6)
  strokeWeight(5)
    fill("#FFF")
    textFont(fontee)
    textSize(52);
    text("PERSONAGENS", 400 ,72.5);
  pop()
  push()
  rectMode(CORNER)
gameBTN(732.5,77.5,playerV[numer].cor2)
  
  xicon(732.5,77.5,playerV[numer].cor2)
pop()
    if(isMobile==true){
      push()
      rectMode(CORNER)
        gameBTN(657.5,12.5,playerV[numer].cor2);
        fsIcon(657.5,12.5,playerV[numer].cor2)
      pop()
      }
  
}
//Créditos tela 7
  function creditos(){
    tela=7
    background(0)
playerVar()
    textFont(fontee);
    strokeWeight(4)
    stroke(playerV[numer].cor6)
    fill("#FFF")
    push()
    rectMode(CORNER)
    gameBTN(732.5,77.5,playerV[numer].cor2)
    xicon(732.5,77.5,playerV[numer].cor2)
    pop()
    push()
    strokeWeight(10)
    stroke(playerV[numer].cor6)
  ellipse(220, 190, 180, 180);
  drawingContext.clip();
    //ctx.canvasDrawingContext2D.clip();
  image(fotoMinha,130,100,180,180);
  pop()
  textSize(30)
    text("Discente",225,324)
    text("Discente",225,322.5)
    textSize(24)
    text("Gabriel Bitencourt",225,356.5)
    text("Gabriel Bitencourt",225,355)
  push()
    strokeWeight(10)
    stroke(playerV[numer].cor6)
  ellipse(540, 190, 170, 170);
  drawingContext.clip();
  image(fotoProf,450,100,180,180);
    
  pop()
    textSize(30)
    text("Docente",540,324)
    text("Docente",540,322.5)
    textSize(24)
    text("Prof. Aquiles Burlamaqui",540,355+1.5)
    text("Prof. Aquiles Burlamaqui",540,355)
  if(isMobile == true){
    push()
    rectMode(CORNER)
    gameBTN(732.5,12.5,playerV[numer].cor2);
    fsIcon(732.5,12.5,playerV[numer].cor2)
    pop()
    }
  textSize(60);
  text("CRÉDITOS", 375 ,76.5);
  text("CRÉDITOS", 375 ,75);
  }
