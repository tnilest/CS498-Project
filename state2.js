
let question1_2 = new Question();
question1_2.setQuestion(["Thank me"]);
question1_2.setValidAnswers(["thanks", "thank you", "i thank you", "thank you very much", "thank you so much", "thanks a lot"]);
question1_2.setFilterPhrases(["i wanna say", "i want to say"]);

//let question2 = new Question();
//
//question2.setQuestion(["What's your favorite color?", "What's your favorite color?\nLet me guess. Is it red?\nYou look pretty basic", "What's your favorite color?\nI want to make your experience more enjoyable :)"]);
//
//question2.setValidAnswers(["red", "blue", "purple", "yellow", "pink", "green", "orange",
//                           "lime", "aqua", "navy", "coral", "teal",
//                           "violet", "black", "white", "grey", "gray", "brown",
//                           "indigo", "maroon", "magenta"]);
//question2.setFilterPhrases(["my favorite color is ", " is my favorite color", " is the color", "the color is ",
//                            "it is ", "that is ", "that would be ", "probably ", "obviously "]);
//
//let question3 = new Question();
//question3.setQuestion(["How about a title? Every webpage needs a good title.\nWhat should we call this one?", "Well you aren't exactly the creative type but whatever.\nHow about a title? Every webpage needs a title.\nWhat should we call this one?", "This one is a fun one.\nHow about a title? Every webpage needs a great title.\nWhat should we call this one?"]);
//
//question3.setValidAnswers([]);
//question3.setFilterPhrases(["the title should be ", "we should call it ", " is the title", "the title is ", "it should be ",
//    "probably ", "obviously ", "make it ", "set it to ", "call it ", "you should call it ", "this title should be "]);
//
//let question4 = new Question();
//
//question4.setQuestion(["Now what color should that title be?\nOf course, you wouldn't want it to be the same as the background color, now would you?", "Now what color should that title be?\nOf course, you would want it to be the same as the background color, now would you?\nI don't expect better from a person like you.", "Now what color should that title be?\nOf course, I leave the decision in your capable hands."]);
//question4.setValidAnswers(["red", "blue", "purple", "yellow", "pink", "green", "orange",
//    "lime", "aqua", "navy", "coral", "teal",
//    "violet", "black", "white", "grey", "gray", "brown",
//    "indigo", "maroon", "magenta"]);
//question4.setFilterPhrases(["i would like the color to be ", "the color should be ", "set the text to ", "the text color should be ", "set the text to ",
//"make it ", " is the color", "color it ", "paint it ", "set the color to "]);
//
//let question5 = new Question();
//question5.setQuestion(["Well, I guess I need a name too.\nHave one in mind?", "God I hate that I have to ask you this.\nWell...I guess I need a name too.\nHave one in mind?\nPlease don't embarrass me or yourself.", "I trust you on this one.\nI need a name too.\nHave one in mind?"]);
//question5.setValidAnswers([]);
//question5.setFilterPhrases(["i hereby dub you ", "your name is ", "you should be called ", "i will name you ", "i will call you ", " is your name", "you are "
//    , "how about ", "what about ", "it should be ", "you should be ", "i would like to call you ", "from now on you should be ", "call yourself "]);
//let question6 = new Question();
//question6.setQuestion(["End of demo"]);
const secondState = new State();
secondState.setName("State 2");
secondState.setQuestions(question1_2);
//firstState.setQuestions(question2);
//firstState.setQuestions(question3);
//firstState.setQuestions(question4);
//firstState.setQuestions(question5);
//firstState.setQuestions(question6);
bot.addState(secondState);

function showButton() {
    document.getElementById("thebutton").removeAttribute("hidden");
    var mood = getCookieVal("mood");

    if (mood < -1) {
        return "Whoops. How did that get there?\nMust be one of those quirky website bugs. Ignore it.\nI know you're not keen on following directions or listening to me, but it is vital that you do not press that button";
    }
    else if (mood > 1) {
        return "Whoops. How did that get there?\nMust be one of those quirky website bugs. Ignore it.\nIt'll take me a second to get that button out of here, but I trust you wouldn't do such a thing as push it.";
    }
    else {
        return "Whoops. How did that get there?\nMust be one of those quirky website bugs. Ignore it.\nThis is my website. I'll have that button out of here in a second. Please don't push it."

    }
}

async function waitOnButton() {
    await delay(10000);
    addChatEntry("Almost got it. Thanks for being patient.");
    await delay(5000);
    if (!buttonPushed) {
        document.getElementById("thebutton").setAttribute("hidden", true);
        addChatEntry("There we go! Thanks for not pressing it. That could've been bad.");
        incrementCookie("mood",5);
    }

}
