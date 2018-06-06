let sprites = {};
let assetsStillLoading = 0;

function assetsLoadingLoop(callback){

    if(assetsStillLoading){
        requestAnimationFrame(assetsLoadingLoop.bind(this,callback));
    }
    else{
        callback();
    }

}

function loadAssets(callback){

    function loadSprite(fileName){
        assetsStillLoading++;

        let spriteImage = new Image();
        spriteImage.src = "./assets/sprites/" + fileName;

        spriteImage.onload = function(){
            assetsStillLoading--;
        }

        return spriteImage;
    }

    sprites.background = loadSprite('spr_background4.png');
    sprites.stick = loadSprite('spr_stick.png');
    sprites.whiteBall = loadSprite('spr_ball2.png');
    sprites.oneBall = loadSprite('spr_ball2.png');
    sprites.twoBall = loadSprite('spr_ball2.png');
    sprites.threeBall = loadSprite('spr_ball2.png');
    sprites.fourBall = loadSprite('spr_ball2.png');
    sprites.fiveBall = loadSprite('spr_ball2.png');
    sprites.sixBall = loadSprite('spr_ball2.png');
    sprites.sevenBall = loadSprite('spr_ball2.png');
    sprites.eightBall = loadSprite('spr_ball2.png');
    sprites.nineBall = loadSprite('spr_ball2.png');
    assetsLoadingLoop(callback);

}

function getBallSpriteByColor(color){
    switch(color){
        case COLOR.YELLOW:
            return sprites.redBall;
        case COLOR.BLUE:
            return sprites.redBall;
        case COLOR.RED:
            return sprites.redBall;
        case COLOR.PINK:
            return sprites.redBall;
        case COLOR.ORANGE:
            return sprites.redBall;
        case COLOR.GREEN:
            return sprites.redBall;
        case COLOR.BROWN:
            return sprites.redBall;
        case COLOR.BLACK:
            return sprites.redBall;
        case COLOR.WHITEYELLOW:
            return sprites.redBall;
    }
}
