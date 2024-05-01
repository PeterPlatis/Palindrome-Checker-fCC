const inputString = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");
const root = document.querySelector(":root");

checkButton.addEventListener("click", () => {
	checkPalindrome(inputString.value);
});

function checkPalindrome(inStr) {
	if (inStr == "") {
		alert("Please input a value");
	} else {
		let cleanString = inStr.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
		let invertedString = cleanString.split("").reverse().join("");

		if (cleanString === invertedString) {
			result.innerText = `${inStr} is a Palindrome`;
			makeSplashGreen();
		} else {
			result.innerText = `${inStr} is not a Palindrome`;
			makeSplashRed();
		}
	}
}

function makeSplashGreen() {
	root.style.setProperty("--splash", "var(--green)");
}

function makeSplashRed() {
	root.style.setProperty("--splash", "var(--red)");
}
