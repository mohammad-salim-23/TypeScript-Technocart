{
    // Ternary Operator
    const age = 15;
    const isAdult = age>=18?"adult":"not adlt";
    console.log(isAdult);
    // Nullish Coalescing Operator
    // null/undefined-->decision making
    const isAuthenticated = null;
    const result1 = isAuthenticated??"Guest";
    console.log({result1});

    // optional chaning
    type User={
        name:string;
        address:{
            city:string;
            road:string;
            presentaddress?:string;
            permanentAddress:string
        }
    }
    const user : User={
       name:"Mohammad",
       address:{
        city:'syl',
        road:'Awesome Road',
        permanentAddress:"Moulvibazar"
       },
    };
    const permanentAddress = user?.address?.permanentAddress?? "No Permanent Address";
    console.log(permanentAddress);
}