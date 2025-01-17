// primitive DAta Type
/* 7 types : string
            Number
            boolean
            Null
            Undefined
            Symbol
            BigInt
*/
// Reference (Non Primitive)
/*
        Array
        Object
        Functions
*/
const myArr = ["sanjana","satwik","sadhvi"];
const myObj = {
        name : "sanjana",
        age :  25,
}

const myFun = function(){
        console.log("hello World");
}




/// Memory Type
//Stack(primitive) - have a copy of any created variable 
//Heap(Non Primitive) - (refernce) means koi bhi chnge karege to original me bhi change hoga

//ex-stack

let firstName = "sanjana"
let name2 = firstName

name2 = "chaurasiya"
console.log(firstName);
console.log(name2);


//ex-Heap

let user1 = {
        email : "sanjana@gmail.com",
        age: 23,
}
let user2 = user1;

user2.email = "Chaurasiya@gmail.com";

console.log(user1.email);
console.log(user2.email);





