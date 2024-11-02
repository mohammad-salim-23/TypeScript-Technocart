{
    // Union Type: eita onno language er or er moto
    // type FrontendDeveloper = 'fakibazDeveloper'|'juniorDeveloper';
    // type FullstackDeveloper = 'frontendDeveloper'|'expertDeveloper';
    // type Developer = FrontendDeveloper | FullstackDeveloper;

    // type User={
    //     name:string;
    //     email?:string;
    //     gender:"male"|"female";
    //     bloodGroup :"O+"|"A+"|"AB+";
    // }
    // const user1:User={
    //     name:"Rahul",
    //     gender:"male",
    //     bloodGroup:"O+"
    // }
    // Intersection
    type FrontendDeveloper = {
        skills:string[];
        designation1:"Frontend Developer"
    }
    type BackendDeveloper={
        skills:string[];
        designation2:"Backend Developer"
    }
    type FullstackDeveloper = FrontendDeveloper &  BackendDeveloper;
    const fullStackDeveloper : FullstackDeveloper={
        skills:['HTML','CSS','EXPRESS'],
        designation1:'Frontend Developer',
        designation2:"Backend Developer"
    }
}