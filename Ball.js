
const BALL_ORIGIN = new Vector2(25, 25);
const BALL_DIAMETER = 38;

function Ball(position, color){
    this.position = position;
    this.velocity = new Vector2();
    this.moving = false;
    this.sprite = getBallSpriteByColor(color);
}

Ball.prototype.update = function(delta){

    this.position.addTo(this.velocity.mult(delta));

    this.velocity = this.velocity.mult(0.98);

    if(this.velocity.length() < 5){
        this.velocity = new Vector2();
        this.moving = false;
    }
}

Ball.prototype.draw = function(){
    Canvas.drawImage(this.sprite, this.position, BALL_ORIGIN);
}

Ball.prototype.shoot = function(power, rotation){
    this.velocity = new Vector2(power * Math.cos(rotation), power * Math.sin(rotation));
    this.moving = true;
}

Ball.prototype.collideWith = function(ball){
    //find the normal vector
    const n = this.position.subtract(ball.position);

    //find distance
    const dist  = n.length();

    if(dist > BALL_DIAMETER){
        return;
    }

    //find unit normal vector
    const un = n.mult(1/n.length());

    //find unit tangent vector
    const ut = new Vector2(-un.y, un.x);

    //project velocities onto the unit
    //normal and unit tangent vectors.
    const v1n = un.dot(this.velocity);
    const v1t = ut.dot(this.velocity);
    const v2n = un.dot(ball.velocity);
    const v2t = ut.dot(ball.velocity);

    //find new normal velocities
    let v1nTag = v2n;
    let v2nTag = v1n;

    //convert the scalar and tangential velocities
    //into vectors
    v1nTag = un.mult(v1nTag);
    const v1tTag = ut.mult(v1t);
    v2nTag = un.mult(v2nTag);
    const v2tTag = ut.mult(v2t);

    //Update velocities
    this.velocity = v1nTag.add(v1tTag);
    ball.velocity = v2nTag.add(v2tTag);

    this.moving = true;
    ball.moving = true;
}
