let LivingCreature = require("./LivingCreature")

module.exports = class Banan extends LivingCreature{
    constructor(x,y){
       super(x,y)
        this.multiply = 0
  
    
    }



   mul(){
    this.multiply++
     let emptyCell = this.chooseCell(0)
     let newCell = emptyCell[Math.floor(Math.random() * emptyCell.length)]
 
     if(newCell && this.multiply >= 5){
                let newX  =   newCell[0]
                let newY  =   newCell[1]

                matrix[newY][newX] = 6

                let banan = new Banan(newX,newY)
                bananArr.push(banan)


                this.multiply = 0


     }
     
}

}