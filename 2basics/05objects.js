const course = {
    courseName : "js hindi",
    price : "200",
    instructure : "hitesh"
}

// for accessing the code in repeat we use this course.instructure, in replace of this also use this=>

const {instructure : instruct} = course;
// console.log(instructure);
console.log(instruct);


// json is basically objects only but without any name and the keys are in string form
// {
//     "name" : "sanjana",
//     "id" : 3,
// }

// json in array form also but in that there are multiple objects