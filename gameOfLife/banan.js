class Banan extends LivingCreature{
    constructor(x,y){
       super(x,y)
        this.multiply = 0
  
    
    }



   mul(){
    this.multiply++
     let emptyCell = this.chooseCell(0)
     let newCell = random (emptyCell)
 
     if(newCell && this.multiply >= 20){
                let newX  =   newCell[0]
                let newY  =   newCell[1]

                matrix[newY][newX] = 6

                let banan = new Banan(newX,newY)
                bananArr.push(banan)


                this.multiply = 0


     }
     
}

}