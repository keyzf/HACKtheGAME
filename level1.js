var c1 = CodeMirror.fromTextArea(document.getElementById("code1"), {readOnly: 'nocursor'});
var c2 = CodeMirror.fromTextArea(document.getElementById("code2"));

var background = document.getElementById("background").getContext("2d");
background.fillStyle = "#afa";
background.fillRect (230, 230, 40, 40);

eval(c1.getValue());
eval(c2.getValue());
document.getElementById("code").onkeyup = function(){
  game.ctx.clearRect (0,0,500,500);
  try {
    eval(c2.getValue());
    game.draw();
  }
  catch(e){
    //console.log(e)
  }
};
var orig_drawImage = CanvasRenderingContext2D.prototype.drawImage;
CanvasRenderingContext2D.prototype.drawImage = function(a,x,y,u,v){
  orig_drawImage.apply(this, arguments);
  if(x == 235 && y == 235){
    alert("bravo! Let's go to the second level!");
    window.location = "level2.html";
  }
};

// answer: game.draw = function(){game.ctx.drawImage(game.hero.idle, 235, 235);}