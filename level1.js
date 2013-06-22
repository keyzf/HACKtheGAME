var c1 = CodeMirror.fromTextArea(document.getElementById("code1"), {readOnly: 'nocursor'});
var c2 = CodeMirror.fromTextArea(document.getElementById("code2"));
var c3 = CodeMirror.fromTextArea(document.getElementById("code3"), {readOnly: 'nocursor'});
eval(c1.getValue());
eval(c2.getValue());
eval(c3.getValue());
document.getElementById("code").onkeyup = function(){game.ctx.clearRect(0, 0, 500, 500); try {eval(c2.getValue())} catch(e){console.log(e)}};
var orig_drawImage = CanvasRenderingContext2D.prototype.drawImage;
var almost = false;
CanvasRenderingContext2D.prototype.drawImage = function(a,x,y,u,v) {
  orig_drawImage.apply(this, arguments);
  if(x == 250 && y == 250 && !almost) { alert("almost!"); almost = true; }
  if(x == 235 && y == 235) alert("you win!");
};