{
    const user={
        id:345,
        name:{
            firstName:"Abdullah",
            lastName:"Salim"
        },
        ContactNo:'01581891023',
        address:'Uganda'
    }
};
// array destructuring
const myFriends=["Abid","Joy","Nayem","Hadi","Sayed"];
const[,,bestFriend,...rest]=myFriends;
console.log(bestFriend);