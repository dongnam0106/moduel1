let game = function(){
    this.canvas         = null;
    this.context        = null;
    this.resource       = null;
    this.bird           = [];
    this.tiger           = null;
    this.resourceLoaded = false;
    this.score          = 0;
    this.img = null;

    let self = this;

    this.init = function(){
        this.canvas        = document.createElement('canvas');
        this.canvas.width  = 500;
        this.canvas.height = 700;
        this.context       = this.canvas.getContext('2d');

        document.body.appendChild(this.canvas);

        this.resource = new resource(this);
        this.resource.load();

        this.tiger = new tiger(this);
        this.tiger.init();

        setInterval(self.createNewBird, 1500);

    };

    this.start = function(){
        this.loop();
    };

    this.loop = function(){
        self.update();
        self.draw();
        setTimeout(self.loop, 10);
    };

    this.update = function(){
       this.updateAllBirds();
        // for(let i = 0; i< this.canvas.height; i++){
        //     if (this.y<700){
        //         y+=10*i;
        //     }
        // }
    };

    this.updateAllBirds = function(){
        for (let i = 0; i < bird.length; i++){
            this.bird[i].update();
        }
    };

    this.draw = function(){
        self.context.fillStyle = "#E16DE3";
        self.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

        if (self.resourceLoaded == false){
            self.drawLoading();
        }
        else {
            self.drawTheWorld();
        }
    };

    this.createNewBird = function(){
        if (self.resourceLoaded){
            let newBird = new bird(self);
            newBird.init();
            self.bird.push(newBird);
        }
    };

    this.drawTheWorld = function(){
        self.drawScore();
        self.tiger.draw();
        self.drawAllBird();
    };

    this.drawAllBird = function(){
        // lặp qua từng quả trứng
        for (let i = 0; i < this.bird.length; i++){
            this.bird[i].draw();
        }
    };


    this.drawLoading = function(){
        self.context.fillStyle = '#ffffff';
        self.context.font = '30px Arial';
        self.context.fillText('Loading...', 100, 100);
    };

    this.drawScore = function(){
        self.context.fillStyle = '#ffffff';
        self.context.font = '30px Arial';
        self.context.fillText('Score: ' + this.score, 150, 200);
    }

};