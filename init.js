function startGame() {
    GamePiece1 = new component(32, 32, "black", 210, 240);
    GamePiece2 = new component(32, 32, "red", 530, 240);
    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 640;
        this.canvas.height = 480;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
        window.addEventListener('keydown', function (e) {
            e.preventDefault();
            myGameArea.keys = (myGameArea.keys || []);
            myGameArea.keys[e.keyCode] = (e.type == "keydown");
        })
        window.addEventListener('keyup', function (e) {
            myGameArea.keys[e.keyCode] = (e.type == "keydown");
        })
    },
    stop : function() {
        clearInterval(this.interval);
    },    
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component(width, height, color, x, y, type) {
    this.type = type;
    this.width = width;
    this.height = height;
    this.speed = 0;
    this.angle = 0;
    this.moveAngle = 0;
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = myGameArea.context;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.fillStyle = color;
        ctx.fillRect(this.width / -2, this.height / -2, this.width, this.height);
        ctx.restore();    
    }
    this.newPos = function() {
        this.angle += this.moveAngle * Math.PI / 180;
        let newx = this.x + this.speed * Math.sin(this.angle);
        let newy = this.y - this.speed * Math.cos(this.angle);
	if (newx >= this.width / 2 && this.width / 2 + newx <= myGameArea.canvas.width){ 
		this.x = newx
	}
	if (newy > this.height / 2 && this.height / 2 + newy <= myGameArea.canvas.height){
		this.y = newy
	}
    }
}

function updateGameArea() {
    myGameArea.clear();
    GamePiece1.moveAngle = 0;
    GamePiece1.speed = 0;
    GamePiece2.moveAngle = 0;
    GamePiece2.speed = 0;
    if (myGameArea.keys && myGameArea.keys[37]) {GamePiece1.moveAngle = -6; }
    if (myGameArea.keys && myGameArea.keys[39]) {GamePiece1.moveAngle = 6; }
    if (myGameArea.keys && myGameArea.keys[38]) {GamePiece1.speed= 2; }
    if (myGameArea.keys && myGameArea.keys[40]) {GamePiece1.speed= -2; }
    if (myGameArea.keys && myGameArea.keys[65]) {GamePiece2.moveAngle = -6; }
    if (myGameArea.keys && myGameArea.keys[68]) {GamePiece2.moveAngle = 6; }
    if (myGameArea.keys && myGameArea.keys[87]) {GamePiece2.speed= 2; }
    if (myGameArea.keys && myGameArea.keys[83]) {GamePiece2.speed= -2; }
    GamePiece1.newPos();
    GamePiece1.update();
    GamePiece2.newPos();
    GamePiece2.update();
}
