const inputString = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

checkButton.addEventListener("click", () => {
	checkPalindrome(inputString.value);
});

function checkPalindrome(inStr) {
	if (inStr == "") {
		alert("Please input a value");
	} else {
		let cleanString = inStr.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
		let invertedString = cleanString.split("").reverse().join('');

		if (cleanString === invertedString) {
			result.innerText = `${inStr} is a Palindrome`;
		} else {
			result.innerText = `${inStr} is not a Palindrome`;
		}
	}
}
