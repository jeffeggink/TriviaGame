var panel = $("#quiz-area");
// Questions
var questions = [{
  question: "Which record label featured artists such as Dr. Dre, Tupac, and Snoop Dogg?!",
  answers: ["Jr. Mafia", "The dungeon family?", "Death Row Records", "Murder inc."],
  correctAnswer: "Death Row Records"
}, {
  question: "Which of these is NOT a member of the Wu-Tang Clan?!",
  answers: ["Old dirty basterd", "RZA", "Method Man", "lil wayne"],
  correctAnswer: "lil wayne"
}, {
  question: "Who was Notorious B.I.G. married to at the time of his death!?",
  answers: ["Lil Kim", "Mary J Blige", "Faith Evans", "Lisa Left-Eye Lopez"],
  correctAnswer: "Lil Kim"
}, {
  question: "Who released the hit song, \"Baby got back\"?!",
  answers: ["Naughty by Nature", "Heiroglyphics", "Sir Mix-A-Lot", "DMX"],
  correctAnswer: "Sir Mix-Alot"
}, {
  question: "Phife Dawg, Q-Tip, and Ali Shaheed Muhammad were the members of what rap group\?!",
  answers: ["De La Sol", "Migos", "Wu-Tang-Clan", "A tribe called quest"],
  correctAnswer: "A tribe called quest"
}, {
  question: "Finish this line from the Fresh Prince of Bel-Air theme song: \"I pulled up to the house at about 7 or 8 and I yelled to the cabby...\"",
  answers: ["keep the change sir", "hey yo smell you later", "your mom looks like a tabby", "your arms are really flabby"],
  correctAnswer: "hey yo smell you later"
}, {
  question: "2pac was shot and died in what city?",
  answers: ["Las Vegas", "New York", "San Francisco", "Autin"],
  correctAnswer: "Las Vegas"
}, {
  question: "What was the name of Fresh Prince's DJ!?",
  answers: ["DJ Snake", "DJ King Coopa", "DJ Funk Flexmaster", "DJ Jazzy Jeff"],
  correctAnswer: "Dj Jazzy Jeff"
}];
// Variable that holds setInterval
var timer;
var game = {
  correct: 0,
  incorrect: 0,
  counter: 120,
  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },
  start: function() {
    timer = setInterval(game.countdown, 1000);
    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");
    $("#start").remove();
    for (var i = 0; i < questions.length; i++) {
      panel.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }
    panel.append("<button id='done'>Done</button>");
  },
  done: function() {
    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === questions[5].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() === questions[6].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() === questions[7].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    this.result();
  },
  result: function() {
    clearInterval(timer);
    $("#sub-wrapper h2").remove();
    panel.html("<h2>All Done!</h2>");
    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }
};
// start and end buttons
$(document).on("click", "#start", function() {
  game.start();
});
$(document).on("click", "#done", function() {
  game.done();
});