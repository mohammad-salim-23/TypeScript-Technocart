{

    const printMessage=():void=>{
        const message="hello Bhaia";
        console.log(message);
    }
    printMessage();
    // /task-2
    // const logUserDetails=(name:string,age:number,role:'admin'|'user'|
    //     'guest'='guest'
    // ):void=>{
    //     console.log(`Name: ${name}`);
    //     console.log(`Age:${age}`);
    //     console.log(`Role:${role}`);
    //     // perform a basic action based on the role
    //     switch(role){
    //         case 'admin':
    //             console.log(`${name} has administrative privileges.`);
    //             break;
    //         case 'user':
    //             console.log(`${name} is a regular user`);
    //         case 'guest':
    //             console.log(`${name} is browsing as a guest.`);
    //             break;   
    //     }
    // }
    // logUserDetails("Alice",25,"admin");
    // logUserDetails("Bob",30);
    // taskk 3
    // type Person={
    //     name:string;//Name of the person
    //     address:{
    //         street:string;
    //         city:string;
    //         country:string;

    //     };
    //     hairColor:'black'|'white';
    //     eyecolor:'brown'|'blue';
    //     income:number;
    //     expense:number;
    //     hobbies:string[];
    //     familyMembers:{
    //         relation:'parent'|'child'|'brother';
    //         name:string;
    //         age:number;
    //     }[];
    //     job:{
    //         title:string;
    //         company:string;
    //         yearsOfExperience:number;
    //     };
    //     skills:string[];
    //     friends:{
    //         name:string;
    //         age:number;
    //         relation?:'close'|'colleague';
    //     }[],
    // }
    // // Example usage of the Person type alias
    // const person1:Person={
    //     name:'Maida',
    //     address:{
    //         street:"Sylhet",
    //         city:"Mira",
    //         country:"USA"

    //     },
    //     hairColor:"black",
    //     eyecolor:"blue",
    //     income:0,
    //     expense:20000,
    //     hobbies:["reading","cooking"],
    //     familyMembers:[
    //         {relation:"brother",name:"Muaj",age:16},
    //     ],
    //     job:{
    //         title:"Software Engineer",
    //         company:"TechCrop",
    //         yearsOfExperience:2,
    //     },
    //     skills:["JavaScript","TypeScript"],
    //     friends:[
            
    //             { name: "Alice", age: 28, relation: "close" },
    //     { name: "Bob", age: 32, relation: "colleague" },
            
    //     ],
    // }
    // console.log(person1);

    // task->4
    interface Book{
        title:string,
        author:string,
        publicationYear:number;
        genre:string;
    }
    interface Magazine{
        title:string;
        issueNumber:number;
        month:string;
        editor:string;
    }
    // union type
//    type BookOrMagazine = Book|Magazine;
//     //Intersection
//    type BookAndMagazine = Book & Magazine;
//   const myBook: BookOrMagazine={
//     title:"TypeScript Basics",
//     author:"Jane Doe",
//     publicationYear:2022,
//     genre:"Programming"
//   };
//   const myMagazine: BookOrMagazine={
//     title:"Tech Monthly",
//     issueNumber:45,
//     month:"August",
//     editor:"John Smith",
//   }
// //   Example of an intersection type
// const hybridPublication:BookAndMagazine={
//     title:"Advanced TypeScript",
//     author:"Alice",
//     publicationYear:2023,
//     genre:"Technology",
//     issueNumber:23,
//     month:"July",
//     editor:"Salim"
// }
//   task-5
//   const reverseString=(input:string):string=>{
//       return input.split('').reverse().join('');
//   }
//   const result = reverseString("hello");
//   console.log(result);
// task-6
const sumNumbers=(...numbers:number[]):number=>{
       return numbers.reduce((total,current)=>total+current,0);
}
const result = sumNumbers(1,2,3,4,5);
console.log(result);
}