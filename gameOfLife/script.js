
let side = 30
///օբյեկտներ պահելու զանգվածներ
var grassArr = []
var grassEaterArr = []
var predatorArr = []
var kaxinArr = []
var skyurArr = []
var bananArr = []
var kapikArr = []



function setup() {
        createCanvas(20 * side, 20 * side)

}
function draw() {
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



        for (let i in grassArr) {
                grassArr[i].mul()
        }


        for (let i in grassEaterArr) {
                grassEaterArr[i].eat()
        }



        for (let i in predatorArr) {
                predatorArr[i].eat()
        }

        for (let i in kaxinArr) {
                kaxinArr[i].mul()
        }


        for (let i in skyurArr) {
                skyurArr[i].eat()
        }

        for (let i in bananArr) {
                bananArr[i].mul()
        }

        for (let i in kapikArr) {
                kapikArr[i].eat()
        }
}
