
let question1 = new Question();
question1.setQuestion([["What's your name?"]]);
question1.setValidAnswers([]);
question1.setFilterPhrases(["my name is ", "my names ", "the names ", "names ", " is my name", "it is ",
                            "that is ", "that would be ", "call me ", "i am ", "they call me ",
                            "you can call me ", " is my name"]);


let question2 = new Question();

question2.setQuestion([["What's your favorite color?"]]);

question2.setValidAnswers(["red", "blue", "purple", "yellow", "pink", "green", "orange",
                           "lime", "aqua", "navy", "coral", "teal",
                           "violet", "black", "white", "grey", "gray", "brown",
                           "indigo", "maroon", "magenta"]);
question2.setFilterPhrases(["my favorite color is ", " is my favorite color", " is the color", "the color is ",
                            "it is ", "that is ", "that would be ", "probably ", "obviously "]);

let question3 = new Question();
question3.setQuestion([["What should the title of this webpage be?"]]);
question3.setValidAnswers([]);
question3.setFilterPhrases(["the title should be ", "we should call it ", " is the title", "the title is ", "it should be ",
    "probably ", "obviously ", "make it ", "set it to ", "call it ", "you should call it "]);

let question4 = new Question();
question4.setQuestion([["What color would you like the text to be?", "Please don't make it the same as your background.", "Thank you..."]]);
question4.setValidAnswers(["red", "blue", "purple", "yellow", "pink", "green", "orange",
    "lime", "aqua", "navy", "coral", "teal", "mustard",
    "violet", "black", "white", "grey", "gray", "brown",
    "indigo", "peach", "maroon", "magenta"]);
question4.setFilterPhrases(["i would like the color to be ", "the color should be ", "set the text to ", "the text color should be ", "set the text to ",
"make it ", " is the color", "color it ", "paint it ", "set the color to "]);
question4.setReply({"red": "Bad", "else": "Good"});

let question5 = new Question();
question5.setQuestion([["What would you like to call me?"]]);
question5.setValidAnswers([]);
question5.setFilterPhrases(["i hereby dub you ", "your name is ", "you should be called ", "i will name you ", " is your name", "you are "
    , "how about ", "what about ", "it should be ", "you should be ", "i would like to call you ", "from now on you should be "]);
const firstState = new State();
firstState.setName("Introduction");
firstState.setQuestions(question1);
firstState.setQuestions(question2);
firstState.setQuestions(question3);
firstState.setQuestions(question4);
firstState.setQuestions(question5);

//function to change background color
function updateBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

function displayTitle(title) {
     document.getElementById("title").textContent += title;
}