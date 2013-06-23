var c1 = CodeMirror.fromTextArea(document.getElementById("code1"), {readOnly: 'nocursor'});
var c2 = CodeMirror.fromTextArea(document.getElementById("code2"));

var background = document.getElementById("background").getContext("2d");
background.fillStyle = "#afa";
background.fillRect (230, 230, 40, 270);

try{
  eval(c1.getValue().replace("var game = {}", "var game = {}; \n game.gravity = function(){};") + c2.getValue());
  eval(c1.getValue().replace("var game = {};", "//var game = {}") + c2.getValue());
}
catch(e){
  console.log(e);
}

document.getElementById("code").onkeyup = function(){
  try{
    game.gravity = function(){}
    eval(c2.getValue());
  }
  catch(e){
    console.log(e);
  }
};
var steps = 0;
var orig_drawImage = CanvasRenderingContext2D.prototype.drawImage;
CanvasRenderingContext2D.prototype.drawImage = function(a,x,y,u,v){
  orig_drawImage.apply(this, arguments);
  if(x == 235 && y > 235 && y < 500){
    steps++;
    if(y == 495 && steps == 52){
      alert("well done! next level!");
      window.location = "level3.html";
    }
  }
  if(y > 500){
    y = 235;
    game.gravity = function(){};
  }
};

// answer: game.gravity = function(){game.hero.y += game.gravityspeed}