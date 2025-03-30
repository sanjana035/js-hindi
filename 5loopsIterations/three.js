///for of
{"","",""}
[{},{},{}]
const arr = [1,2,3,4,5]
// for (const i of arr) {
//     console.log(i);
    
// }

// const greeting = "hello world!";
// for (const greet of greeting) {
//     console.log(`each char in greeting ${greet}`);
// }

const map = new Map();
map.set('In',"india");
map.set('usa',"america");
map.set('fr',"france");
// console.log(map);

for (const [key,value] of map) {
    console.log(key,'-',value);
}

const myObject = {
    'name':'sanjana',
    'lastName':'chaurasiya'
}

//object can not iterate using for of