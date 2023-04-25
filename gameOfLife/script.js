var socket = io()
var side = 30
///օբյեկտներ պահելու զանգվածներ



function setup() {
        createCanvas(20 * side, 20 * side)
        background("#acacac");
}



function nkarel(matrix) {
        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[y].length; x++) {
                        var toBot = side - side * 0.3
                        textSize(toBot);
                        if (matrix[y][x] == 1) {
                                fill("green");
                                rect(x * side, y * side, side, side);
                                text('☘️', x * side, y * side + toBot);
                        }
                        else if (matrix[y][x] == 0) {
                                fill("#acacac");
                                rect(x * side, y * side, side, side);
                        }
                        else if (matrix[y][x] == 2) {
                                fill("yellow");
                                rect(x * side, y * side, side, side);
                                text('🐄', x * side, y * side + toBot);
                        }
                        else if (matrix[y][x] == 3) {
                                fill("red");
                                rect(x * side, y * side, side, side);
                                text('🐆', x * side, y * side + toBot);
                        }
                        else if (matrix[y][x] == 4) {
                                fill("brown");
                                rect(x * side, y * side, side, side);
                                text('🌰', x * side, y * side + toBot);
                        }
                        else if (matrix[y][x] == 5) {
                                fill("White");
                                rect(x * side, y * side, side, side);
                                text('🐿', x * side, y * side + toBot);
                        }
                        else if (matrix[y][x] == 6) {
                                fill("orange");
                                rect(x * side, y * side, side, side);
                                text('🍌', x * side, y * side + toBot);
                        } else if (matrix[y][x] == 7) {
                                fill("black");
                                rect(x * side, y * side, side, side);
                                text('🐵', x * side, y * side + toBot);
                        }



                }
        }



       
}

socket.on("send matrix",nkarel)

function addGrass(){
        socket.emit("addGrass");
    }
    function addGrassEater(){
        socket.emit("addGrassEater");
    }
    function addPredator(){
        socket.emit("addPredator");
    }
    function addKaxin(){
        socket.emit("addKaxin");
    }
    function addSkyur(){
        socket.emit("addSkyur");
    }
    function addBanan(){
        socket.emit("addBanan");
    }
    function addKapik(){
        socket.emit("addKapik");
    
    }