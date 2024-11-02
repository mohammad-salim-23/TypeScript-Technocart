{
    // spread operator
const bros1:string[]=[
    "salim","Hadi","Nayem",
];
const bros2:string[]=["Tonmoy","Adnan","Rahat"];
bros1.push(...bros2);

const mentors1={
    typescript:'Mezba',
    redux:'Mir',
    dbms:'Mizan'
}
const mentors2={
    prisma:'Firoz',
    next:'Tanmoy',
    cloud:'Nahid'
}
const mentorList={
    ...mentors1,
    ...mentors2
}
// learn rest operator
const greetFriends=(...friends:string[])=>{
    friends.forEach((friend:string)=>console.log(`Hi ${friend}`))
}
  greetFriends("Abul","Habul","Kabul","Lablu");
}  