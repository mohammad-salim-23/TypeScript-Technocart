{
    // Mapped types
    const arrayOfNumbers:number[]=[1,4,5];
    const arrOfStrings:string[]=arrayOfNumbers.map((number)=> 
       number.toString()
    );
  console.log(arrOfStrings);

  type AreaNumber={
    height:number;
    width:number;
  }
// mapped typess
  type AreaString<T>={
    // lookup types
    // T=>{height:string;width:number}
    // key=>T["width"]
    [key in keyof T] :T[key]
  }

  const area1:AreaString<{height:string;width:number}>={
     height:"100",
     width:50,
  }
}