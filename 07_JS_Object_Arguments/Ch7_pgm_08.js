// Finding substrings

var message = "We choose to go to the Moon!";

console.log(message.substr(21, 5)); 
console.log(message.substr(15, 9)); 
console.log(message.substr(0, 9));  

console.log(message.substr(21)); 
console.log(message.substr(15)); 
console.log(message.substr(0));  

console.log(message.substr(-5));     
console.log(message.substr(-10, 4)); 
console.log(message.substr(15, -2)); 



/* Further Adventures
 *
 * 1) Use substr to log the following parts of
 *    the message string to the console:
 *
 *    > Moon!
 *    > go to the
 *    > We choose
 *
 * 2) Investigate what happens if you omit the
 *    second argument when calling substr.
 *
 * 3) What happens if you use negative numbers
 *    as arguments?
 *
 */
