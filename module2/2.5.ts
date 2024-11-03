{
    // function with params
    const createArray=(param:string):string[]=>{
        return [param];

    }

    const createArrayWithGeneric=<T>(param:T):T[]=>{
        return [param];
    };
    const res1 = createArray("Bangladesh")
    const resGeneric = createArrayWithGeneric<boolean>(true);

       type User={
        id:291,
        name:'Mr. Salim'
       }

    const resGenericObj = createArrayWithGeneric<{id:number;name:string}>({id:291,name:'Mr. Salim'})
    // generic funtion with tuple
    const createArrayWithTuple=<T,Q>(param1:T,param2:Q):[T,Q]=>{
        return [param1,param2];
    };
    const res10 = createArrayWithTuple<string,number>("Bangladesh",291);
    
    const addCourseToStudent=<T>(student:T)=>{
        const course="Next Level Web development"

        return{
            ...student,
            course
        }
    }
    const student1 = addCourseToStudent({name:"Mr.X",email:"x@gmail.com"});
    const student2 = addCourseToStudent({name:"Mr.y",email:"y@gmail.com"});


}