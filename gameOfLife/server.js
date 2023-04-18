var express = require("express")
var app = express()

var server = require("http").Server(app);
var io = require("socket.io")(server);
var fs = require("fs")

app.use(express.static("."));

app.get("/", function (req, res) {
    res.redirect("index.html")
})

server.listen(3000, function () {
    console.log("server is run");
})


function matrixGenerator(matrixSize, grass, grassEater, predator, kaxin, skyur, banan, kapik) {
    var matrix = []
    ////  matrix սարքելու հատված
    for (let i = 0; i < matrixSize; i++) {
        matrix.push([])
        for (let j = 0; j < matrixSize; j++) {
            matrix[i].push(0)
        }
    }

    // 1 -եր այսինքն խոտեր քցելու հատված մատռիքսում
    for (let i = 0; i < grass; i++) {
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)
        matrix[y][x] = 1
    }
    //GrassEater 2

    for (let i = 0; i < grassEater; i++) {
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)
        matrix[y][x] = 2
    }
    //3 predator


    for (let i = 0; i < predator; i++) {
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)
        matrix[y][x] = 3
    }

    // kaxin  4

    for (let i = 0; i < kaxin; i++) {
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)
        matrix[y][x] = 4
    }

    // skyur 5

    for (let i = 0; i < skyur; i++) {
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)
        matrix[y][x] = 5
    }

    // kapik 7

    for (let i = 0; i < kapik; i++) {
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)
        matrix[y][x] = 7
    }

    // banan 6

    for (let i = 0; i < banan; i++) {
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)
        matrix[y][x] = 6
    }



    return matrix
}

matrix = matrixGenerator(20, 17, 7, 4, 20, 20, 20, 30,)


io.sockets.emit("send matrix", matrix)


grassArr = []
grassEaterArr = []
predatorArr = []
kaxinArr = []
skyurArr = []
bananArr = []
kapikArr = []


//moduls
Grass = require("./grass")
GrassEater = require("./grassEater")
Predator = require("./predator")
Banan = require("./banan")
Kapik = require("./kapik")
Kaxin = require("./kaxin")
Skyur = require("./skyur")



function createObject() {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let grass = new Grass(x, y)

                grassArr.push(grass)


            } else if (matrix[y][x] == 2) {
                let grEat = new GrassEater(x, y)
                grassEaterArr.push(grEat)
            } else if (matrix[y][x] == 3) {
                let pre = new Predator(x, y)
                predatorArr.push(pre)
            } else if (matrix[y][x] == 4) {
                let kx = new Kaxin(x, y)
                kaxinArr.push(kx)
            } else if (matrix[y][x] == 5) {
                let sk = new Skyur(x, y)
                skyurArr.push(sk)
            } else if (matrix[y][x] == 6) {
                let bn = new Banan(x, y)
                bananArr.push(bn)
            } else if (matrix[y][x] == 7) {
                let kp = new Kapik(x, y)
                kapikArr.push(kp)
            }
        }
    }
}

matrix = matrixGenerator(20, 17, 7, 4, 20, 20, 20, 30,)