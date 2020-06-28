let gameImage = function (name) {
    this.img = null;
    this.name = name;
    this.loaded = false;
    let self = this;

    this.load = function () {
        this.img = new Image();
        this.img.onload = function () {
            self.loaded = true;
        };
        this.img.src = 'imgs/' + name + '.png';
    }
};

let resource = function (game) {
    this.game = game;
    this.tiger = new gameImage('tiger');
    this.bird = new gameImage('bird');
    let self = this;

    this.load = function () {
        this.tiger.load();
        this.bird.load();

        setInterval(function () {
            self.checkAllImageLoaded();
        }, 500)
    };

    this.checkAllImageLoaded = function () {
        if (
            (this.tiger.loaded) &&
            (this.bird.loaded)
        ) {
            this.game.resourceLoaded = true;
        }
    }
};