class Kaxin extends LivingCreature{
    constructor(x,y){
       super(x,y)
        this.multiply = 0
  
    
    }




   mul(){
    this.multiply++
     let emptyCell = this.chooseCell(0)
     let newCell = random (emptyCell)
 
     if(newCell && this.multiply >= 6){
                let newX  =   newCell[0]
                let newY  =   newCell[1]

                matrix[newY][newX] = 4

                let kaxin = new Kaxin(newX,newY)
                kaxinArr.push(kaxin)


                this.multiply = 0


     }
     
}

}