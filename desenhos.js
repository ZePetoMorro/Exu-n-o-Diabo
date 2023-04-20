function gamePad(){
     
  if(tela==1){   
  if(canhoto==false){  
        if(bow==true){
        push()
          rectMode(CORNER)
        gameBTN(77.5,277.5)
          pop()
        flecha(77.5,277.5)
        }
        
    push()
  
    stroke('rgba(53,53,53,0.75)');
    strokeWeight(3);
    fill('rgba(209,209,209,0.75)');
    ellipse(700,325,147,147);
  
    fill('rgba(214,214,214,0.5)');
    stroke('rgba(26,26,26,0.25)')
    strokeWeight(3);
    //cima
    

    rect(700, 275, 48, 48, 5);
    triangle(684,287,715,287,700,260);
    //esquerda
    rect(650, 325, 48, 48, 5);
    triangle(665,307,665,341,635,326);
    //direita
    rect(750, 325, 48, 48,5); 
    triangle(735,307,765,326,735,341);
    //baixo
    rect(700, 375, 48, 48, 5);
    triangle(684,365,715,365,700,390);
  
  pop()
  }
  if(canhoto==true){  
    if(bow==true){
    push()    
    translate(600,0)
      push()
          rectMode(CORNER)
        gameBTN(77.5,277.5)
      pop()
        flecha(77.5,277.5)
    pop()
    }
    
    push()
  translate(-580,0)
    stroke('rgba(53,53,53,0.75)');
    strokeWeight(3);
    fill('rgba(209,209,209,0.75)');
    ellipse(700,325,147,147);
  
    fill('rgba(214,214,214,0.5)');
    stroke('rgba(26,26,26,0.25)')
    strokeWeight(3);
    //cima
    

    rect(700, 275, 48, 48, 5);
    triangle(684,287,715,287,700,260);
    //esquerda
    rect(650, 325, 48, 48, 5);
    triangle(665,307,665,341,635,326);
    //direita
    rect(750, 325, 48, 48,5); 
    triangle(735,307,765,326,735,341);
    //baixo
    rect(700, 375, 48, 48, 5);
    triangle(684,365,715,365,700,390);
  
  pop()
  }
}
  if(tela==2){
    if(canhoto==false){  
        if(bow==true){
        push()
          translate(250,20)
          push()
          rectMode(CORNER)
        gameBTN(77.5,277.5)
          pop()
        flecha(77.5,277.5)
          pop()
        }
        
    push()
  
    stroke('rgba(53,53,53,0.75)');
    strokeWeight(3);
    fill('rgba(209,209,209,0.75)');
    ellipse(700,325,147,147);
  
    fill('rgba(214,214,214,0.5)');
    stroke('rgba(26,26,26,0.25)')
    strokeWeight(3);
    //cima
    

    rect(700, 275, 48, 48, 5);
    triangle(684,287,715,287,700,260);
    //esquerda
    rect(650, 325, 48, 48, 5);
    triangle(665,307,665,341,635,326);
    //direita
    rect(750, 325, 48, 48,5); 
    triangle(735,307,765,326,735,341);
    //baixo
    rect(700, 375, 48, 48, 5);
    triangle(684,365,715,365,700,390);
  
  pop()
  }
  if(canhoto==true){  
    if(bow==true){
    push()    
    translate(360,20)
      push()
          rectMode(CORNER)  
      gameBTN(77.5,277.5)
      pop()
        flecha(77.5,277.5)
    pop()
    }
    
    push()
  translate(-580,0)
    stroke('rgba(53,53,53,0.75)');
    strokeWeight(3);
    fill('rgba(209,209,209,0.75)');
    ellipse(700,325,147,147);
  
    fill('rgba(214,214,214,0.5)');
    stroke('rgba(26,26,26,0.25)')
    strokeWeight(3);
    //cima
    

    rect(700, 275, 48, 48, 5);
    triangle(684,287,715,287,700,260);
    //esquerda
    rect(650, 325, 48, 48, 5);
    triangle(665,307,665,341,635,326);
    //direita
    rect(750, 325, 48, 48,5); 
    triangle(735,307,765,326,735,341);
    //baixo
    rect(700, 375, 48, 48, 5);
    triangle(684,365,715,365,700,390);
  
  pop()
  }
  }
}
function flecha(x,y){
  this.x=x;
  this.y=y;
  push()
      
      noFill()
      stroke("rgb(80,80,80)")
      
      strokeWeight(4)
      strokeJoin(ROUND)
      push()
      beginShape();
      
      stroke("rgb(80,80,80)")
      
      strokeWeight(6)
      strokeJoin(ROUND)
       
      vertex(x+14,y+32)
      vertex(x+36,y+10)
      endShape();
      pop() 
      beginShape();
      vertex(x+24, y+8);
      vertex(x+38, y+8);
      vertex(x+38, y+22);
      vertex(x+36, y+12);
      vertex(x+24, y+8);
      
      endShape()
      noFill()
      beginShape();
      vertex(x+5, y+32);
      vertex(x+14, y+32);
      vertex(x+14, y+40);
      endShape()
      
      beginShape();
      vertex(x+8, y+26);
      vertex(x+20, y+26);
      vertex(x+20, y+38);
      endShape()
    pop()
}
function loadingBar(){
  playerVar()
  push()
  fill("#ff1b1b")
  rect(0,0,width*2,height*2)
  pop()
  if(carregados>3){
    push()
  strokeWeight(5)
  stroke(playerV[numer].cor6)
  fill("#FFF")
  
  textSize(100);
  text(playerV[numer].name, 375 ,100);
  pop()
  push()
  stroke(playerV[numer].cor6)
  strokeWeight(4)
  fill("#fff")
  
  textSize(30)
  text("NÃO É DIABO",375,145.5)
  text("NÃO É DIABO",375,144)
  
  pop()
  }
  push()
  rectMode(CORNER)
  if(carregados>6){gameBTN(270,180,210,60,playerV[numer].cor2,"Iniciar",270,217,28);}
  if(carregados>9){
gameBTN(270,250,210,60,playerV[numer].cor2,"Opções",270,287,28);
  }
  if(carregados>12){
gameBTN(270,320,210,60,playerV[numer].cor2,"Créditos",270,357,28);
  }
  pop()
}
function espaco(x,y){
  this.x=x;
  this.y=y;
  push()
  noFill()
  strokeWeight(6)
  stroke("rgb(51,51,51)")
  strokeJoin(ROUND);
  beginShape()
  vertex(x+25,y+25)
  vertex(x+25,y+40)
  vertex(x+175,y+40)
  vertex(x+175,y+25)
  endShape()
  pop()
}
function coracao(x,y,size){
  this.x=x;
  this.y=y;
  push()
  fill(playerV[numer].cor5)
  strokeWeight(3)
  stroke(playerV[numer].cor6)
  beginShape();
  vertex(x, y);
  bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
  bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
  endShape();
  pop()
}
function playerVar(){
  
  switch(playerV[numer].num){
        case 0:
          imageF=spriteEx
          if(tela!=1)
          image(fundos,0,0,800,400,0,0,800,400)
        break
        case 1:
          imageF=spriteOx
          if(tela!=1)
          image(fundos,0,0,800,400,0,400,800,400)
        break
        case 2:
          imageF=spriteOg
          if(tela!=1)
          image(fundos,0,0,800,400,0,800,800,400)
        break
        case 3:
          imageF=spritePob
          if(tela!=1)
          image(fundos,0,0,800,400,0,1200,800,400)
      }
  if(playerV[numer].num==1){
    bow=true;
  }else{
    bow=false
  }
}
function exu(x,y){
  this.x=x;
  this.y=y;
  push()
  noFill()
  strokeWeight(6)
  if(numer==0)stroke(playerV[numer].cor6)
  else stroke("rgb(51,51,51)")
  strokeJoin(ROUND);
  beginShape()
  vertex(x+10,y+35)
  vertex(x+37,y+10)
  vertex(x+37,y+10)
  endShape()
  beginShape()
  vertex(x+29,y+6)
  vertex(x+23,y+12)
  vertex(x+34,y+24)
  vertex(x+41,y+18)
  endShape()
  pop()
}
function oxossi(x,y){
  this.x=x;
  this.y=y;

  push()
    noFill()
    if(numer==1)stroke(playerV[numer].cor6)
  else stroke("rgb(51,51,51)")
    strokeWeight(4)
    strokeJoin(ROUND)
      push()
        translate(x-38,36)
        scale(0.8)
        beginShape();
        if(numer==1)stroke(playerV[numer].cor6)
  else stroke("rgb(51,51,51)")
        strokeWeight(6)
        strokeJoin(ROUND)       
        vertex(x+7,y+36)
        vertex(x+36,y+10)
        endShape();
        beginShape();
        vertex(x+24, y+8);
        vertex(x+38, y+8);
        vertex(x+38, y+22);
        vertex(x+36, y+12);
        vertex(x+24, y+8);
        endShape()
      pop()
  push()
  translate(-5,+2.5)
    beginShape();
        vertex(x+12,y+10)
        vertex(x+35,y+36)
    endShape()
    beginShape()
      curveVertex(x+12,y+10)
      curveVertex(x+35,y+36)
      curveVertex(x+12,y+10)
      curveVertex(x+30,y+17)
      curveVertex(x+35,y+36)
      curveVertex(x+20,y+36)
      
    endShape()
  pop()
  pop()

}
function pombag(x,y){
  this.x=x;
  this.y=y;
  
  push()
  noFill()
  strokeWeight(5)
  if(numer==3)stroke(playerV[numer].cor6)
  else stroke("rgb(51,51,51)")
  strokeJoin(ROUND);
  beginShape()
  vertex(x+37,y+35)
  vertex(x+37,y+35)
  vertex(x+10,y+10)
  
  endShape()
  beginShape()
  curveVertex(x+8,y+17)
  curveVertex(x+8,y+17)
  curveVertex(x+18,y+24)
  curveVertex(x+25,y+16)
  curveVertex(x+16,y+7)
  curveVertex(x+16,y+7)
  endShape()
  pop()

}
function ogum(x,y){
  this.x=x;
  this.y=y;
  
  push()
  noFill()
  strokeWeight(3)
  if(numer==2)stroke(playerV[numer].cor6)
  else stroke("rgb(51,51,51)")
  strokeJoin(ROUND);
  
  push()
  translate(-2,0)
  push()
  beginShape()
  vertex(x+10,y+33)
  vertex(x+10,y+33)
  vertex(x+17,y+28.5)
  endShape()
  beginShape()
  vertex(x+15,y+24)
  vertex(x+15,y+24)
  vertex(x+20,y+33)
  endShape()
  
  beginShape()
  curveVertex(x+20,y+30)
  curveVertex(x+20,y+30)
  curveVertex(x+27,y+25)
  curveVertex(x+36,y+21)
  curveVertex(x+39,y+12)
  curveVertex(x+39,y+12)
  endShape()
  
  beginShape()
  curveVertex(x+38,y+13)
  curveVertex(x+38,y+13)
  curveVertex(x+35,y+14)
  curveVertex(x+33,y+14)
  curveVertex(x+33,y+14)
  curveVertex(x+33,y+14)
  endShape()
  
  beginShape()
  curveVertex(x+32,y+14)
  curveVertex(x+32,y+14)
  curveVertex(x+30,y+17)
  curveVertex(x+28,y+20)
  curveVertex(x+19,y+25)
  curveVertex(x+19,y+25)
  endShape()
  pop()
  pop()
  //
  push()
  translate(x+107,0)
  scale(-1,1)
  push()
    beginShape()
  vertex(x+10,y+33)
  vertex(x+10,y+33)
  vertex(x+17,y+28.5)
  endShape()
  beginShape()
  vertex(x+15,y+24)
  vertex(x+15,y+24)
  vertex(x+20,y+33)
  endShape()
  
  beginShape()
  curveVertex(x+20,y+30)
  curveVertex(x+20,y+30)
  curveVertex(x+27,y+25)
  curveVertex(x+36,y+21)
  curveVertex(x+39,y+12)
  curveVertex(x+39,y+12)
  endShape()
  
  beginShape()
  curveVertex(x+38,y+13)
  curveVertex(x+38,y+13)
  curveVertex(x+35,y+14)
  curveVertex(x+33,y+14)
  curveVertex(x+33,y+14)
  curveVertex(x+33,y+14)
  endShape()
  
  beginShape()
  curveVertex(x+32,y+14)
  curveVertex(x+32,y+14)
  curveVertex(x+30,y+17)
  curveVertex(x+28,y+20)
  curveVertex(x+19,y+25)
  curveVertex(x+19,y+25)
  endShape()
  pop()
  pop()
    push()
  ellipse(x+25,y+21,36)
  
    pop()
  pop()

}
function personagem(){
  playerVar()
  
  if(tela==1){
  push()
    switch(playerV[numer].state){
    case "idle":
      playerV[numer].frameX=0
      playerV[numer].frameY=0
      playerV[numer].moving=false
      break
    case "wL":
      frame()
      playerV[numer].frameY=playerV[numer].cutY*1
      break
    case "wR":
      frame()
      playerV[numer].frameY=playerV[numer].cutY*2
      break
    case "wU":
      frame()
      playerV[numer].frameY=playerV[numer].cutY*3
      break
    case "wD":
      frame()
      playerV[numer].frameY=0
      break
  }
  switch(frames){
    case 1:
      playerV[numer].frameX=0
      break
    case 2:
      playerV[numer].frameX=playerV[numer].cutX*1
      break
    case 3:
      playerV[numer].frameX=playerV[numer].cutX*2
      break
    case 4:
      playerV[numer].frameX=playerV[numer].cutX*3
  }
    noFill()
  strokeWeight(2)
      //CIMA
     if(keyIsDown(UP_ARROW)==true||keyIsDown(87)==true){
             stroke("#81FFFF")
             playerV[numer].state="wU"
             playerV[numer].moving=true
      //ESQUERDA
    }else if(keyIsDown(LEFT_ARROW)==true||keyIsDown(65)==true){
             stroke("#050D4D")
             playerV[numer].state="wL"
             playerV[numer].moving=true
      //DIREITA
    }else if(keyIsDown(RIGHT_ARROW)==true||keyIsDown(68)==true){
             stroke("#C5CF12")
             playerV[numer].state="wR";
             playerV[numer].moving=true
    }//BAIXO
    else if(keyIsDown(DOWN_ARROW)==true||keyIsDown(83)==true){
      stroke("#3D6821")
      playerV[numer].state="wD"
      playerV[numer].moving=true}
    else{//idle
      stroke(playerV[numer].color)
    }
    if(isMobile==true){
        if(canhoto==false){
    if (touches.length>0) {
      //DIREITA
      if(colisao(650,325,touches[0].x, touches[0].y)){
           stroke("#C5CF12")
           playerV[numer].state="wL"
           playerV[numer].moving=true
    }else
      //ESQUERDA
      if(colisao(750,325,touches[0].x, touches[0].y)){
           stroke("#050D4D")
           playerV[numer].state="wR"
           playerV[numer].moving=true
    }else
      //CIMA
      if (colisao(700,275,touches[0].x, touches[0].y)){
        stroke("#81FFFF");
        playerV[numer].state="wU"
      playerV[numer].moving=true}
      else
      //BAIXO
      if(colisao(700,375,touches[0].x,touches[0].y)){
        stroke("#3D6821")
        playerV[numer].state="wD"
        playerV[numer].moving=true;}
}}else
        if(canhoto==true){
    if (touches.length>0) {
      //DIREITA
      if(colisao(70,325,touches[0].x, touches[0].y)){
           stroke("#C5CF12")
           playerV[numer].state="wL"
           playerV[numer].moving=true
    }else
      //ESQUERDA
      if(colisao(170,325,touches[0].x, touches[0].y)){
           stroke("#050D4D")
           playerV[numer].state="wR"
           playerV[numer].moving=true
    }else
      //CIMA
      if (colisao(120,275,touches[0].x, touches[0].y)){
        stroke("#81FFFF");
        playerV[numer].state="wU"
      playerV[numer].moving=true}
      else
      //BAIXO
      if(colisao(120,375,touches[0].x,touches[0].y)){
        stroke("#3D6821")
        playerV[numer].state="wD"
        playerV[numer].moving=true;}
}
     
}
    }
    
  
  if(playerV[numer].moving==false) frames=0
      else frame()
image(imageF,plX-playerV[numer].hP/4,plY-playerV[numer].wP/2,playerV[numer].hP,playerV[numer].wP,playerV[numer].cutX*floor(frames),playerV[numer].frameY,playerV[numer].cutX,playerV[numer].cutY)
  pop()
    
  }
}
function frame(){
    frames+=0.06
    if(frames>4)
      frames=0
  }
function eFrame(){
  framesE+=velE
    if(framesE>4)
      framesE=0
}
function ranCC(){ExC=random(280,470)
  EyC=random(200,250)
  EF=random([0,270,540,810])
  PF=random([0,270,540,810])}
function tiros(){
  if(tiroVisivel==true){for(var i=0;i<tirosX.length;i++){
      hitBoxX=tirosX[i];
      hitBoxY=tirosY[i]+30;
      push()
      noFill()
      strokeWeight(2)
      stroke("#FF000000")
      rect(hitBoxX,hitBoxY,tirosW,tirosH)
      pop()
      push()
      fill("#FFC107")
      stroke("#FFC107")
      strokeWeight(2)
      strokeJoin(ROUND)
      
      rect(tirosX[i], tirosY[i]+29.5,32,1.5,5)
       
      beginShape();
      vertex(tirosX[i]+10, tirosY[i]+24);
      vertex(tirosX[i]+22, tirosY[i]+30);
      vertex(tirosX[i]+10, tirosY[i]+36);
      vertex(tirosX[i]+15, tirosY[i]+30);
      vertex(tirosX[i]+10, tirosY[i]+24);
      
      endShape()
      noFill()
      beginShape();
      vertex(tirosX[i]-26, tirosY[i]+26);
      vertex(tirosX[i]-16, tirosY[i]+30);
      vertex(tirosX[i]-26, tirosY[i]+34);
      endShape()
      
      beginShape();
      vertex(tirosX[i]-20, tirosY[i]+26);
      vertex(tirosX[i]-10, tirosY[i]+30);
      vertex(tirosX[i]-20, tirosY[i]+34);
      endShape()
      
      beginShape();
      vertex(tirosX[i]-14, tirosY[i]+26);
      vertex(tirosX[i]-6, tirosY[i]+30);
      vertex(tirosX[i]-14, tirosY[i]+34);
      endShape()
    pop()
     //se mudar o valor do 3,o tiro fica mais rapido ou lento
    tirosX[i]=tirosX[i]+15;
    
    //se o primeito elemento sair da tela remove ele;
    if(tirosX[0]>800||enemyX==850) {
      tirosX.shift();
      tirosY.shift();
      hitBoxX=0;
      hitBoxY=140;
    }
    if(tirosX.length>qtdTiros){
    
      tirosX.pop();
      tirosY.pop();
    }
  }}
 }
function bg(){
  switch(numerF){
    case 0:
      
      document.body.style.backgroundColor = playerV[numer].bgColor
      break
      case 1:
      
      document.body.style.backgroundColor = playerV[numer].bgColor
      break
      case 2:
      
      document.body.style.backgroundColor = playerV[numer].bgColor
      break
      case 3:
      
      document.body.style.backgroundColor = playerV[numer].bgColor
  }
}
