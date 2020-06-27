var backGround = function (game) {
        this.game = game;
        this.image = null;
        this.loaded = false;

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

        }
}