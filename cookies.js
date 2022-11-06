function setCookie(cookieName, cookieValue, expireDays) {
	const date = new Date();
	date.setTime(date.getTime() + (expireDays*24*60*60*1000));
	let expires = "expires=" + date.toUTCString();
	// console.log(cookieName + "=" + cookieValue + ";" + expires + ";path=/");
	document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

function getCookieVal(cookieName) {
	// console.log(document.cookie)
	let name = cookieName + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(';');
	for(let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function checkCookie() {
	let stage = getCookieVal("stage");
	if (stage != "" && stage != null) {
		alert("Your stage " + stage);
	} else {
		deleteAllCookies(); // delete all cookies if the stage cookie has been unset
		setCookie("stage", 1, 30);
	}
}

function getCookiesDict() {
	var cookies = {};
	if (document.cookie && document.cookie != '') {
		var split = document.cookie.split(';');
		for (var i = 0; i < split.length; i++) {
			var name_value = split[i].split("=");
			name_value[0] = name_value[0].replace(/^ /, '');
			cookies[decodeURIComponent(name_value[0])] = decodeURIComponent(name_value[1]);
		}
	}
	console.log(cookies);
	return cookies;
}

function deleteCookie(cookieName){
	document.cookie = cookieName + "=; expires=Sat, 01 Jan 2000 00:00:00 UTC; path=/;";
}

function deleteAllCookies(){
	cookies = getCookiesDict();
	for (var key in cookies) {
		if (cookies.hasOwnProperty(key))
			deleteCookie(key);
	}
	getCookiesDict();
}

function incrementCookie(cookieName, incrementAmount){
	cookieVal = getCookieVal(cookieName);
	if (!isNumber(incrementAmount)){
		incrementAmount = parseFloat(incrementAmount);
		if (isNaN(incrementAmount)){
			console.log("incrementAmount is NaN")
			return false;
		}
	}
	if (cookieVal != null && cookieVal != ""){
		let val = parseFloat(cookieVal);
		if (!isNaN(val)){
			setCookie(cookieName, val+incrementAmount, 30);
			console.log(cookieName + " updated to " + (val+incrementAmount));
			return true;
		}
	}
	console.log("Cookie does not exist or does not have a numerical value");
	return false;
}

function isNumber(value) {
	return typeof value === 'number' && isFinite(value);
}

function getIntFromCookie(cookieName){
	cookieVal = parseInt(getCookieVal(cookieName));
	if (!isNaN(cookieVal))
		return cookieVal;
	return false;
}

function getFloatFromCookie(cookieName){
	cookieVal = parseFloat(getCookieVal(cookieName));
	if (!isNaN(cookieVal))
		return cookieVal;
	return false;
}