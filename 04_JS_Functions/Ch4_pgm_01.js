// Displaying an object's properties on the console

var movie1;
var movie2;
var blogPost;

movie1 = {
  title: "Inside Out",
  actors: "Amy Poehler, Bill Hader",
  directors: "Pete Doctor, Ronaldo Del Carmen"
};

movie2 = {
  title: "The GodFather",
  actors: "Marlon Brando,Al Pacino",
  directors: "	Francis Ford Coppola, Ronaldo Del Carmen"
};

blogPost={
  Language: "Javascript",
  Trainer: "Gowri",
  Date: "22-06-2024"
};

console.log("Movie information for " + movie1.title);
console.log("------------------------------");
console.log("Actors: " + movie1.actors);
console.log("Directors: " + movie1.directors);
console.log("------------------------------");

console.log("Movie information for "+ movie2.title);
console.log("------------------------------");
console.log("Actors: " + movie2.actors);
console.log("Directors: " + movie2.directors);
console.log("------------------------------");

console.log("Language info for "+ blogPost.Language);
console.log("------------------------------");
console.log("Actors: " + blogPost.Trainer);
console.log("Directors: " + blogpost.Date);
console.log("------------------------------");

/* Further Adventures
 *
 * 1) Add a second movie and display the same info for it.
 *
 * 2) Create an object to represent a blog post.
 *
 * 3) Write code to display info about the blog post.
 *
 */
