// Breaking a function by changing a variable name

var msg;
var msg1;
var showMessage;
var showMessage1;

msg = "It's full of stars!";
msg1= "It's full of blue sky!";

showMessage = function () {
	console.log(msg);
};

showMessage1 = function () {
	console.log(msg1);
};

showMessage();
showMessage1();



/* Further Adventures
 *
 * 1) Update the console.log so the program works.
 *
 * 2) Declare another message variable
 *    and assign it a value.
 *
 * 3) Display the new message as well as the old one.
 *
 * 4) Display a single message created by joining
 *    the two strings.
 *
 */
