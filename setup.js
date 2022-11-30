async function updateBodyInnerHTMLByState(stateNumber) {
    if (stateNumber == 3 || stateNumber == 2){
        window.location.reload();
        return;
    }
	const fileName = "state"+stateNumber+".html";
	console.log(fileName);
    let response = await fetch(fileName);
    let data = await response.text();
    document.body.innerHTML = data;

}

function setupChangeBackgroundColor(color){
	document.body.style.backgroundColor = color;
}

function setupChangePageTitle(title){
	document.getElementById("title").textContent = title;
}

function setupChangeTitleColor(color){
	document.getElementById("title").style.color = color;
}


function updateField(cookieName, foo){
	console.log("changing " + cookieName);
	let val = getCookieVal(cookieName);
	if (val != "" && val != null){
		try{
			foo(val);
		} catch (error){
			console.log(error);
		}
	}
}


function setup(){
	console.log("asdf")
	let state = checkState();
	// initialize mood if needed
	let mood = getCookieVal("mood");
	if (mood == "" || mood == null) {
		console.log(mood);
		setCookie("mood", 0, 30);
	}
	else console.log("no mood");

	// background color
	updateField("backgroundColor", setupChangeBackgroundColor);
	// title
	updateField("pageTitle", setupChangePageTitle);
	// title color
	updateField("titleColor", setupChangeTitleColor);

//	if (state == "1"){
//
//
//	}
//	else if (state == "2"){
//		updateBodyInnerHTMLByState(2);
//	}
//	else if (state == "3"){updateBodyInnerHTMLByState(3);}
//	else if (state == "4"){}
}

