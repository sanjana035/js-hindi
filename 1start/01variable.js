const accountId = 1234
let accountEmail = "sanjana@gmail.com"
var accountPassword = "2323824"
acountCity = "mp"
// accountId = 23344  this will not work because of const variable //not allowed
accountEmail = "hdbchd@gmail.coom"
accountPassword = "47385"
acountCity = "bengaluru"

/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.log(accountId)
console.log([accountEmail,accountPassword,acountCity])
console.table([accountEmail,accountPassword,acountCity])
