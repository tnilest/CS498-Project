
let question1_2 = new Question();
question1_2.setQuestion(["Wow! Thank you so much!\n Well, I've had a wonderful time talking to you.\n Have you enjoyed this experience?\n"]);
question1_2.setValidAnswers(["yes", "yeah", "duh", "of course", "yup",
                             "no", "nope", "nah", "no way"]);
question1_2.setFilterPhrases([]);


const secondState = new State();
secondState.setName("State 2");
secondState.setQuestions(question1_2);

bot.addState(secondState);

function checkEnjoyment(input){
    if (input == "yes" || "yeah" || "duh" || "of course" || "yup"){
        addChatEntry("I'm glad to hear that!\n As thanks for that star I have a fun game I want to show you.\n");
    }
    else if (input == "no" || "nope" || "nah" || "no way"){
        addChatEntry("I'm sorry to hear that.\n Maybe this game will cheer you up!\n");
    }
}
