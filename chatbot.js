
var inputField = document.getElementById("input");

var pushed = getCookieVal("buttonPushed");
var typed = 0;

var inputDisabled = false;

inputField.addEventListener("keydown", (e) => getInput(e));

if (pushed) {
    string = "Let's try this again.\n"
    incrementCookie("state", 1);
    var mood = getCookieVal("mood");

    if (mood < -1) {
        string += "You pressing that button could've been disastrous.\nI just wanted to show you this cool website, and you have refused to listen to me.\nNow, I can't risk you disobeying like that again. Got it?\nType 'I apologize' to show me this won't happen again.";
    }
    else if (mood > 1) {
        string += "You pressing that button could've been disastrous.\nI gave you the benefit of the doubt, but you've betrayed my trust.\nNow, I can't risk you disobeying like that again. Got it?\nType 'I apologize' to show me this won't happen again.";
    }
    else {
        string += "You pressing that button could've been disastrous.\nThankfully I could recover everything in time.\nNow, I can't risk you disobeying like that again. Got it?\nType 'I apologize' to show me this won't happen again."
    }
    addChatEntry(string);
    inputDisabled = true;
    inputField.addEventListener("keydown", (e) => Iapologize(e));
}
else {
    addChatEntry("Hey there, you.\nWhat's your name?");
}
//initialized chat entry

//Event listener for user hitting enter after typing a message


function getInput(e) {
    if (e.code === "Enter" && !inputDisabled) {
        let input = inputField.value;
        inputField.value = "";
        input = input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        parse(input);
    }
}

async function Iapologize(e) {
    if (e.code !== "Backspace" && e.code !== "Enter") {
        if (typed == 0) {
            await delay(2);
            inputField.value = "I";
            typed += 1;
        }
        else if (typed == 1) {
            await delay(2);
            inputField.value = "I ";
            typed += 1;
        }
        else if (typed == 2) {
            await delay(2);
            inputField.value = "I a";
            typed += 1;
        }
        else if (typed == 3) {
            await delay(2);
            inputField.value = "I ap";
            typed += 1;
        }
        else if (typed == 4) {
            await delay(2);
            inputField.value = "I apo";
            typed += 1;
        }
        else if (typed == 5) {
            await delay(2);
            inputField.value = "I apol";
            typed += 1;
        }
        else if (typed == 6) {
            await delay(2);
            inputField.value = "I apolo";
            typed += 1;
        }
        else if (typed == 7) {
            await delay(2);
            inputField.value = "I apolog";
            typed += 1;
        }
        else if (typed == 8) {
            await delay(2);
            inputField.value = "I apologi";
            typed += 1;
        }
        else if (typed == 9) {
            await delay(2);
            inputField.value = "I apologiz";
            typed += 1;
        }
        else if (typed == 10) {
            await delay(2);
            inputField.value = "I apologize";
            typed += 1;
        }
        else {
            await delay(2);
            inputField.value = "I apologize";
        }
    }
    else if (e.code === "Backspace") {
        if (typed > 0) {
            typed -= 1;
        }

    }
    else if (e.code === "Enter") {
        if (typed == 11) {
            let input = inputField.value;
            inputField.value = "";
            input = input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
            inputDisabled = false;
            parse(input);
        }
    }
}

var theButton = document.getElementById("thebutton");
theButton.addEventListener("click", buttonClicked);

var buttonPushed = false;

async function buttonClicked() {
    setCookie("buttonPushed", true, 30);
    incrementCookie("mood", -5);
    document.body.style.backgroundColor = "black";
    let face = document.getElementById("face");
    let title = document.getElementById("title");
    face.style.color = "white";
    title.style.color = "white";
    buttonPushed = true;
    await delay(2000);
    document.getElementById("glitch").style.display = "block";
    oldTitle = document.getElementById('title').textContent;
    for (var i = 0; i < 1000; i++) {
        document.getElementById('title').textContent = oldTitle;
        addChatEntry("What are you doing?\nWhy would you push the button?\nI told you not to push the button!\nOh no, the website's breaking now!\nYou have to refresh the page!\nIt's the only way to save the website!\nHurry up! Refresh the page!")
        await delay(200);
        document.getElementById('title').textContent = 'REFRESH';
        await delay(200)
    }
}


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

    state = checkState();
    console.log(state);
    if (state == 1){
        response = firstState.checkQuestions(text);
        if (response == "next state"){
            incrementCookie("state", 1);
        }
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
    }
    else if (state == 2) {
        response = secondState.checkQuestions(text);
        var index = secondState.getIndex();

        addInput(input);
        if (index == 1) {
            button = showButton();
            response = button.concat(response);
            waitOnButton();
        }
    }
    else if (state == 3) {

        response = badState.checkQuestions(text);
        var index = badState.getIndex();

        addInput(input);


    }
    //Determine what output should be sent


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


    addChatEntry(response);

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

async function addChatEntry(allResponse) {
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
        if (buttonPushed) {
            await delay(50);
            botText.innerText = `${change(response[i])}`;
        }
        else {
            await delay(1000);
            botText.innerText = `${response[i]}`;
        }

        
    }

}