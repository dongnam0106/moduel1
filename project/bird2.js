const NAZI_WIDTH = 40;
const NAZI_HEIGHT = 40;
let birdGroup = [];
function bird(xPos, yPos, width, height, speed) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.width = width;
    this.height = height;
    this.isLive = true;
    this.speed = speed;
}

bird.prototype.show = function () {
    let birdImg = document.getElementById("naziPlaneImg");
    ctx.drawImage(naziPlaneImg, this.xPos, this.yPos, NAZI_WIDTH, NAZI_HEIGHT);
};

bird.prototype.move = function () {
    this.yPos += this.speed;
}

function createBirdGroup() {
    let temSpeed = Math.random()*1.3 + 0.5;
    let temXPos = Math.random() * (canvas.width - NAZI_WIDTH - 1);
    let temYPos = Math.random() * -5 * canvas.height - NAZI_HEIGHT/2 ;
    let birdPlane = new bird(temXPos,temYPos,NAZI_WIDTH, NAZI_HEIGHT, temSpeed);
    birdGroup.push(birdPlane);
    birdGroup[i].show();
}
