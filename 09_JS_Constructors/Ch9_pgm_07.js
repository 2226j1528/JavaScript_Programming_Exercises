// A quiz question constructor

var QuizQuestion = function (question, answer) {
    this.question = question;
    this.answer = answer;
    this.options = [];
  
    this.addOption = function (option) {
        this.options.push(option);
    };
  
    this.showQuestion = function () {
        console.log(this.question);
        this.options.forEach(function (option, i) {
            console.log("(" + (i + 1) + ") " + option);
        });
    };
};

var question1 = new QuizQuestion(
    "What is the capital of France?",
    "Paris"
);

question1.addOption("Bordeaux");
question1.addOption("F");
question1.addOption("Paris");
question1.addOption("Brussels");
question1.addOption("Lyon");  // Fifth option added

var question2 = new QuizQuestion(
    "Which planet is known as the Red Planet?",
    "Mars"
);

question2.addOption("Earth");
question2.addOption("Mars");
question2.addOption("Venus");
question2.addOption("Jupiter");
question2.addOption("Saturn");

var question3 = new QuizQuestion(
    "What is the largest mammal?",
    "Blue Whale"
);

question3.addOption("Elephant");
question3.addOption("Blue Whale");
question3.addOption("Great White Shark");
question3.addOption("Giraffe");
question3.addOption("Orca");




/* Further Adventures
 *
 * 1) Add a fifth option to question1.
 *
 * 2) Create two more questions.
 *
 * 3) At the console prompt type
 *    question2.showQuestion();
 *    Press Enter
 *
 * 4) At the console prompt type
 *    question2.answer;
 *    Press Enter
 *
 */
