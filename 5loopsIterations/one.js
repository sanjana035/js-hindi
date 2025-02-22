// for(let i = 0; i < 10; i++){
//     const element = i + 1;
//     console.log(element);
// }

// let myArray = ["sanjana","muskan","drishti"];
// for(let i = 0; i < myArray.length; i++){
//     const element = myArray[i];
//     console.log(element);
// }

// for(let i = 1; i <= 10; i++){
//     console.log(`table of ${i}`);    
//     for(let j = 1; j <= 10; j++){
//         console.log(i + '*' + j + '=' + i*j);
//     }
// }

for (let index = 1; index <= 10; index++) {
    const element = index * 2;
    if (element == 10){
        console.log(`found the ${element}`);
        continue;
    }   
    console.log(element); 
}
//break and continue