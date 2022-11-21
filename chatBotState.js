

class Question {

    constructor() {
        this.question = [];
        this.answer = '';
        this.validAnswers = [];
        this.filterPhrases = [];
        //this.reply = {};
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

//    setReply(replies) {
//        this.reply = replies;
//    }

    getQuestion() {
        var mood = getCookieVal("mood");
        if (this.question.length == 1) {
            return this.question[0];
        }
        else {
            if (mood < -1) {
                return this.question[1];
            }
            else if (mood > 1) {
                return this.question[2];
            }
            else {
                return this.question[0];
            }
        }
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

//    getReply(){
//        return this.reply;
//    }

    filter(answer){
        var phrases = this.filterPhrases;
        for (var i = 0; i < phrases.length; i++) {
            if (answer.includes(phrases[i])) {
                answer = answer.replace(phrases[i], '');
            }
        }
        return answer;
    }

//    getReplies(answer) {
//        var reply = this.getReply();
//        if (Object.keys(reply).length == 0) {
//            return [];
//        }
//        for(var text in reply) {
//            if (answer == text || text=="else") {
//                return reply[text];
//            }
//        }
//    }
}

class State {

    constructor(){
        this.questions = [];
        this.stateName = "";
        this.nextState = null;
        this.currentQuestion = 0;
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

    getIndex() {
        return this.currentQuestion;
    }

    incrementIndex() {
        this.currentQuestion += 1;
    }

    checkQuestions(answer){
        var questions = this.getQuestions();
        var found = false;
        var index = this.getIndex();
        var validAnswers = questions[index].getValidAnswers();
        var filteredAnswer = questions[index].filter(answer);
        if (validAnswers.length == 0) {
            questions[index].setAnswer(filteredAnswer); //Set the answer to that question
            found = true;
        }
        else {
            for (var j = 0; j < validAnswers.length; j++) { //Loop through expected answers for this question
                if (filteredAnswer == validAnswers[j]) { //If it's a valid answer
                    questions[index].setAnswer(filteredAnswer); //Set the answer to that question
                    found = true;
                    break;
                }
            }
            if (found == false) {
                return "I didn't understand that one.";
            }
        }
        this.incrementIndex();
        index += 1;
        if (index == questions.length) {
            return "next state";
        }
        //var response = response.concat(questions[index].getQuestion());
        return questions[index].getQuestion();
    }
}

class chatBot {
    constructor(){
        this.states = [];
        this.mood = 0;
    }

    incrementMood(){
        this.mood += 1;
    }

    decrementMood(){
        this.mood -= 1;
    }

    getMood() {
        return this.mood;
    }

    addState(state) {
        this.states.push(state);
    }
}
