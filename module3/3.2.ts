{
    // inheritance->babar sompotti celer kace transfer korar way
    class Parent{
        name:string;
        age:number;
        address:string;

        constructor(name:string,age:number,address:string){
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getSleep(numOfHours:number){
            console.log(`${this.name} will sleep for ${numOfHours}`);
        }
    }
    class Student extends Parent{
        constructor(name:string,age:number,address:string){
         super(name,age,address);
        }
    }
    const student1 = new Student("Mr. Student",20,"Uganda");
    student1.getSleep(6);
    class Teacher extends Parent{
        designation:string;
        constructor(name:string,age:number,address:string,designation:string){
            super(name,age,address);
            this.designation = designation;
        }
        // method
        takeClass(numOfClass:number){
            console.log(`${this.name} will take ${numOfClass}`);
        }
    }
    const teacher1 = new Teacher("Mr. Teacher",40,"Uganda","professor");

}