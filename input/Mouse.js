function handleMouseMove(evt){
    let x = evt.pageX;
    let y = evt.pageY;

    Mouse.position = new Vector2(x, y);
}

function handleMouseDown(evt){
    handleMouseMove(evt);

    if (evt.which === 1) {
        if (!Mouse._left.down)
            Mouse._left.pressed = true;
        Mouse._left.down = true;
    } else if (evt.which === 2) {
        if (!Mouse._middle.down)
            Mouse._middle.pressed = true;
        Mouse._middle.down = true;
    } else if (evt.which === 3) {
        if (!Mouse._right.down)
            Mouse._right.pressed = true;
        Mouse._right.down = true;
    }
}

function handleMouseUp(evt){
    handleMouseMove(evt);
    if(evt.which == 1)
        Mouse.left.down = false;
    else if (evt.which == 2)
        Mouse.middle.down = false;
    else if(evt.which == 3)
        Mouse.right.down = false;
}

function MouseHandler(){
    this.left = new ButtonState();
    this.middle = new ButtonState();
    this.right = new ButtonState();

    this.position = new Vector2()

    document.onmousemove = handleMouseMove;
    document.onmousemove = handleMouseDown;
    document.onmousemove = handleMouseUp;
}

MouseHandler.prototype.reset = function(){
    this.left.pressed = false;
    this.middle.pressed = false;
    this.right.pressed = false;
}

let Mouse = new MouseHandler();
