var socket = io()
var side = 30
///օբյեկտներ պահելու զանգվածներ



function setup() {
        createCanvas(20 * side, 20 * side)
        background("#acacac");
}socket.on("Winter", function (data) {
        weath = data;
    })
    socket.on("Summer", function (data) {
        weath = data;
    })
    socket.on("Spring", function (data) {
        weath = data;
    })
    socket.on("Autumn", function (data) {
        weath = data;
    })
     var weath = "spring";



function nkarel(matrix) {
        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[y].length; x++) {
                        var toBot = side - side * 0.3
                        textSize(toBot);

                        if (matrix[y][x] == 1) {
                                if (weath == "spring") {
                                    fill("darkgreen");
                                    rect(x * side, y * side, side, side);
                                text('☘️', x * side, y * side + toBot);
                                }
                                else if (weath == "summer") {
                                    fill("#79a83b");
                                    rect(x * side, y * side, side, side);
                                text('☘️', x * side, y * side + toBot);
                                }
                                else if (weath == "autumn") {
                                    fill("#ff8453");
                                    rect(x * side, y * side, side, side);
                                text('☘️', x * side, y * side + toBot);
                                }
                                else if (weath == "winter") {
                                    fill("#ffffff");
                                    rect(x * side, y * side, side, side);
                                text('☘️', x * side, y * side + toBot);
                                }
                            }
                            if(matrix[y][x]== 5){
                                if(weath == "spring"){
                                        fill("#694940");
                                        rect(x * side, y * side, side, side);
                                        text('🐿', x * side, y * side + toBot);
                                }else if( weath == "winter"){
                                        fill("white");
                                        rect(x * side, y * side, side, side);
                                        text('🐿', x * side, y * side + toBot);
                                }

                            }
                        
                     
                        if (matrix[y][x] == 0) {
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

socket.on("send matrix", nkarel)

function Winter(){
        socket.emit("winter");
}
function Summer(){
        socket.emit("summer")
}
function Spring(){
        socket.emit("spring")
}
function Autumn(){
        socket.emit("autumn")
}
function addGrass() {
        socket.emit("addGrass");
}
function killall() {
        socket.emit("killall");
}
function addGrassEater() {
        socket.emit("addGrassEater");
}
function addPredator() {
        socket.emit("addPredator");
}
function addKaxin() {
        socket.emit("addKaxin");
}
function addSkyur() {
        socket.emit("addSkyur");
}
function addBanan() {
        socket.emit("addBanan");
}
function addKapik() {
        socket.emit("addKapik");

}