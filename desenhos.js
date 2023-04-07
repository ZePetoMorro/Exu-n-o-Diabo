function botao(x,y){
  this.y = y;
  this.x = x;
  push()
      stroke("rgba(80,80,80,0.75)");
      strokeWeight(3)
      fill("rgba(218,217,217,0.75)")
      rect(x,y,45,45,5);
      
  pop();
}

function botaoG(x,y,w,h,texto,dista,num){
  this.x=x
  this.y=y
  this.w=w
  this.h=h
  this.texto=texto
  this.dista=dista
  cor1=playerV[numer].cor1;
  cor2=playerV[numer].cor2;
  cor3=playerV[numer].cor3;
  cor4=playerV[numer].cor4;
  cor5=playerV[numer].cor5;
  cor6=playerV[numer].cor6;

    if(num==4){
      cor1="rgb(47,48,47)"
      cor2="rgb(181,182,180)"
      cor3="rgb(70,70,70)"
      cor4="rgb(83,83,83)"
      cor5="rgb(107,107,107)"
      cor6="rgb(51,51,51)"
    }
  
  push()
    push()
        noFill()
        stroke(cor1)
        strokeWeight(4)
        rect(x-1,y,w-0.5,h-5,6)
        noStroke()
        fill(cor2)
        rect(x-1.1,y,w-1.5,h-8,5);
        noStroke()
        fill(cor3)
        rect(x-1,y,w-2,h-7,6)
        fill(cor4)
        rect(x-1,y,w-2,h-10,6)
    fill(cor5)
        rect(x-1,y+10,w-6.3,h-35,0,0,4,4)  
    fill(cor2)
        rect(x-1,y-10,w-6.3,h-33,4)



    pop()
    push()
    stroke(cor6)
    strokeWeight(4)
    fill("#fff")
    textFont(fontee)
    if(texto.length>7&&texto.length<9){
      textSize(28)
      text(texto,dista,y+11.5)
      text(texto,dista,y+10)
    }else if(texto.length>9){
      textSize(24)
      text(texto,dista,y+11.5)
      text(texto,dista,y+10)  
    }else{
      textSize(32)
      text(texto,dista,y+13.5)
      text(texto,dista,y+12)
    }
    
    pop()
  pop()
}

function botaoN(x,y,num){

  this.x=x

  this.y=y
  w=48
  h=50.5
  cor1=playerV[numer].cor1

  cor2=playerV[numer].cor2

  cor3=playerV[numer].cor3

  cor4=playerV[numer].cor4

  cor5=playerV[numer].cor5;
 if(num==4){
      cor1="rgb(47,48,47)"
      cor2="rgb(181,182,180)"
      cor3="rgb(70,70,70)"
      cor4="rgb(83,83,83)"
      cor5="rgb(107,107,107)"
      cor6="rgb(51,51,51)"
    }
push()

    push()

        noFill()

        stroke(cor1)

        strokeWeight(4)

        rect(x,y,w,h-6,6)

        noStroke()

        fill(cor4)

        rect(x,y+0.3,w-2,h-7,6)

    fill(cor5)

        rect(x+0.3,y+10,w-6.3,h-31,0,0,4,4)  

    fill(cor2)

        rect(x+0.3,y-7.7,w-6.3,h-28,4)

    pop()

    

  pop()

}

function engrenagem(x,y,num){
  this.x=x;
  this.y=y;
  push()
  strokeWeight(8)
  
  if(num==4){
      stroke("rgb(51,51,51)")
    }else{
      stroke(playerV[numer].cor6)
    }
noFill()
circle(x,y,18)
  
  noStroke()
translate(x,y);
	for (var i = 0; i < 8; i++) {

		push();
        
      if(num==4){
      fill("rgb(51,51,51)")
    }else{
      fill(playerV[numer].cor6)
    }
        
		rotate(TWO_PI * i / 8);

		rect(15, 0 ,8,8,2);

		pop();

	}
  pop()
}

function menuDesenhoTri(x,y){
  this.x=x;
  this.y=y;
  push()
  stroke(playerV[numer].cor6);
      strokeWeight(5)
      fill("rgba(218,217,217,0.75)")
  triangle(x+8,y+12.5,x+8,y+12.5,x+35,y+12.5);
      triangle(x+8,y+23.5,x+8,y+23.5,x+35,y+23.5);
      triangle(x+8,y+34.5,x+8,y+34.5,x+35,y+34.5);
  pop()
}

function xisss(x,y){
  this.x=x;
  this.y=y;
  push()
  noFill()
  strokeWeight(6)
  stroke(playerV[numer].cor6)
  strokeJoin(ROUND);
  beginShape()
  vertex(x+10,y+10)
  vertex(x+35,y+35)
  vertex(x+35,y+35)
  endShape()
  beginShape()
  vertex(x+10,y+35)
  vertex(x+35,y+10)
  vertex(x+35,y+10)
  endShape()
  pop()
}
function mute(x,y){
  this.x=x;
  this.y=y;
  push()
    translate(70,30)
    scale(0.75)
  push()
  noFill()
  strokeWeight(4)
  stroke("rgb(51,51,51)")
  strokeJoin(ROUND);
  beginShape()
  vertex(x+28,y+11)
  vertex(x+16,y+18)
  vertex(x+10,y+18)
  vertex(x+10,y+31)
  vertex(x+16,y+31)
  vertex(x+28,y+38)
  endShape()
  beginShape()
  curveVertex(x,y+11)
  curveVertex(x+28,y+11)
  curveVertex(x+28,y+38)
  curveVertex(x,y+38)
  endShape()
  beginShape()
  curveVertex(x+26,y+21)
  curveVertex(x+36,y+21)
  curveVertex(x+36,y+29)
  curveVertex(x+26,y+29)
  endShape()
  beginShape()
  curveVertex(x+26,y+18)
  curveVertex(x+41,y+18)
  curveVertex(x+41,y+32)
  curveVertex(x+26,y+32)
  endShape()
  beginShape()
  curveVertex(x+26,y+15)
  curveVertex(x+46,y+15)
  curveVertex(x+46,y+35)
  curveVertex(x+26,y+35)
  endShape()
  pop()
  pop()
  push()
  noFill()
  strokeWeight(4)
  stroke("rgb(51,51,51)")
  strokeJoin(ROUND);
  beginShape()
  vertex(x+10,y+10)
  vertex(x+35,y+35)
  vertex(x+35,y+35)
  endShape()
  beginShape()
  vertex(x+10,y+35)
  vertex(x+35,y+10)
  vertex(x+35,y+10)
  endShape()
  pop()
}
  function soundOn(x,y){
  this.x=x;
  this.y=y;
  push()
    translate(142,27)
    scale(0.75)
  push()
  noFill()
  strokeWeight(4)
  stroke("rgb(51,51,51)")
  strokeJoin(ROUND);
  beginShape()
  vertex(x+28,y+11)
  vertex(x+16,y+18)
  vertex(x+10,y+18)
  vertex(x+10,y+31)
  vertex(x+16,y+31)
  vertex(x+28,y+38)
  endShape()
  beginShape()
  curveVertex(x,y+11)
  curveVertex(x+28,y+11)
  curveVertex(x+28,y+38)
  curveVertex(x,y+38)
  endShape()
  beginShape()
  curveVertex(x+26,y+21)
  curveVertex(x+36,y+21)
  curveVertex(x+36,y+29)
  curveVertex(x+26,y+29)
  endShape()
  beginShape()
  curveVertex(x+26,y+18)
  curveVertex(x+41,y+18)
  curveVertex(x+41,y+32)
  curveVertex(x+26,y+32)
  endShape()
  beginShape()
  curveVertex(x+26,y+15)
  curveVertex(x+46,y+15)
  curveVertex(x+46,y+35)
  curveVertex(x+26,y+35)
  endShape()
  pop()
  pop()
}
function fullscreenDesenho(x,y){
  this.y = y;
  this.x = x;
  
  push()
  stroke(playerV[numer].cor6);
      strokeWeight(3)
      fill(playerV[numer].cor6)
      //superior esquerdo
      triangle(x+8.5,y+7.5,x+8.5,y+17.5,x+8.5,y+7.5);
      triangle(x+8.5,y+7.5,x+16.5,y+7.5,x+8.5,y+7.5);
      //superior direito
      triangle(x+36.5,y+7.5,x+36.5,y+17.5,x+36.5,y+7.5);
      triangle(x+36.5,y+7.5,x+27.5,y+7.5,x+36.5,y+7.5);
      //inferior esquerdo
      triangle(x+8.5,y+27.5,x+8.5,y+27.5,x+8.5,y+37.5);
      triangle(x+8.5,y+37.5,x+16.5,y+37.5,x+8.5,y+37.5);
      //inferior direito
      triangle(x+36.5,y+27.5,x+36.5,y+27.5,x+36.5,y+37.5);
      triangle(x+36.5,y+37.5,x+27.5,y+37.5,x+36.5,y+37.5);
  pop()
}
function retornar(x,y){
  this.x=x;
  this.y=y;

      push()
      noFill()
      stroke(playerV[numer].cor6)
      strokeWeight(8)
      strokeJoin(ROUND);
      rotate(0)
  
      beginShape();
      vertex(x+20, y+24);
      vertex(x+10, y+30);
      vertex(x+20, y+37);
      endShape()
  
      curve(x-180, y, x+15,y+30, x+30, y+15.5, x-40, y+25);
      pop()
}
function gamePad(){
     
  if(tela==1){   
  if(canhoto==false){  
        if(bow==true){
        botao(100,300)
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
        botao(100,300)
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
        botao(100,300)
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
        botao(100,300)
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
function startDesenho(x,y){
  this.x=x;
  this.y=y;
    
    push()
    fill(playerV[numer].cor6)
      stroke(playerV[numer].cor6)
      strokeWeight(5)
      strokeJoin(ROUND);
  
    beginShape();
      vertex(x+12.5, y+8);
      vertex(x+35, y+23);
      vertex(x+12.5, y+37);
      vertex(x+12.5,y+8)
      endShape()
    pop()
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
function perfil(x,y){

  this.x=x;

  this.y=y;
  
  push()

  noFill()

  strokeWeight(4)

  stroke(playerV[numer].cor6)

  circle(x+22.5,y+22.5,32.5)

  circle(x+22.5,y+14.5, 12.5)

  pop()

  push()

  noFill()

  strokeWeight(4)

  stroke(playerV[numer].cor6)

beginShape()

  curveVertex(x+8.5,y+65)

  curveVertex(x+8.5,y+27)

  curveVertex(x+38,y+27)

  curveVertex(x+38,y+65)

endShape()

  pop()

}

function direcionalLFT(x,y,num){
  this.x=x;
  this.y=y;
  cor=playerV[numer].cor6;
 if(num==4){
      cor="rgb(51,51,51)"
    }
  push()
      noFill()
      stroke(cor)
      
      strokeWeight(6)
      strokeJoin(ROUND)
      push()
      beginShape();
      
      stroke(cor)
      vertex(x+12,y+22.5)
      vertex(x+32,y+22.5)
      endShape();
      pop() 
      beginShape();
      vertex(x+14, y+15);
      vertex(x+8, y+22.5);
      vertex(x+14, y+30);
      endShape()

    pop()
}
function direcionalRGT(x,y,num){
  this.x=x;
  this.y=y;
  cor=playerV[numer].cor6;
 if(num==4){
      cor="rgb(51,51,51)"
    }
  push()
      noFill()
      stroke(cor)
      
      strokeWeight(6)
      strokeJoin(ROUND)
      push()
      beginShape();
      
      stroke(cor)
      vertex(x+12,y+22.5)
      vertex(x+32,y+22.5)
      endShape();
      pop() 
      beginShape();
      vertex(x+30, y+15);
      vertex(x+36, y+22.5);
      vertex(x+30, y+30);
      endShape()

    pop()
}
function direcionalUP(x,y,num){
  this.x=x;
  this.y=y;
  cor=playerV[numer].cor6;
 if(num==4){
      cor="rgb(51,51,51)"
    }
  push()
      noFill()
      stroke(cor)
      
      strokeWeight(6)
      strokeJoin(ROUND)
      push()
      beginShape();
      
      stroke(cor)
      vertex(x+22,y+10)
      vertex(x+22,y+35)
      endShape();
      pop() 
      beginShape();
      vertex(x+13, y+28);
      vertex(x+22, y+37);
      vertex(x+31, y+28);
      endShape()

    pop()
}
function direcionalDWN(x,y,num){
  this.x=x;
  this.y=y;
  cor=playerV[numer].cor6;
 if(num==4){
      cor="rgb(51,51,51)"
    }
  push()
      noFill()
      stroke(cor)
      
      strokeWeight(6)
      strokeJoin(ROUND)
      push()
      beginShape();
      
      stroke(cor)
      vertex(x+22,y+10)
      vertex(x+22,y+35)
      endShape();
      pop() 
      beginShape();
      vertex(x+13, y+17);
      vertex(x+22, y+8);
      vertex(x+31, y+17);
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
  if(carregados>6){botaoG(375,210,210,60,"Iniciar", 375,playerV[numer].num);}
  if(carregados>9){
    botaoG(375,280,210,60,"Opções", 375,playerV[numer].num);
  }
  if(carregados>12){
  botaoG(375,350,210,60,"Créditos", 375,playerV[numer].num);  
  }
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
function ranCC()
  {ExC=random(280,470)
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
