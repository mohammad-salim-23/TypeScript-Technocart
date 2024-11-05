{
    // utility types
    // pick
    type Person={
        name:string,
        age:number,
        email?:string,
        contactNo:string
    }
    type NameAge = Pick<Person,"name"|"age">
    // omit->baad deya
    type ContactInfo = Omit<Person,"name"|"age">
    // Required
    type PersonRequired = Required<Person>
     //    partial
   type PersonPartial = Partial<Person>
//    ReadOnly
   type PersonReadOnly = Readonly<Person>
    const person1:PersonReadOnly={
        name:"MR. XYZ",
        age:200,
        contactNo:"019"
    }
    // person1.name="salim"->cannot assign because it is a read only property
    const EmptyObj:Record<string,unknown>={}
    type MyObj = Record<string,number>
    const obj1:MyObj={
        // a:"12",->it's not correct because in MyObj record here declare assignable value is must be nu,ber
        b:12,

    }
}