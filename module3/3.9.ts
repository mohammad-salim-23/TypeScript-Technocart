{
    // abstraction: 1.interface 2.abstract
    // idea
    interface Vehicle1{
        startEngine():void;
        stopEngine():void;
        move():void;
    }
    // real implementation
    class Car implements Vehicle1{
        startEngine(): void {
            console.log(`I am startig the car engine`);
        }
        stopEngine(): void {
            console.log("I am stopping thee car engine");
        }
        move():void{
            console.log("I am moving the car")
        }
        test(){
            console.log("I am just testing");
        }

    }

//   abstract class
    abstract class Car2{
       abstract startEngine():void
        abstract stopEngine(): void
       abstract  move():void
       test(){
        console.log("I am just testing");
    }
    }
class ToyotaCar extends Car2{
    startEngine(): void {
        console.log(`I am startig the car engine`);
    }
    stopEngine(): void {
        console.log("I am stopping thee car engine");
    }
    move():void{
        console.log("I am moving the car")
    }
}
const toyotaCar = new ToyotaCar();
  toyotaCar.startEngine();

}