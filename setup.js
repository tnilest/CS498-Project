async function updateBodyInnerHTMLByState(stateNumber) {
	const fileName = "state"+stateNumber+".html";
	console.log(fileName);
    let response = await fetch(fileName);
    let data = await response.text();
    document.body.innerHTML = data;
}

function changeBackgroundColor(color){
	document.body.style.backgroundColor = color;
}

function changePageTitle(title){
	document.title = title;
}

function updateField(cookieName, foo){
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
	let state = checkState();
	// initialize mood if needed
	let mood = getCookieVal("mood");
	if (mood != "" && mood != null) {
		return state;
	} else {
		setCookie("mood", 0, 30);
	}

	// background color
	updateField("backgroundColor", changeBackgroundColor);
	// title
	updateField("pageTitle", changePageTitle);

	if (state == "1"){


	}
	else if (state == "2"){
		updateBodyInnerHTMLByState(2);
	}
	else if (state == "3"){}
	else if (state == "4"){}
}

