cv = document.getElementById("cnv");
c = cv.getContext("2d");

function drawComrade(x, y){
  c.fillStyle = "blue";
  c.rect(x-20, y+3, 40, 50);
  c.fill();

  c.fillStyle = "tan";
  c.beginPath();
  c.arc(x, y, 16, 0, 2 * Math.PI);
  c.fill();

  c.fillStyle = "blue";
  c.beginPath();
  c.arc(x-5, y-5, 3, 0, 2 * Math.PI);
  c.fill();
  
  c.arc(x+5, y-5, 3, 0, 2 * Math.PI);
  c.fill();
}

function drawCriminal(x, y){
  c.fillStyle = "red";
  c.rect(x-20, y+3, 40, 50);
  c.fill();

  c.fillStyle = "tan";
  c.beginPath();
  c.arc(x, y, 16, 0, 2 * Math.PI);
  c.fill();

  c.fillStyle = "blue";
  c.beginPath();
  c.arc(x-5, y-5, 3, 0, 2 * Math.PI);
  c.fill();
  
  c.arc(x+5, y-5, 3, 0, 2 * Math.PI);
  c.fill();
}

function randomCriminal(){
  let bad = Math.random()*10;
  
  if(bad <= 1)
    drawCriminal(40, 17);
  else if(bad > 1 && bad <= 2)
     drawCriminal(130, 17);
  else if(bad > 2 && bad <= 3)
     drawCriminal(220, 17);
  else if(bad > 3 && bad <= 4)
     drawCriminal(310, 17);
  else if(bad > 4 && bad <= 5)
     drawCriminal(400, 17);
  else if(bad > 5 && bad <= 6)
     drawCriminal(40, 100);
  else if(bad > 6 && bad <= 7)
     drawCriminal(130, 100);
  else if(bad > 7 && bad <= 8)
     drawCriminal(220, 100);
  else if(bad > 8 && bad <= 9)
     drawCriminal(310, 100);
  else
    drawCriminal(400, 100);
}

function mouseHandler(event){
  var x = event.clientX;
  var y = event.clientY;
  
  if(x<94&&y<72)
    drawComrade(40, 17);
  else if(x>94&&x<188&&y<72)
    drawComrade(130, 17);
  else if(x>188&&x<282&&y<72)
    drawComrade(220, 17);
  else if(x>282&&x<376&&y<72)
    drawComrade(310, 17);
  else if(x>376&&y<72)
    drawComrade(400, 17);
  else if(x<94&&y>72)
    drawComrade(40, 100);
  else if(x>94&&x<188&&y>72)
    drawComrade(130, 100);
  else if(x>188&&x<282&&y>72)
    drawComrade(220, 100);
  else if(x>282&&x<376&&y>72)
    drawComrade(310, 100);
  else if(x>376&&y>72)
    drawComrade(400, 100);
  
  randomCriminal();
}

drawComrade(40, 17);
drawComrade(130, 17);
drawComrade(220, 17);
drawComrade(310, 17);
drawComrade(400, 17);

drawComrade(40, 100);
drawComrade(130, 100);
drawComrade(220, 100);
drawComrade(310, 100);
drawComrade(400, 100);

c.fillStyle = "blue";
  c.beginPath();
  c.arc(400-5, 100-5, 3, 0, 2 * Math.PI);
  c.fill();
  
  c.arc(100+5, 400-5, 3, 0, 2 * Math.PI);
  c.fill();

randomCriminal();
