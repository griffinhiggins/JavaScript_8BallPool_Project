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
    sprites.whiteBall = loadSprite('spr_cue.png');
    sprites.redBall = loadSprite('spr_redBall2.png');
    sprites.yellowBall = loadSprite('spr_yellowBall2.png');
    sprites.blackBall  = loadSprite('spr_blackBall2.png');


    //MY GAME...
    // sprites.oneBall = loadSprite('spr_oneBall.png');
    // sprites.twoBall = loadSprite('spr_twoBall.png');
    // sprites.threeBall = loadSprite('spr_threeBall.png');
    // sprites.fourBall = loadSprite('spr_fourBall.png');
    // sprites.fiveBall = loadSprite('spr_fiveBall.png');
    // sprites.sixBall = loadSprite('spr_sixBall.png');
    // sprites.sevenBall = loadSprite('spr_sevenBall.png');
    // sprites.eightBall = loadSprite('spr_eightBall.png');
    // sprites.nineBall = loadSprite('spr_nineBall.png');
    // sprites.tenBall = loadSprite('spr_tenBall.png');
    assetsLoadingLoop(callback);

}

function getBallSpriteByColor(color){
    switch(color){
        case COLOR.RED:
            return sprites.redBall;
        case COLOR.YELLOW:
            return sprites.yellowBall;
        case COLOR.BLACK:
            return sprites.blackBall;
        case COLOR.WHITE:
            return sprites.whiteBall;

        //MY GAME
        // switch(color){
        // case COLOR.WHITE:
        //     return sprites.whiteBall;
        // case COLOR.YELLOW:
        //     return sprites.oneBall;
        // case COLOR.BLUE:
        //     return sprites.twoBall;
        // case COLOR.RED:
        //     return sprites.threeBall;
        // case COLOR.PINK:
        //     return sprites.fourBall;
        // case COLOR.ORANGE:
        //     return sprites.fiveBall;
        // case COLOR.GREEN:
        //     return sprites.sixBall;
        // case COLOR.BROWN:
        //     return sprites.sevenBall;
        // case COLOR.BLACK:
        //     return sprites.eightdBall;
        // case COLOR.WHITEYELLOW:
        //     return sprites.nineBall;
        // case COLOR.WHITEYELLOW:
        //     return sprites.tenBall;
    }
}
