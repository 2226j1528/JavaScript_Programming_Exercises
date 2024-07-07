// Displaying information from similar objects

var movie1;
var movie2;
var movie3;
var movie4;

movie1 = {
  title: "Inside Out",
  actors: "Amy Poehler, Bill Hader",
  directors: "Pete Doctor, Ronaldo Del Carmen"
};

movie2 = {
  title: "Spectre",
  actors: "Daniel Craig, Christoph Waltz",
  directors: "Sam Mendes"
};

movie3 = {
  title: "Star Wars: Episode VII - The Force Awakens",
  actors: "Harrison Ford, Mark Hamill, Carrie Fisher",
  directors: "J.J.Abrams"
};

movie4 = {
  title: "Vikram",
  actors: "Kamal Hassan",
  directors: "Lokesh Kanagraj"
};

function info(movie) {
  console.log("Movie information for " + movie.title);
  console.log("------------------------------");
  console.log("Actors: " + movie.actors);
  console.log("Directors: " + movie.directors);
  console.log("\n");
}

info(movie1);
info(movie2);
info(movie3);
info(movie4);

var event1;
var event2;
var event3;

event1 = {
  name: "Inauguration",
  date: "05-07-2024",
  location: "Open Auditorium, KGISL Campus"
};

event2 = {
  name: "Onam",
  date: "21-08-2024",
  location: "Open Auditorium, KGISL Campus"
};

event3 = {
  name: "Pongal",
  date: "10-01-2025",
  location: "Open Auditorium, KGISL Campus"
};

function Event(event) {
  console.log("Event: " + event.name);
  console.log("------------------------------");
  console.log("Date: " + event.date);
  console.log("Location: " + event.location);
  console.log("\n"); // Adds a newline for spacing
}

Event(event1);
Event(event2);
Event(event3);




/* Further Adventures
 *
 * 1) Add a fourth movie and display its info
 *
 * 2) All the movie info is in one big block on the console.
 *    Change the code to space out the different movies.
 *
 * 3) Create objects to represent three calendar events
 *
 * 4) Display info from the three events on the console.
 *
 */
