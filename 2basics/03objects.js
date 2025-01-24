//singleton - constructor se baanega to 
//ex. object.create

//object literals
const symbol = Symbol("key@2");

const JSUser = {
    name : "sanjana",
    age : 18,
    "full name" : "sanjana chaurasiya",
    //symbol : "key1" //output as string
    [symbol] : "mykey",
    location : "nagod",
    email : "sanjana@gamil.com",
}

console.log(JSUser.email)
console.log(JSUser["email"]);
console.log(JSUser["full name"]);
console.log(typeof JSUser["symbol"]);
console.log(JSUser[symbol]);

JSUser.email = "chaurasiya@gmail.com";

// Object.freeze(JSUser);//no changes applied

console.log(JSUser);

JSUser.greetings = function () {
    console.log(`hello JS User, ${this.name}`);
    
}
console.log(JSUser.greetings());
