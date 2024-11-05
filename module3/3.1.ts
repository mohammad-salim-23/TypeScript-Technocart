{
    // oop
    // class and object
    class Animal{
        constructor(public name:string,public species:string,public sound:string){

        }
        makeSound(){
            console.log(`The ${this.makeSound.name} says ${this.sound}`);
        }
    }
    const dog = new Animal("German shepard","dog","Ghew Ghew");
    const cat = new Animal("Persian bhai","cat","meaw meaw")
    cat.makeSound();
}