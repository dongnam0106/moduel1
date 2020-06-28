let bird = function(game){
    this.game       = game;
    this.x          = 0;
    this.y          = 0;
    this.img        = null;
    this.visible    = true;
    this.addedScore = false;

    let self = this;

    this.init = function(){
            this.img = this.game.resource.bird.img;
        let positions = [78, 178, 278, 378];
        this.x = positions[this.getRandomInt(0, 3)];
    };

    this.getRandomInt = function(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    this.update = function(){

        if (this.y <= 700){
            this.y += 50;
        }

        this.checkInTiger();
    };

    this.checkInTiger = function(){
        if (
            (this.x > this.game.tiger.x) &&
            (this.x < (this.game.tiger.x + this.game.resource.tiger.img.width)) &&
            (this.y >= 700)
        ){
            this.visible = false;
            if (this.addedScore === false){
                this.game.score += this.type;
                this.addedScore = true;
            }
        }
    };

    this.draw = function(){
        if (this.visible){
            this.game.context.drawImage(
                self.img,
                this.x - (this.img.width / 2),
                this.y
            );
        }
    }
};
