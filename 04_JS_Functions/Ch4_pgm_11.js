// Using the same function with multiple objects

var movie1;
var movie2;
var movie3;
var movie;
var showMovieInfo;

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

showMovieInfo = function () {
    console.log("Movie information for " + movie.title);
    console.log("------------------------------");
    console.log("Actors: " + movie.actors);
    console.log("Directors: " + movie.directors);
    console.log("------------------------------");
};

movie = movie1;
showMovieInfo();

movie = movie2;
showMovieInfo();

movie = movie3;
showMovieInfo();

var question1;
var question2;
var question3;
var question;
var showQuestion;

question1 = {
    questionText: "What is the capital of India?",
    options: ["A) Coimbatore", "B) Maharashatra", "C) Delhi", "D) Gujarat"],
    correctAnswer: "C"
};

question2 = {
    questionText: "Which is known as Scripting language?",
    options: ["A) Javascript", "B) HTML", "C) CSS", "D) Java"],
    correctAnswer: "A"
};

question3 = {
    questionText: "Who wrote 'Wings of fire'?",
    options: ["A) Abdul Kalam", "B) Oscar Wilde", "C) Ruskin Bond", "D) R. K. Narayanan"],
    correctAnswer: "A"
};

showQuestion = function () {
    console.log("Question: " + question.questionText);
    console.log("Options:");
    for (var i = 0; i < question.options.length; i++) {
        console.log(question.options[i]);
    }
    console.log("------------------------------");
};

question = question1;
showQuestion();

question = question2;
showQuestion();

question = question3;
showQuestion();


/* Further Adventures
 *
 * 1) Create an object to represent
 *    a multiple choice quiz question.
 *
 * 2) Create two more quiz question objects.
 *
 * 3) Create a function to show
 *    the question and answer options.
 *
 * 4) Use the same variable assignment technique
 *    as above to display all three questions
 *    on the console.
 *
 */
