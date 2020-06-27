var backGround = function (game) {
        this.game = game;
        this.image = null;
        this.loaded = false;

        var self = this;

        this.init = function () {
            this.loadImage();
        }

        this.loadImage= function () {
            this.image = new Image();
            this.image.onload = function () {
                self.loaded = true;
                console.log('ahihi');
            }
            this.image.src = 'imgs/background.jpg';
        }

        this.update = function () {

        }

        this.draw = function () {
            console.log('drawing bg');
            if(this.loaded == false){
                return;
            }
            self.game.context.drawImage(this.image,0,0);
        }
}