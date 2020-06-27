
var game = function () {
    this.canvas = null;
    this.width = 900;
    this.height = 1600;

    this.bird= null;

    var self = this;

    this.init = function () {
        this.canvas = document.createElement('canvas');
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        document.body.appendChild(this.canvas);
        this.bird = new bird(this);
        this.loop();
    }

    this.loop = function () {
        self.update();
        self.draw();
        setInterval(self.loop, 33);
    }

    this.update = function () {
        this.bird.update();
    }
    this.draw = function () {
        this.bird.draw();
    }

}

var g = new game();
g.init();