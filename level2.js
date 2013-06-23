var c1 = CodeMirror.fromTextArea(document.getElementById("code1"), {readOnly: 'nocursor'});
var c2 = CodeMirror.fromTextArea(document.getElementById("code2"), {readOnly: 'nocursor'});
var c3 = CodeMirror.fromTextArea(document.getElementById("code3"));

var background = document.getElementById("background").getContext("2d");
background.fillStyle = "#afa";
background.fillRect (230, 230, 40, 270);

try{
 eval(c1.getValue() + ";game.gravity = function(){};" + c2.getValue() + c3.getValue());
}
catch(e){
  console.log(e);
}

document.getElementById("code").onkeyup = function(){
  try{
    game.gravity = function(){}
    eval(c3.getValue());
  }
  catch(e){
    console.log(e);
  }
};
var orig_drawImage = CanvasRenderingContext2D.prototype.drawImage;
CanvasRenderingContext2D.prototype.drawImage = function(a,x,y,u,v){
  orig_drawImage.apply(this, arguments);
  if(x == 235 && y == 495){
    alert("well done! next level!");
    window.location = "level3.html";
  }
};

// answer: game.gravity = function(){game.hero.y += game.gravityspeed}