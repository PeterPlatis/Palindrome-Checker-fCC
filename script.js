const checkButton = document.getElementById("check-btn");
checkButton.addEventListener("click", () => {
	checkPalindrome();
});

function checkPalindrome() {
	const inputString = document.getElementById("text-input").value;

	let cleanString = inputString.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
	let invertedString = cleanString.split("").reverse().join();

	alert(cleanString === invertedString);
}
