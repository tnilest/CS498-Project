

class Question {
    //private string question;
    //private string answer;
    //private string validAnswers = [];

    constructor() {
        this.question = '';
        this.answer = '';
        this.validAnswers = [];
        this.filterPhrases = [];
    }

    setQuestion(newQuestion){
        this.question = newQuestion;
    }

    setValidAnswers(newAnswers){
        this.validAnswers = newAnswers;
    }

    setAnswer(answer){
        this.answer = answer;
    }

    setFilterPhrases(phrases){
        this.filterPhrases = phrases;
    }

    getQuestion() {
        return this.question;
    }

    getAnswer() {
        return this.answer;
    }

    getValidAnswers() {
        return this.validAnswers;
    }

    getFilterPhrases(){
        return this.filterPhrases;
    }

    filter(answer){
        var phrases = this.filterPhrases;
        for (var i = 0; i < phrases.length; i++) {
            if (answer.includes(phrases[i])) {
                answer = answer.replace(phrases[i], '');
            }
        }
        return answer;
    }
}

class State {
    //private Question questions = [];
    //private string stateName;
    //private State nextState;

    constructor(){
        this.questions = [];
        this.stateName = "";
        this.nextState = null;
    }

    setName(newName){
        this.stateName = newName;
    }

    setQuestions(newQuestion){
        this.questions.push(newQuestion);
    }

    setNext(newState){
        this.nextState = newState;
    }

    getQuestions() {
        return this.questions;
    }

    checkQuestions(answer){
        var questions = this.getQuestions();
        var found = false;
        var question = "";
        for (var i = 0; i < questions.length; i++) { //Check each question in this state
            if (found == true) {
                question = questions[i].getQuestion(); //Return the next question after finding the current one
                break;
            }
            if (questions[i].getAnswer() == "") { //If no answer has been set yet, then this is the question we want
                var validAnswers = questions[i].getValidAnswers();
                var filteredAnswer = questions[i].filter(answer);
                console.log(filteredAnswer);
                if (validAnswers.length == 0) {
                    questions[i].setAnswer(filteredAnswer); //Set the answer to that question
                    found = true;
                }
                else {
                    for (var j = 0; j < validAnswers.length; j++) { //Loop through expected answers for this question
                        if (filteredAnswer == validAnswers[j]) { //If it's a valid answer
                            questions[i].setAnswer(filteredAnswer); //Set the answer to that question
                            found = true;
                            break;
                        }
                    }
                }
                if (found == false) { //If it was not a valid answer
                    question = "Try again";
                }
                if (found == true && i == questions.length-1) { //If we've answered all questions of this state
                    question = "next state";
                }
            }
        }
        return question;
    }

}

class chatBot {
    //private State states = [];
    constructor(){
        this.states = [];
    }
}
