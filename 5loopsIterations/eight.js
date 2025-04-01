///reduce method

const myNum = [1,2,3]
// const total = myNum.reduce(function (accumulator,currval) {
//     console.log(`acc: ${accumulator} and current Value ${currval}`);
//     return accumulator + currval;    
// },0)//accumulator ki value yha pass ki hui hai

const total = myNum.reduce((acc,currVal) => acc+currVal,0);
console.log(total);

const shoppingCart = [
    {
        itemName: "javascript",
        price: 2000
    },
    {
        itemName: "python",
        price: 1000
    },
    {
        itemName: 'AI-ML',
        price:3000
    }
];
const priceToPay = shoppingCart.reduce((acc,item) => acc+ item.price,0)
console.log(priceToPay);
