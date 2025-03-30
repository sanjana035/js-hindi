// for each loop
const coding = ['cpp','ruby','python','java'];

//write callback function - callback function don't have name on it
coding.forEach(function(val){
    console.log(val); 
})

coding.forEach((val)=>{
    console.log(val);
})//arrow function

//using normal function
function printCoding(item) {
    console.log(item);
}
coding.forEach(printCoding);

//how to print everything
coding.forEach((item,index,coding)=>{
    console.log(item,index,coding);
})

//objects inside the array
const myCoding = [
    {
        name:'java',
        fileName:'java'
    },
    {
        name:'python',
        filename:'py'
    },
    {
        name:'javascript',
        fileName:'node'
    }
]

myCoding.forEach((item)=>{
    console.log(item.name);
    
})