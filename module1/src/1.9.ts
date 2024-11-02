{
    // Type Alias
    type Student={
        name:string;
        age:number;
        contactNo?:string;
        gender:string;
        address:string;
    }
    const student1:Student={
        name:"Mohammad",
        age:50,
        gender:"male",
        contactNo:"0190000",
        address:"Syl"
    };
    const student2:Student={
       name:"Maida",
       age:22,
       gender:"female",
       address:"dhk"
    };

    // function
    type Add=(num1:number,num2:number)=>number;
    const add:Add=(num1,num2)=>num1+num2;
}