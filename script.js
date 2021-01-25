let titleQuestion = document.getElementById('titleQuestion');

let outcome = document.getElementById('outcome');

let startButton = document.getElementById('startButton');

let confirmAnswerButton = document.getElementById('confirmAnswerButton');

let nextQuestionButton = document.getElementById('nextQuestionButton');

let playAgainButton = document.getElementById('playAgainButton');

let inputField = document.getElementById('userAnswer');

let correctAnswers = 0;

let counter = 0;



let questions = [

    'What is the top layer of the Earth called?',
    'Who is the richest person on Earth?',
    'What is the answer to the universe?',
    'What is the formula for Natrium Oxide?',
    'Who is the CEO of Amazon?'

]

let answers = [

    'crust',
    'elon musk',
    '42',
    'no',
    'jeff bezos'

]



function start(){

    startButton.classList.add('hide');

    confirmAnswerButton.classList.remove('hide');

    inputField.classList.remove('hide');

    titleQuestion.innerHTML = questions[counter];
    
    outcome.classList.add('hide');

}




function confirmAnswer(){

    confirmAnswerButton.classList.add('hide');

    nextQuestionButton.classList.remove('hide');

    outcome.classList.remove('hide');

    let userAnswer = inputField.value;

    let correctAnswer = answers[counter]

    if (userAnswer.toLowerCase() == correctAnswer){

        outcome.classList.add('correct');

        outcome.innerHTML = 'Correct! Congrats!';

        correctAnswers++;

    } else {

        outcome.classList.add('wrong');

        outcome.innerHTML = 'Incorrect. Revise the topic';

    }

}




function nextQuestion(){

    counter++;

    if(counter == questions.length){

        nextQuestionButton.classList.add('hide');

        outcome.classList.remove('correct');

        outcome.classList.remove('wrong');

        outcome.innerHTML = "Correct Answers: " + correctAnswers + " / " + questions.length;

        playAgainButton.classList.remove('hide');

        inputField.classList.add('hide');

        titleQuestion.innerHTML = 'End of Quiz'

    } else {

        nextQuestionButton.classList.add('hide');

        outcome.classList.remove('correct');

        outcome.classList.remove('wrong');

        outcome.classList.add('hide');

        confirmAnswerButton.classList.remove('hide');

        titleQuestion.innerHTML = questions[counter];

        inputField.value = "";
        
    }


}



function playAgain(){

    window.location.reload();

}