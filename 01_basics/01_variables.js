const accountId = 1535656
let accountEmail = "sachin@gmauil.com"
var accountPassword = "123565"
accountCity= "Lucknow"

let accountState;

// accountId = 1111111 not allowed to change
// accountEmail="abc@gmail.com" allowed to change , latter one willbe fetched

/*
Prefer not to use var 
because of issue in block scope and functional scope


*/

/*
if you declare a variable and doesnt declare value / it'll shows undefined
*/
accountPassword="111111"
accountCity="Jaipur"
console.log(accountPassword)
 console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


