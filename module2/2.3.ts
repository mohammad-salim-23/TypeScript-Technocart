{
    // generic type
     type GenericArray<T> = Array<T>;
    //  const rollNumbers:number[]=[3,6,8]
       const rollNumbers:GenericArray<number>=[1,2,3];
    // const mentors:string[]=["Mr.X","Mr.Y"];
    const mentors:GenericArray<string>=["Mr.X","Mr.Y"];

    // array of object using generic
    const user:GenericArray<{name:string;age:number}>=[
        {
            name:"Hadi",
            age:202,
        },{
            name:"Salim",
            age:20,
        }
    ]
//   generic tuple
type GenericTuple<X,Y>=[X,Y];
const manus:GenericTuple<string,string>=["Mr.X","Mr.Y"]
const UserWithID=[1234,{name:'salim',email:'a@gmail.com'}]
    // 
}