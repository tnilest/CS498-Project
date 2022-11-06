//begin information exclusive to state 1 ----------------------------------------------------
let question1 = new Question();
question1.setQuestion("What's your name?");
question1.setValidAnswers([]);
question1.setFilterPhrases(["my name is ", "my names ", "the names ", "names ", " is my name", "it is ",
                            "that is ", "that would be ", "call me ", "i am ", "they call me ",
                            "you can call me ", " is my name"]);


let question2 = new Question();
question2.setQuestion("What's your favorite color?");
question2.setValidAnswers(["red", "blue", "purple", "yellow", "pink", "green", "orange",
                           "lime", "aqua", "navy", "coral", "teal", "mustard",
                           "violet", "black", "white", "grey", "gray", "brown",
                           "indigo", "peach", "maroon", "magenta"]);
question2.setFilterPhrases(["my favorite color is ", " is my favorite color", " is the color", "the color is ",
                            "it is ", "that is ", "that would be ", "probably ", "obviously "]);

const firstState = new State();
firstState.setName("Introduction");
firstState.setQuestions(question1);
firstState.setQuestions(question2);

//function to change background color
function updateBackgroundColor(favColor) {
    document.body.style.backgroundColor = favColor;
    if(favColor ==="black"){
        console.log("here");
        let face = document.getElementById('face');
        face.style.color = 'white';
    }
}

//end info for state 1 ---------------------------------------------------------------------