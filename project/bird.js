const NAZI_WIDTH = 20;
const NAZI_HEIGHT = 20;
let birdGr= [];
let bird = function(game){
    this.game       = game;
    this.x          = 0;
    this.y          = 0;
   // this.speed      = speed;
    this.img        = null;
    this.visible    = true;
    this.addedScore = false;
    this.width = 20;
    this.height = 20;

    let self = this;

    this.init = function(){
        this.img = this.game.resource.bird.img;
        this.game.context.drawImage(this.img, this.x, this.y, this.width, this.height);
        //let img = document.getElementById("naziPlaneImg");
        let positions = [78, 178, 278, 378];
        this.x = positions[this.getRandomInt(0, 3)];
        // this.game.context.drawImage(this.img, this.x, this.y, NAZI_WIDTH, NAZI_HEIGHT);
        // console.log(img);
        // console.log(drawImage);
    };

    this.getRandomInt = function(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    // function bird(){
    //     let temSpeed = Math.random()*1.3 + 0.5;
    //     let temXPos = Math.random() * (canvas.width - NAZI_WIDTH - 1);
    //     let temYPos = Math.random() * -5 * canvas.height - NAZI_HEIGHT/2 ;
    //     let naziPlane = new bird(game, temXPos,temYPos,NAZI_WIDTH, NAZI_HEIGHT, temSpeed);
    //     birdGr.push(naziPlane);
    //     birdGr[i].show();
    // }

    this.game.update = function(){

        if (this.y <= 700){
            this.y += 50;
        }
        console.log("a");

       // this.checkInTiger();
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
