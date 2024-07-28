// Calling forEach with an inline function

var items = [ "The Pyramids", "The Grand Canyon", "Bondi Beach" ];

function showItems() {
    console.log("Dream destinations:");
    console.log("Number of places to visit: " + items.length);
    items.forEach(function(item) {
        console.log(" – " + item);
    });
}

showItems();

/* Further Adventures
 *
 * 3) Click after the prompt on the console,
 *    type showItems() and press Enter.
 *    Can you run your function from the console?
 *
 * 4) Add and remove array items via the console
 *    and display the current state of the array
 *    with the showItems function.
 *
 * You can press the up arrow when working at the
 * console prompt to show previous commands used.
 *
 */
