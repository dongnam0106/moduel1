/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size){
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;

  this.getHeroElement = function(){
    return '<img width="'+ this.size + '"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
  }

  this.moveRight = function(){
    this.left += Math.random()*100;
    console.log('ok: ' + this.left);
  }
  this.moveLeft = function(){
    this.left += Math.random()*(-1000);
    console.log('ok: ' + this.left);
  }
  this.moveDown = function(){
    this.top += Math.random()*100;
    console.log('ok: ' + this.top);
  }
  this.moveUp = function(){
    this.top += Math.random()*(-700);
    console.log('ok: ' + this.top);
  }
}

var hero = new Hero('luffy.png', 20, 30, 200);

function start() {
  if (hero.left < window.innerWidth - hero.size) {
    hero.moveRight();
  }else{
    hero.moveLeft();
  }
  if (hero.top < window.innerHeight - hero.size) {
    hero.moveDown();
  } else {
    hero.moveUp();
  }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 500)
}

start();