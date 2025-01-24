const name = ["sanjana","jay","om"];
const surname = ["chaurasiya","singh","pandey"];

// name.push(surname);
// console.log(name);
// console.log(name[2][1]);

const fullname = name.concat(surname);
console.log(fullname);
 
console.log(Array.isArray("sanjana"));
console.log(Array.from("sanjana"));
console.log(Array.from({name:"sanjana"}));//interesting


let score1 = 10
let score2 = 20
let score3 = 30
console.log(Array.of(score1,score2,score3));