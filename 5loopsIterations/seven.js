const myNum = [1,2,3,4,5,6,7,8,9,10]
// const newNum = myNum.map((i) => i + 10)



////chaining
const newNum = myNum
                .map((i) =>{return i*10} )
                .map((i) => i+1)
                .filter((i) => i >= 40)///filter me true value print hoti hai
console.log(newNum);
