{
    //constraint using  keyOf
    type Vehicles={
        bike:string,
        car:string,
        ship:string
    };
    type Owner = "bike"|"car"|"ship";
    type Owner2 = keyof Vehicles;

    const getPropertyvalue=<X,Y extends keyof X>(obj:X,key:Y)=>{

    }
    const User={
        name:"Mr.Hadi",
        age:24,
        address:"syl",
    }
  
    const result1 = getPropertyvalue(User,"name");
}