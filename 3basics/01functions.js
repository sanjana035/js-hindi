function fun(){
    console.log("sanjana");
    console.log("chaurasiya");
}

// fun();
// function addNum(num1,num2) {
//     console.log(num1+num2);    
// }
 function addNum(num1,num2) {
    let result = num1+num2;
    // console.log("sanjana");
    return result;
    console.log("sanjana");
 }

 const result = addNum(3,5);
//  console.log(result);
 

function loginUser(name = "chaurasiya") {
    if(name == undefined){
        console.log("please enter a name");
        return
    }
    return `${name} just logged in`
}
// loginUser("sanjana");
console.log(loginUser("sanjana"));