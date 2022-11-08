
const inputField = document.getElementById("input");

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
function updateBackgroundColor(color) {
    setCookie("backgroundColor", color, 30);
    document.body.style.backgroundColor = color;
}

//end info for state 1 ---------------------------------------------------------------------

//initialized chat entry
addChatEntry("", "What's your name?");



//Event listener for user hitting enter after typing a message
inputField.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
        let input = inputField.value;
        inputField.value = "";
        input = input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        parse(input);
    }
});



    //Parse and generate output from the user's message
function parse(input) {
    let response;
    let text = input.toLowerCase();
    text = text.replace(/[^\w\s\d]/gi, "");
    text = text.replace(/arent/g, "are not") //Replace contractions
                .replace(/cant/g, "can not")
                .replace(/couldnt/g, "could not")
                .replace(/didnt/g, "did not")
                .replace(/dont/g, "do not")
                .replace(/doesnt/g, "does not")
                .replace(/hasnt/g, "has not")
                .replace(/hadnt/g, "had not")
                .replace(/havent/g, "have not")
                .replace(/ im /g, " i am ")
                .replace(/^im /g, "i am ")
                .replace(/ ill /g, " i will ")
                .replace(/^ill /g, "i will ")
                .replace(/ ive /g, " i have ")
                .replace(/^ive /g, "i have ")
                .replace(/ its /g, " it is ")
                .replace(/^its /g, "it is ")
                .replace(/isnt/g, "is not")
                .replace(/lets/g, "let us")
                .replace(/shouldnt/g, "should not")
                .replace(/thats/g, "that is")
                .replace(/theres/g, "there is")
                .replace(/theyll/g, "they will")
                .replace(/theyre/g, "they are")
                .replace(/weve/g, "we have")
                .replace(/werent/g, "were not")
                .replace(/whatll/g, "what will")
                .replace(/whats/g, "what is")
                .replace(/whatve/g, "what have")
                .replace(/wheres/g, "where is")
                .replace(/wholl/g, "who will")
                .replace(/whos /g, "who is ")
                .replace(/whove/g, "who have")
                .replace(/wont/g, "will not")
                .replace(/wouldnt/g, "would not")
                .replace(/youd/g, "you would")
                .replace(/youll/g, "you will")
                .replace(/youre/g, "you are")
                .replace(/youve/g, "you have")
                .replace(/ r /g, " are ") //Abbreviations
                .replace(/^r /g, "are ")
                .replace(/ r$/g, " are")
                .replace(/ u /g, " you ")
                .replace(/^u /g, "you ")
                .replace(/ u$/g, " you")
                .replace(/plz/g, "please")
                .replace(/idk/g, "i do not know")
                .replace(/ bc /g, " because ")
                .replace(/^bc /g, "because ")
                .replace(/ bc$/g, " because")
                .replace(/ np /g, " no problem ")
                .replace(/^np /g, "no problem ")
                .replace(/ np$/g, " no problem")
                .replace(/^np$/g, "no problem")
                .replace(/^thx$/g, "thanks");

    //Determine what output should be sent
    response = firstState.checkQuestions(text);

    if (firstState.questions[1].getAnswer() != ""){
        updateBackgroundColor(firstState.questions[1].getAnswer());
    }

    addChatEntry(input, response);
}

function addChatEntry(input, response) {

    console.log(input, response);
    const messagesContainer = document.getElementById("messages");
    let userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.className = "user response";
    userDiv.innerHTML = `<span>${input}</span>`;
    messagesContainer.appendChild(userDiv);

    let botDiv = document.createElement("div");
    let botText = document.createElement("span");
    botDiv.id = "bot";
    botDiv.className = "bot response";
    botDiv.appendChild(botText);
    messagesContainer.appendChild(botDiv);

    messagesContainer.scrollTop =
    messagesContainer.scrollHeight - messagesContainer.clientHeight;

    setTimeout(() => {
        botText.innerText = `${response}`;
    }, 2000);
}