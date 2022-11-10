let bot = new chatBot();
let question1 = new Question();
question1.setQuestion(["What's your name?"]);
question1.setValidAnswers([]);
question1.setFilterPhrases(["my name is ", "my names ", "the names ", "names ", " is my name", "it is ",
                            "that is ", "that would be ", "call me ", "i am ", "they call me ",
                            "you can call me ", " is my name"]);


let question2 = new Question();

question2.setQuestion(["What's your favorite color?"]);

question2.setValidAnswers(["red", "blue", "purple", "yellow", "pink", "green", "orange",
                           "lime", "aqua", "navy", "coral", "teal",
                           "violet", "black", "white", "grey", "gray", "brown",
                           "indigo", "maroon", "magenta"]);
question2.setFilterPhrases(["my favorite color is ", " is my favorite color", " is the color", "the color is ",
                            "it is ", "that is ", "that would be ", "probably ", "obviously "]);

let question3 = new Question();
question3.setQuestion(["How about a title? Every webpage needs a good title.\nWhat should we call this one?"]);
question3.setValidAnswers([]);
question3.setFilterPhrases(["the title should be ", "we should call it ", " is the title", "the title is ", "it should be ",
    "probably ", "obviously ", "make it ", "set it to ", "call it ", "you should call it ", "this title should be "]);

let question4 = new Question();

question4.setQuestion(["Now what color should that title be?\nOf course, you wouldn't want it to be the same as the background color, now would you?"]);
question4.setValidAnswers(["red", "blue", "purple", "yellow", "pink", "green", "orange",
    "lime", "aqua", "navy", "coral", "teal",
    "violet", "black", "white", "grey", "gray", "brown",
    "indigo", "maroon", "magenta"]);
question4.setFilterPhrases(["i would like the color to be ", "the color should be ", "set the text to ", "the text color should be ", "set the text to ",
"make it ", " is the color", "color it ", "paint it ", "set the color to "]);
//question4.setReply({"red": ["Bad", -2], "else": ["Good", 2]});

let question5 = new Question();
question5.setQuestion(["Well, I guess I need a name too.\nHave one in mind?"]);
question5.setValidAnswers([]);
question5.setFilterPhrases(["i hereby dub you ", "your name is ", "you should be called ", "i will name you ", "i will call you ", " is your name", "you are "
    , "how about ", "what about ", "it should be ", "you should be ", "i would like to call you ", "from now on you should be ", "call yourself "]);

let question6 = new Question();
question6.setQuestion(["End of demo"]);
const firstState = new State();
firstState.setName("Introduction");
firstState.setQuestions(question1);
firstState.setQuestions(question2);
firstState.setQuestions(question3);
firstState.setQuestions(question4);
firstState.setQuestions(question5);
firstState.setQuestions(question6);
bot.addState(firstState);



//function to change user name cookie
function updateUserName(name) {
    setCookie("userName", name, 30);
    name = name.concat(", eh? Good name.\n");
    return name;
}

//function to change background color
function updateBackgroundColor(color) {
    setCookie("backgroundColor", color, 30);
    document.body.style.backgroundColor = color;
    if(color == "black"){
        let face = document.getElementById("face");
        let title = document.getElementById("title");
        face.style.color = "white";
        title.style.color = "white";
    }
    response = "Pretty cool, huh?\nI can change anything you want about this website.\n"
    return response;
}


function displayTitle(title) {
     document.getElementById("title").textContent = title;
}


function changeTitleColor(color) {
    document.getElementById("title").style.color = color;
    bColor = getCookieVal("backgroundColor");
    if (color == bColor) {
        incrementCookie("mood", -2);
        return "Okay, wise guy. Have it your way.\nEnjoy not seeing the title.\nI was gonna make it something really funny but I guess you'll never see it now.\n";
    } else {
        incrementCookie("mood", 2);
        return "Way to follow directions.\n";
    }
}

function setBotName(name) {
    setCookie("botName", name, 30);
    return "I like it.\n"
}
