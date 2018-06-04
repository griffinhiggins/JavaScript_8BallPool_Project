function Stick(){
    this.position = {x: 0, y: 400};
}

Stick.prototype.update = function(){
    this.position = Mouse.position;

    //TESTING...
    if(Mouse.left.pressed){
        console.log("Pressed left");
    }
    //TESTING...
    // this.position.x++;
}

Stick.prototype.draw = function(){
    Canvas.drawImage(sprites.stick, this.position)
}
