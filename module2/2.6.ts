{
    // constraints->force kora

    const addCourseToStudent=<T extends {id:number;name:string;email:string}>(student:T)=>{
        const course="Next Level Web development"

        return{
            ...student,
            course
        }
    }
    const student1 = addCourseToStudent({
        id:290,
        name:"Mr.X",
        email:"x@gmail.com"});
    const student2 = addCourseToStudent({
        id:291,
        name:"Mr.y",
        email:"y@gmail.com",
        hashWatch:"Apple Watch"
    });

}