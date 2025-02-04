// const newUser = new Object(); //this is singlton object
const newUser = {} ///this is non singleton object

newUser.id = "123"
newUser.name = "sanjana"
newUser.isloggedIn = false

// console.log(newUser);
const regularUser = {
    email : "sanjana@gmail.com",
    fullname : {
        firstName : "sanjana",
        lastname : "chaurasiya",
    }
}

// console.log(regularUser);
//console.log(regularUser.fullname?.firstName);
// ? - is used to check the availibility of the value

const obj1 = {
    1 : "a",
    2 : "b",
}
const obj2 = {
    3 : "c",
    4 : "d",
}

const obj3 = Object.assign({},obj1,obj2);
const obj4 = {...obj1,...obj2}; //same as assign we use this more

// console.log(obj3);
// console.log(obj4);

const users = [
    {
        id : 1,
        email: "sanjna@gmail.com",
    },
    {
        id : 2,
        email: "anjna@gmail.com",
    },
    {
        id : 3,
        email: "manjna@gmail.com",
    }
];
users[1].email
console.log(newUser);
console.log(Object.keys(newUser));
console.log(Object.values(newUser));


