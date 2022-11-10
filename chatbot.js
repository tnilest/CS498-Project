
const inputField = document.getElementById("input");


//initialized chat entry
addChatEntry("", "Hey there, you.\nWhat's your name?");



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
    var index = firstState.getIndex();



    addInput(input);
    if (index == 1){
        name = updateUserName(firstState.questions[0].getAnswer());
        response = name.concat(response);
    }
    if (index == 2){
        color = updateBackgroundColor(firstState.questions[1].getAnswer());
        response = color.concat(response);
    }
    if (index == 3){
        displayTitle(firstState.questions[2].getAnswer());
    }
    if (index == 4){
        color = changeTitleColor(firstState.questions[3].getAnswer());
        response = color.concat(response);
    }
    if (index == 5){
        name = setBotName(firstState.questions[4].getAnswer());
        response = name.concat(response);
    }

    var mood = getCookieVal("mood");
    if (mood < 0) {
        document.getElementById("face").textContent = "( ͡ಠ ʖ̯ ͡ಠ)";
    }
    else if (mood > 0) {
        document.getElementById("face").textContent = "( ͡^ ͜ʖ ͡^ )";
    }
    else {
        document.getElementById("face").textContent = "( ° ͟ʖ °)";
    }


    addChatEntry(input, response);

}


function delay(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

function addInput(input) {
    const messagesContainer = document.getElementById("messages");
    let userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.className = "user response";
    userDiv.innerHTML = `<span>${input}</span>`;
    messagesContainer.appendChild(userDiv);
}

async function addChatEntry(input, allResponse) {
    let name = getCookieVal("botName");
    let botName = false;
    if (name != '') {
        botName = true;

    }
    const messagesContainer = document.getElementById("messages");
    var response = allResponse.split("\n");

    for (var i = 0; i < response.length; i++) { //Loop for each line in the chatbot response
        let botDiv = document.createElement("div");
        let botText = document.createElement("span");
        botDiv.id = "bot";
        botDiv.className = "bot response";
        botDiv.appendChild(botText);
        messagesContainer.appendChild(botDiv);

        if (botName) {
            opening = "(" + name + "): ";
            response[i] = opening.concat(response[i]);
        }

        messagesContainer.scrollTop =
        messagesContainer.scrollHeight - messagesContainer.clientHeight;
        //await delay(2000);
        botText.innerText = `${response[i]}`;
        
    }

}