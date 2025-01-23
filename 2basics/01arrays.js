//array


const myArray = [0,1,2,3,4,5];

//arrray is an object which enables storing a collection of multiple items under a single variable
//JavaScript arrrays are resizable and can contain a mix of different Data types
//javascript array-copy-operation create shallowcpies
//shallowCopies - a shallow copy of an object is a copy whose properties share the same references(point to the same underlying values)
//as those of the source object from which the copy was made.
//Deep copies - of an object is a copy whose properties do not share the same references.


console.log(myArray[0]);

const myHeros = ["ram","shyam"];
const myArr2 = new Array(1,2,3,4);
console.log(myArr2[2]);

//Array Methods
// myArray.push(8);
// console.log(myArray);
// myArray.pop();
// console.log(myArray);
// console.log(myArray.includes(9));
// console.log(myArray.indexOf(3));

//slice,splice

console.log("A",myArray);
const myarr3 = myArray.slice(1,3);
console.log(myarr3);
console.log(myArray);

console.log("B",myArray);
const myarr4 = myArray.splice(1,3);
console.log(myarr4);
console.log(myArray);
//splice includes the last index and manipulates the array