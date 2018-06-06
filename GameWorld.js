const DELTA = 1/100;

function GameWorld(){

    this.whiteBall = new Ball(new Vector2(413, 413), COLOR.WHITE);
    this.stick = new Stick(new Vector2(413, 413,), this.whiteBall.shoot);
    this.whiteBall.shoot.bind(this.whiteBall);
}

GameWorld.prototype.update = function(){

    this.stick.update();
    this.whiteBall.update(DELTA);
    if(!this.ballsMoving() && this.stick.shot){
        this.stick.reposition(this.whiteBall.position);
    }

}
GameWorld.prototype.draw = function(){
    Canvas.drawImage(sprites.background, {x:0, y:0});
    this.stick.draw();
    this.whiteBall.draw();
}

GameWorld.prototype.ballsMoving = function(){
    return this.whiteBall.moving;
}
