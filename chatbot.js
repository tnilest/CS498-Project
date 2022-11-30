
var inputField = document.getElementById("input");

var pushed = getCookieVal("buttonPushed");
var typed = 0;

var inputDisabled = false;

inputField.addEventListener("keydown", (e) => getInput(e));
if (getCookieVal("state") == 3) {
    string = "Let's try this again.\n"
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
else if (getCookieVal("state") == 2) {
    addChatEntry("There we go! Thanks for not pressing it. That could've been bad.\nYou know what you deserve? A golden star.");
    document.getElementById("star").removeAttribute("hidden");
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
    if (e.code !== "Backspace" && e.code !== "Enter" && inputDisabled) {
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
    incrementCookie("state", 2);
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
        await delay(500);
    }
}
var confusion = ["I didn't understand that one.", "I don't get what you're saying.", "I'm confused what that means.", "I don't understand that. Try talking better.", "I have no idea what you're talking about.", "I'm not sure what that means. Hey, I'm not a perfect chatbot.", "You've stumped me. Try phrasing differently."];

async function waitForButton() {
    await delay(1500);
    button = showButton();
    addChatEntry(button);
    waitOnButton();
}

async function waitOnButton() {
    await delay(10000);
    addChatEntry("Almost got it. Thanks for being patient.");
    await delay(5000);
    if (!buttonPushed) {
        document.getElementById("thebutton").setAttribute("hidden", true);
        addChatEntry("There we go! Thanks for not pressing it. That could've been bad.\nYou know what you deserve? A golden star.");
        incrementCookie("mood",5);
        incrementCookie("state", 1);
        await delay(2000);
        document.getElementById("star").removeAttribute("hidden");
    }

}
    //Parse and generate output from the user's message
async function parse(input) {
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
    addInput(input);
    if (state == 1){
        response = firstState.checkQuestions(text);
        if (confusion.includes(response)) {
            addChatEntry(response);
            return
        }
//        if (response == "next state"){
//            incrementCookie("state", 1);
//        }
        var index = firstState.getIndex();

        //addInput(input);
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
            waitForButton();
        }
    }
    else if (state == 2) {
        response = secondState.checkQuestions(text);
        if (confusion.includes(response)) {
            addChatEntry(response);
            return
        }
        var index = secondState.getIndex();

        //addInput(input);
        if (index == 1) {
            response = button.concat(response);

        }
    }
    else if (state == 3) {

        response = badState.checkQuestions(text);
        if (confusion.includes(response)) {
            addChatEntry(response);
            return
        }
        var index = badState.getIndex();
        if (index == 1) {
            text = removeElement();
            response = response.concat(text);
        }

        //addInput(input);


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

//SLIDESHOW CONTROLS
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

//DRAGGABLE STAR CONTROLS
dragElement(document.getElementById("dragStar"));
var dragging = false;

function elementsOverlap(el1, el2) {
  const domRect1 = el1.getBoundingClientRect();
  const domRect2 = el2.getBoundingClientRect();

  return !(
    domRect1.top > domRect2.bottom ||
    domRect1.right < domRect2.left ||
    domRect1.bottom < domRect2.top ||
    domRect1.left > domRect2.right
  );
}

//document.getElementById("face").addEventListener('mouseenter', (event) => {
//    console.log(dragging);
//    if (dragging) {
//        console.log("Overlap");
//    }
//});

var face = document.getElementById("face").textContent;
function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.onmousedown = dragMouseDown;
    function dragMouseDown(e) {
        dragging = true;
        face = document.getElementById("face").textContent;
        document.getElementById("face").textContent = "( ͒ ۝ ͒ )";
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";

    }

    async function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
        document.getElementById("face").textContent = face;
        dragging = false;
        if (elementsOverlap(document.getElementById("face"), document.getElementById("star"))) {

            if(checkState() == 1){
                document.getElementById("star").setAttribute("hidden", true);
                incrementCookie("state", 1);
                addChatEntry("Wow! Thank you so much!\n Well, I've had a wonderful time talking to you.\n As thanks, I have a fun game I want to show you.\n");
                await delay (5000);
                window.location.href = "flappy.html";
            }

//            window.location.href = "flappy.html";
            console.log("Overlap");
        }
        if (elementsOverlap(document.getElementById("trash"), document.getElementById("star"))) {
            console.log("Trash");
        }
}
}

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
    await delay(3000);
    if (!buttonPushed) {
        document.getElementById("thebutton").setAttribute("hidden", true);
        addChatEntry("There we go! Thanks for not pressing it. That could've been bad.");

        incrementCookie("mood",5);
        document.getElementById("star").setAttribute("hidden", false);

    }
}