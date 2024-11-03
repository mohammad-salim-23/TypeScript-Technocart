{
    // 
     
    // type assertion: er mane typescript kei ami bole dibo ki type hobe, jokon ami besi bujbo tokon
    let anything:any;
    anything="Next Level Web Development";
    
    (anything as string)

    const kgToGm=(value:string|number):string|number|undefined=>{
        if(typeof value==='string'){
            const convertedValue = parseFloat(value)*1000;
            return `the converted value is ${convertedValue}`
        }
        if(typeof value==="number"){
            return value*1000;
        }

    }

    const result1 = kgToGm(1000) as number;
    const result2 = kgToGm("1000") as string;

    // try catch
    type CustomError={
        message:string
    }
    try{

    }catch(error){
        console.log((error as CustomError).message);
    }
    // 
}