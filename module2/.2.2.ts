{
    // Type Vs Interface
     
    type User1={
        name:string;
        age:number;
    };
    // primitive data type er ketre interface use kora jabe na  tokon Type Alias use korbo

    type rollNumber = number;
    
 
    
    // type alias e intersection
    type UserWithRole1 = User1 & {role:string}
    const user1:UserWithRole1={
        name:"Marjia",
        age:15,
        role:"Manager"
    };
    // interface with extends
    interface User2{
        name:string;
        age:number;
    }
    interface UserWithRole2 extends User2{
        role:string,
    }
    const user2:UserWithRole2={
        name:"Marjia",
        age:15,
        role:"Manager"
    };
    // const user1:User1|User2={
    //     name:"persian",
    //     age:100,
    // }

//   js -->object,array->object,function->object
  type Roll1=number[];
  interface Roll2{
    [index:number]:number
  }
 const rollNumber1:Roll2=[1,2,3]
 type Add1 = (num1:number,num2:number)=>number
  
 interface Add2{
    (num1:number,num2:number):number
 }
 const add:Add2=(num1,num2)=>num1+num2;

    // 
}