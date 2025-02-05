//this used for current context

const user = {
    username: "sanjana",
    price: 999,
    welcomeMess: function() {
        console.log(`${this.username}, welcome to website`);
    }//welcomeMess is a method
}
user.welcomeMess();
user.username = "sam"//current context changed
user.welcomeMess();
//////////++++++++++++++this works on only objects not in functions

const chai = () => {
    let username = "sanjana"
    console.log(this);    
}
chai();

/////arrow functions me bhi this keyword work nhi karta 


//basic syntax of arrow function

// const addTwo=(num1,num2) => {
//     return num2+num1;
// }
// console.log(addTwo(3,4));

//implicit function means we don't use return keyword
const addtwo = (num1,num2) => (num1+num2) //({username: "sanjana"})///this is the way to preseent any of the objects