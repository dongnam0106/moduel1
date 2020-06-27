
var game = function () {
    this.canvas = null;
    this.width = 500;
    this.height = 700;

    this.bird= null;
    this.bg = null;

    var self = this;

    this.init = function () {
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        document.body.appendChild(this.canvas);

        this.bird = new bird(this);
        this.bird.init();

        this.bg = new backGround(this);
        this.bg.init();

        this.loop();
    }

    this.loop = function () {
        self.update();
        self.draw();
        setInterval(self.loop, 33);
    }

    this.update = function () {
        this.bird.update();
        this.bg.update();
    }
    this.draw = function () {
        this.bird.draw();
        this.bg.draw();
    }

}

var g = new game();
g.init();