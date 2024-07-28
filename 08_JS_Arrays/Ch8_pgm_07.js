// Iterating over an array with forEach

var items;
var showInfo;

items = [
    "The Pyramids",
    "The Grand Canyon",
    "Bondi Beach"
];

showInfo = function (itemToShow) {
    console.log(itemToShow + " (" + itemToShow.length + " letters)");
};

items.push("The Great Wall of China");
items.push("Machu Picchu");
items[5] = "Christ the Redeemer";

items.forEach(showInfo);

var getTotalLetters = function (array) {
    var totalLetters = 0;
    array.forEach(function(item) {
        totalLetters += item.length;
    });
    return totalLetters;
};

console.log("Total number of letters: " + getTotalLetters(items));




/* Further Adventures
 *
 * 1) Add a few extra items to the array, some
 *    using push and some using square brackets.
 *    Run the program.
 *
 * Strings also have a length property
 * which gives the number of characters in the string.
 *
 * 2) Update the showInfo function to also
 *    display the number of letters in each item.
 *
 * 3) Write a new function that finds the total
 *    number of letters of the elements in
 *    the items array.
 *
 */
