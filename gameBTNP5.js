p5.prototype.gameBTN = function(x,y,w,h,corP,texto,tX,tY,tSiz){
  push()
  
  //checagem se os parâmetros estão ocupados
  
  if(w==null)w=48
  if(typeof w =="string"){
  corP=w; w=48
  }
  if(h==null)h=50.5
  if(typeof h =="string"){
  texto=h;h=50.5
  }
  if(corP==null) corP="#B5B6B4"
  
  if(texto==null) texto=""
  if(tX==null) tX=x
  if(tY==null) tY=y+10
  
  
  
  //atribuição de uma paleta de cores
  
  colorMode(HSB)
  
  color1 = color(hue(corP), saturation(corP), map(7, 0, 10, brightness(corP), 0))
  color2 = color(hue(corP), map(0, 0, 14, saturation(corP), 100), map(0, 0, 14, brightness(corP), 0))
  color3 = color(hue(corP), saturation(corP), map(4, 0, 10, brightness(corP), 0))
  color4 = color(hue(corP), saturation(corP), map(5, 0, 10, brightness(corP), 0))
  color5 = color(hue(corP), saturation(corP), map(8, 0, 10, brightness(corP), 0))

  
  push()
  
    push()
        noFill()
        stroke(color1)
        strokeWeight(4)
        rect(x,y,w,h-6,6)
        noStroke()
        fill(color4)
        rect(x+1,y+0.5,w-2,h-7,6)
        fill(color3)
        rect(x+3,y+22.5,w-6.3,h-31,0,0,4,4)  
        fill(corP)
        rect(x+3,y+2.5,w-6.3,h-28,4)
    pop()
    
    push()

    stroke(color5)

    strokeWeight(4)

    fill("#fff")

   
if(tSiz==null&&texto.length>13){textSize(22-(texto.length/2.7))
      
      textWrap(WORD)
      textLeading(17)
      textAlign(CENTER)
      text(texto,x,y+16,w)
      text(texto,x,y+15,w)
                    
} else if(tSiz==null&&texto.length>8){
  
      textWrap(WORD)
      textSize(22-(texto.length/3))
      textAlign(CENTER)
      text(texto,x,y+15,w)
      text(texto,x,y+14,w)
  
    }else if(tSiz==null){

      textSize(26)
      textAlign(CENTER)
      text(texto,x,y+11,w)
      text(texto,x,y+10,w)

    }else{
      textSize(tSiz)
      textAlign(CENTER)
      text(texto,tX,tY+1,w)
      text(texto,tX,tY,w)
    }
    pop()
  pop()
  pop()
}
p5.prototype.gearIcon =function(x,y,corP){
  
  push()
  if(corP==null) corP="#B5B6B4"
  
  colorMode(HSB)
  colorP = color(hue(corP), saturation(corP), map(8, 0, 10, brightness(corP), 0))
  
  strokeWeight(8)
  stroke(colorP)
noFill()
circle(x+23.5,y+22.5,18)
  
  noStroke()
translate(x+23.5,y+22.5);
	for (var i = 0; i < 8; i++) {

		push();
        fill(colorP)

		rotate(TWO_PI * i / 8);

		rect(10, -4 ,8,8,2);

		pop();

	}
  pop()
}
p5.prototype.xicon = function(x,y,corP){
  push()
  if(corP==null) corP="#B5B6B4"
  
  colorMode(HSB)
  colorP = color(hue(corP), saturation(corP), map(8, 0, 10, brightness(corP), 0))
  push()
  noFill()
  strokeWeight(6)
  stroke(colorP)
  strokeJoin(ROUND);
  beginShape()
  vertex(x+11,y+10)
  vertex(x+36,y+35)
  vertex(x+36,y+35)
  endShape()
  beginShape()
  vertex(x+11,y+35)
  vertex(x+36,y+10)
  vertex(x+36,y+10)
  endShape()
  pop()
  pop()
}
p5.prototype.menuIcon =function(x,y,corP){
  push()
  if(corP==null) corP="#B5B6B4"
  
  colorMode(HSB)
  colorP = color(hue(corP), saturation(corP), map(8, 0, 10, brightness(corP), 0))
  push()
  noFill()
  strokeWeight(6)
  stroke(colorP)
  strokeJoin(ROUND);
  for(i=12;i<35;i+=11){
  beginShape()
  vertex(x+11,y+i)
  vertex(x+36,y+i)
  vertex(x+36,y+i)
  endShape()}
  pop()
  pop()
}
p5.prototype.pauseIcon=function(x,y,corP){
  push()
  if(corP==null) corP="#B5B6B4"
  
  colorMode(HSB)
  colorP = color(hue(corP), saturation(corP), map(8, 0, 10, brightness(corP), 0))
  push()
  noFill()
  strokeWeight(8)
  stroke(colorP)
  strokeJoin(ROUND);
  
  beginShape()
  vertex(x+17,y+12)
  vertex(x+17,y+33)
  vertex(x+17,y+33)
  endShape()
  beginShape()
  vertex(x+30,y+12)
  vertex(x+30,y+33)
  vertex(x+30,y+33)
  endShape()
  pop()
  pop()
}
p5.prototype.fsIcon=function(x,y,corP){
  fs = fullscreen();
  onclick=function (){
    if(mouseX>x&&mouseX<x+44&&mouseY>y&&mouseY<y+44)

      fullscreen(!fs)
  }
  push()
  if(corP==null) corP="#B5B6B4"
  
  colorMode(HSB)
  colorP = color(hue(corP), saturation(corP), map(8, 0, 10, brightness(corP), 0))
  push()
  noFill()
  strokeWeight(5)
  stroke(colorP)
  strokeJoin(ROUND);
  if(!fs){
  beginShape()
  vertex(x+18,y+10)
  vertex(x+11,y+10)
  vertex(x+11,y+17)
  endShape()
  beginShape()
  vertex(x+30,y+10)
  vertex(x+37,y+10)
  vertex(x+37,y+17)
  endShape()
  beginShape()
  vertex(x+11,y+29)
  vertex(x+11,y+36)
  vertex(x+18,y+36)
  endShape()
  beginShape()
  vertex(x+37,y+29)
  vertex(x+37,y+36)
  vertex(x+30,y+36)
  endShape()
  }else{
  beginShape()
  vertex(x+11,y+17)
  vertex(x+18,y+17)
  vertex(x+18,y+10)
  endShape()
  beginShape()
  vertex(x+30,y+10)
  vertex(x+30,y+17)
  vertex(x+37,y+17)
  endShape()
  beginShape()
  vertex(x+18,y+36)
  vertex(x+18,y+29)
  vertex(x+11,y+29)
  endShape()
  beginShape()
  vertex(x+30,y+36)
  vertex(x+30,y+29)
  vertex(x+37,y+29)
  endShape()
  }
  pop()
  pop()
}
p5.prototype.startIcon=function(x,y,corP){
  push()
  if(corP==null) corP="#B5B6B4"
  
  colorMode(HSB)
  colorP = color(hue(corP), saturation(corP), map(8, 0, 10, brightness(corP), 0))
  push()
  fill(colorP)
  strokeWeight(6)
  stroke(colorP)
  strokeJoin(ROUND);
  beginShape();
    vertex(x+13, y+9);
    vertex(x+36, y+23.5);
    vertex(x+13, y+36);
    vertex(x+13,y+9)
  endShape()
  pop()
  pop()
}
p5.prototype.celularIcon=function(x,y,corP){
  this.x=x
  this.y=y
  push()
  if(corP==null) corP="#B5B6B4"
  
  colorMode(HSB)
  colorP = color(hue(corP), saturation(corP), map(8, 0, 10, brightness(corP), 0))
  
  noFill()
  stroke(colorP)
  strokeWeight(3.5)
  push()
  numPoints = 360;
  angleIncrement = -TWO_PI / numPoints;
   let radius = 16;
  
  beginShape();
  for(let i = 90 ; i < numPoints - 180; i++){
    let angle = angleIncrement * i;
    let x = this.x+23 + sin(angle) * radius;
    let y = this.y+22.5 + cos(angle) * radius;
    curveVertex(x, y);
  }
  endShape();
  beginShape()
  vertex(this.x+22,this.y+8)
  vertex(this.x+19,this.y+11)
  vertex(this.x+19,this.y+11)
  endShape()
  pop()
  push()
  numPoints = 360;
  angleIncrement = TWO_PI / numPoints;
  
  beginShape();
  for(let i = 0 ; i < numPoints - 270; i++){
    let angle = angleIncrement * i;
    let x = this.x+24.5 + sin(angle) * radius;
    let y = this.y+23 + cos(angle) * radius;
    curveVertex(x, y);
  }
  endShape();
  beginShape()
  vertex(this.x+24.5,this.y+38)
  vertex(this.x+28,this.y+35)
  vertex(this.x+28,this.y+35)
  endShape()
  pop()
  push()
  strokeJoin(ROUND)
  strokeWeight(3.5)
  beginShape()
  vertex(x+28,y+9)
  vertex(x+10,y+26)
  vertex(x+19,y+36)
  vertex(x+37,y+19)
  vertex(x+28,y+9)
  endShape()
  strokeWeight(2.5)
  beginShape()
  vertex(x+28,y+14)
  vertex(x+32,y+19)
  endShape()
  pop()
  pop()
}
p5.prototype.muteIcon=function(x,y,corP){
  push()
  
  if(corP==null) corP="#B5B6B4"
  
  colorMode(HSB)
  colorP = color(hue(corP), saturation(corP), map(8, 0, 10, brightness(corP), 0))
  
  noFill()
  strokeWeight(4)
  stroke(colorP)
  strokeJoin(ROUND);
  beginShape()
  vertex(x+26,y+13)
  vertex(x+14,y+20)
  vertex(x+8,y+20)
  vertex(x+8,y+29)
  vertex(x+14,y+29)
  vertex(x+26,y+36)
  endShape()
  beginShape()
  curveVertex(x-2,y+13)
  curveVertex(x+26,y+13)
  curveVertex(x+26,y+36)
  curveVertex(x-2,y+36)
  endShape()
  beginShape()
  curveVertex(x+24,y+21)
  curveVertex(x+34,y+21)
  curveVertex(x+34,y+29)
  curveVertex(x+24,y+29)
  endShape()
  beginShape()
  curveVertex(x+25,y+18)
  curveVertex(x+40,y+18)
  curveVertex(x+40,y+32)
  curveVertex(x+25,y+32)
  endShape()
  
  pop()
  
  push()
  noFill()
  strokeWeight(4)
  stroke(colorP)
  strokeJoin(ROUND);
  beginShape()
  vertex(x+10,y+10)
  vertex(x+38,y+38)
  vertex(x+38,y+38)
  endShape()
  beginShape()
  vertex(x+10,y+38)
  vertex(x+38,y+10)
  vertex(x+38,y+10)
  endShape()
  pop()
  
}
p5.prototype.soundIcon=function(x,y,corP){
  push()
  
  if(corP==null) corP="#B5B6B4"
  
  colorMode(HSB)
  colorP = color(hue(corP), saturation(corP), map(8, 0, 10, brightness(corP), 0))
  
  noFill()
  strokeWeight(4)
  stroke(colorP)
  strokeJoin(ROUND);
  beginShape()
  vertex(x+26,y+13)
  vertex(x+14,y+20)
  vertex(x+8,y+20)
  vertex(x+8,y+29)
  vertex(x+14,y+29)
  vertex(x+26,y+36)
  endShape()
  beginShape()
  curveVertex(x-2,y+13)
  curveVertex(x+26,y+13)
  curveVertex(x+26,y+36)
  curveVertex(x-2,y+36)
  endShape()
  beginShape()
  curveVertex(x+24,y+21)
  curveVertex(x+34,y+21)
  curveVertex(x+34,y+29)
  curveVertex(x+24,y+29)
  endShape()
  beginShape()
  curveVertex(x+25,y+18)
  curveVertex(x+40,y+18)
  curveVertex(x+40,y+32)
  curveVertex(x+25,y+32)
  endShape()
  
  pop()
 
}
p5.prototype.perfilIcon=function(x,y,corP){
  push()
  if(corP==null) corP="#B5B6B4"
  
  colorMode(HSB)
  colorP = color(hue(corP), saturation(corP), map(8, 0, 10, brightness(corP), 0))
  
  push()
  noFill()
  strokeWeight(4)
  stroke(colorP)
  circle(x+23.5,y+22.5,32.5)
  circle(x+23.5,y+14.5,12.5)
  pop()
  push()
  noFill()
  strokeWeight(4)
  stroke(colorP)
beginShape()
  curveVertex(x+9.5,y+65)
  curveVertex(x+9.5,y+27)
  curveVertex(x+39,y+27)
  curveVertex(x+39,y+65)
endShape()
  pop()
  pop()
}
p5.prototype.resetIcon=function(x,y,corP){
  this.x=x;
  this.y=y;
  push()
  if(corP==null) corP="#B5B6B4"
  
  colorMode(HSB)
  colorP = color(hue(corP), saturation(corP), map(8, 0, 10, brightness(corP), 0))
  push()
     numPoints = 360;
   angleIncrement = TWO_PI / numPoints;
   let radius = 12;
  noFill()
  stroke(colorP)
  strokeWeight(5)
  beginShape();
  for(let i = 0 ; i < numPoints - 85; i++){
    let angle = angleIncrement * i;
    let x = this.x+26 + sin(angle) * radius;
    let y = this.y+22 + cos(angle) * radius;
    curveVertex(x, y);
  }
  endShape();
  strokeJoin(ROUND)
  beginShape();
      vertex(this.x+8, this.y+19);
      vertex(this.x+8, this.y+19);
      vertex(this.x+14, this.y+27);
      vertex(this.x+21,this.y+19)
    endShape()
  pop()
  pop()
}
p5.prototype.dirIcon=function(dir,x,y,corP){
  this.x=x;
  this.y=y;
  
  
  push()
  if(corP==null) corP="#B5B6B4"
  
  colorMode(HSB)
  colorP = color(hue(corP), saturation(corP), map(8, 0, 10, brightness(corP), 0))
  if(dir=="LFT"){
  push()
      noFill()
      stroke(colorP)
      
      strokeWeight(6)
      strokeJoin(ROUND)
      push()
      beginShape();
      
      stroke(colorP)
      vertex(this.x+14.5,this.y+22.5)
      vertex(this.x+34.5,this.y+22.5)
      endShape();
      pop() 
      beginShape();
      vertex(this.x+16.5, this.y+15);
      vertex(this.x+10.5, this.y+22.5);
      vertex(this.x+16.5, this.y+30);
      endShape()

    pop()}
  else if(dir=="RGT"){
  push()
      noFill()
      stroke(colorP)
      
      strokeWeight(6)
      strokeJoin(ROUND)
      push()
      beginShape();
      
      stroke(colorP)
      vertex(this.x+13,this.y+22.5)
      vertex(this.x+33,this.y+22.5)
      endShape();
      pop() 
      beginShape();
      vertex(this.x+31, this.y+15);
      vertex(this.x+37, this.y+22.5);
      vertex(this.x+31, this.y+30);
      endShape()

    pop()
}
  else if(dir=="DWN"){
    push()
      noFill()
      stroke(colorP)
      
      strokeWeight(6)
      strokeJoin(ROUND)
      push()
      beginShape();
      
      stroke(colorP)
      vertex(this.x+24,this.y+10)
      vertex(this.x+24,this.y+35)
      endShape();
      pop() 
      beginShape();
      vertex(this.x+15, this.y+28);
      vertex(this.x+24, this.y+37);
      vertex(this.x+33, this.y+28);
      endShape()

    pop()
  }
  else if(dir=="UP"){
    push()
      noFill()
      stroke(colorP)
      
      strokeWeight(6)
      strokeJoin(ROUND)
      push()
      beginShape();
      
      stroke(colorP)
      vertex(x+24,y+10)
      vertex(x+24,y+35)
      endShape();
      pop() 
      beginShape();
      vertex(x+15, y+17);
      vertex(x+24, y+8);
      vertex(x+33, y+17);
      endShape()

    pop()
  }
  pop()
}
