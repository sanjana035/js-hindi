//... == called rest and sprea operator

function calculatePrice(val,val2,...num1) {
    return num1;
}
console.log(calculatePrice(200,300,400,500,600 ));


// const user = {
//     username : "sanjana",
//     id : 234,
// }

function accessObject(anyObject) {
    console.log(`my name is ${anyObject.username} and my id is ${anyObject.id}`);
}

// const result = accessObject(user);
accessObject({
        username : "sanjana",
         id : 234,
    })

//by using array
const nyNewArray = [200,300,400]
function getArray(anything) {
    return anything[2];
}
console.log(getArray(nyNewArray));

console.log(getArray([10,29,30,40]));