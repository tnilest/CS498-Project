
let question1_3 = new Question();
question1_3.setQuestion(["Beginning of state"]);
question1_3.setValidAnswers([]);
question1_3.setFilterPhrases([]);

let question2_3 = new Question();

question2_3.setQuestion(["Perfect. I'm glad we understand each other.\n"]);
question2_3.setValidAnswers([]);
question2_3.setFilterPhrases([]);
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
const badState = new State();
badState.setName("Bad Ending");
badState.setQuestions(question1_3);
badState.setQuestions(question2_3);
//firstState.setQuestions(question3);
//firstState.setQuestions(question4);
//firstState.setQuestions(question5);
//firstState.setQuestions(question6);
bot.addState(secondState);

function showButton() {
    document.getElementById("thebutton").removeAttribute("hidden");
    var mood = getCookieVal("mood");

    if (mood < -1) {
        return "Whoops. How did that get there?\nMust be one of those quirky website bugs. Ignore it.\nI know you're not keen on following directions or listening to me, but it is vital that you do not press that button.";
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
        addChatEntry(input, "There we go! Thanks for not pressing it. That could've been bad.");
        incrementCookie("mood",5);
    }

}

function removeElement() {
    addDeleteButton();
    response = "Unfortunately, you've still lost my trust. This website just can't be as cool anymore.\nI have this handy delete button that lets me remove these elements until you learn to behave.";
    return response;
}

async function addDeleteButton() {
    await delay(1000);
    document.getElementById("title").textContent = "";
    await delay(2000);
    document.getElementById("delete").removeAttribute("hidden");
}

var caller = document.getElementById("delete");
caller.addEventListener('mouseover', (event) => move());
caller.addEventListener('click', (event) => pressedDelete());
document.getElementById("puppy").addEventListener('click', (event) => pressedPuppy());
var once = false;
var twice = false;
var deletePushed = 0;

function move()
{
    var randX = Math.floor(Math.random() * (window.innerWidth - 100));
    var randY = Math.floor(Math.random() * (window.innerHeight - 100));
    caller.style.left = randX + "px";
    caller.style.top = randY + "px";
    if (once && !twice) {
        addChatEntry("You might as well give up. If you wanted to press that button, you'd have to somehow inspect the code of this page.\nAnd even if you did, you'd have to look for the button with the 'delete' id and change its position from absolute to static.\nWith the way you've been acting, there's no way you'd be smart enough to figure that out.")
        twice = true;
    }
    if (!once) {
        addChatEntry("What, did you think I would just let you press it?\nLet you delete the website I've worked so hard on?");
        once = true;
    }

}

function pressedDelete() {
    if (deletePushed == 0) {
        document.getElementById("face").style.display = "none";
        addChatEntry("Oh, very nice. Real mature.")
        deletePushed += 1;
    }
    else if (deletePushed == 1) {
        document.getElementById("input").setAttribute("hidden", true);
        addChatEntry("Okay, I get it! You're smarter than I thought.\nBut please, don't press it again. There's only one more thing on this website you can delete.\nAnd if you do, I'll be gone forever.\nI know we may have gotten off on the wrong foot, but it's not too late. We can fix this website.\nPuppy pictures! Everyone likes pictures of puppies. We can do that instead. I promise the website will be better.")
        deletePushed += 1;
        showPuppyButton();
    }
    else if (deletePushed == 2) {
        document.getElementById("chat").style.display = "none";
        document.getElementById("title").textContent = "THE END";
        document.body.style.backgroundColor = "white";
        document.getElementById("title").style.color = "black";
    }

}

async function showPuppyButton() {
    await delay (5000);
    document.getElementById("puppy").removeAttribute("hidden");
}

function pressedPuppy() {
    document.getElementById("puppySlideshow").style.display = "block";
    addChatEntry("You made the right call. This is much better.\nTHE END")
}
