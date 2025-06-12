var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");
var mouseX = 0;
var mouseY = 0;
var enemigos = [];
var balas = [];

var render = () => {
  let fondo = new Image();
  fondo.src = "./assets/fondo.png";
  fondo.onload = () => {
    ctx.drawImage(fondo, 0, 0, 800, 1000);
  };

  let nave = new Image();
  nave.src = "./assets/naveAtaque.png";
  nave.onload = () => {
    ctx.drawImage(nave, mouseX, mouseY, 50, 50);
  };

  
};

for (let n = 0; n < enemigos.length; n++) {
  let img = new Image();
  img.src = "./assets/naveEnemigo.png";
  ctx.drawImage(img, enemigos[n].x, (enemigos[n].y += 1), 50, 50);

  if (enemigos[n].y > 800) {
    enemigos.splice(n, 1);
  }
}

var gameLoop = () => {
  render();
  requestAnimationFrame(() => gameLoop());
};

var detectarMov = (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
};

var tareaProg = () => {
  setInterval(() => {
    enemigos.push({ x: Math.floor(Math.random() * 780) + 20, y: 0 });
  }, 800);
  console.log(enemigos);
};

var disparo = () => {
  balas.push({ x: mouseX, y: mouseY });
};



for (let n = 0; n < balas.length; n++) {
  let img = new Image();
  img.src = "./assets/bala.png";
  ctx.drawImage(img, balas[n].x, balas[n], y, 40, 40);
}

tareaProg();
gameLoop();
