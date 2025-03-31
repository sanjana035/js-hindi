// const coding = ['ruby','python','cpp','java']
// const values = coding.forEach((item)=>{
//     console.log(item);
// })
// const myNums = [1,2,3,4,5,6,7,8,9];
// const newNums = myNums.filter((num)=>{
//     return num > 4
// })
//////curly braces ke andar return karna hota hai
/////scope ke andar return keyword use karna jaruri hota hai
// console.log(newNums);

const myNum = [1,2,3,4,5,6,7,8,9];
const khali =[];
myNum.forEach((i) => {
    if(i > 4){
        khali.push(i);
    }    
});
console.log(khali);

