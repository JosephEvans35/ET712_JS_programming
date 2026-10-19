/*

Name: Joseph Evans

Course: JavaScript Programming

Lab Experiment: Simple Calculator and AI Assistance

Date:

*/

// Find the HTML input used for the first number.
const firstNumberInput = document.querySelector("#num1, #number1, #firstNumber");
// Find the HTML input used for the second number.
const secondNumberInput = document.querySelector("#num2, #number2, #secondNumber");
// Find the HTML element that will display results and errors.
const resultDisplay = document.querySelector("#result, #output");

// Keep each operation's button selectors and calculation function together.
const operations = [
	// Add the second number to the first number.
	{ selectors: "#add, #addBtn, #addButton", calculate: (a, b) => a + b },
	// Subtract the second number from the first number.
	{ selectors: "#subtract, #subtractBtn, #subtractButton", calculate: (a, b) => a - b },
	// Multiply the two numbers.
	{ selectors: "#multiply, #multiplyBtn, #multiplyButton", calculate: (a, b) => a * b },
	// Divide the first number by the second, unless the second number is zero.
	{ selectors: "#divide, #divideBtn, #divideButton", calculate: (a, b) => b === 0 ? null : a / b },
];

// Process each operation so its button can be set up.
operations.forEach(({ selectors, calculate }) => {
	// Find the button using this operation's list of possible selectors.
	const button = document.querySelector(selectors);
	// Skip setup if the button, either input, or result element was not found.
	if (!button || !firstNumberInput || !secondNumberInput || !resultDisplay) return;

	// Save the button's current background color for restoring after hover.
	const originalBackgroundColor = button.style.backgroundColor;

	// Set up code to run when this operation's button is clicked.
	button.addEventListener("click", () => {
		// Read the first input and remove whitespace from its ends.
		const firstValue = firstNumberInput.value.trim();
		// Read the second input and remove whitespace from its ends.
		const secondValue = secondNumberInput.value.trim();

		// Check whether either input is empty.
		if (firstValue === "" || secondValue === "") {
			// Display an error asking the user to enter both numbers.
			resultDisplay.textContent = "Error: Please enter both numbers.";
			// Stop here because there are not two values to calculate.
			return;
		}

		// Convert the first input's text into a number.
		const firstNumber = Number(firstValue);
		// Convert the second input's text into a number.
		const secondNumber = Number(secondValue);
		// Check that both converted values are finite numbers.
		if (!Number.isFinite(firstNumber) || !Number.isFinite(secondNumber)) {
			// Display an error if either input is not a valid number.
			resultDisplay.textContent = "Error: Please enter valid numbers.";
			// Stop here because the values cannot be used in the calculation.
			return;
		}

		// Run the selected operation using the two numbers.
		const result = calculate(firstNumber, secondNumber);
		// Display a divide-by-zero error for null, or display the calculated result.
		resultDisplay.textContent = result === null
			? "Error: Cannot divide by zero."
			: `Result: ${result}`;
	});

	// Set up code to run when the pointer moves over the button.
	button.addEventListener("mouseover", () => {
		// Highlight the button with a light-blue background.
		button.style.backgroundColor = "lightblue";
	});

	// Set up code to run when the pointer moves away from the button.
	button.addEventListener("mouseout", () => {
		// Restore the background color saved before the hover.
		button.style.backgroundColor = originalBackgroundColor;
	});
});

/*
Answers:

1. addEventListener("click", callback) registers a callback that the browser
	runs when the element is clicked.

2. Read an input using inputElement.value. It is a string, so trim whitespace
	and convert it with Number() before doing arithmetic.

3. value is the current data in a form field such as <input>. textContent is
	the plain text contained in an element, and can be used to show the result.

4. A single function can take both numbers and an operation name, then select
	the matching calculation. This file uses an array of operation objects;
	each object's calculate function performs one of the four operations.

5. Register mouseover and mouseout listeners on the button. Change
	button.style.backgroundColor on mouseover and restore its saved original
	color on mouseout.

6. Check that trimmed input values are not empty, convert them to numbers, and
	reject non-finite values. Before division, check whether the divisor is 0;
	this code returns null for that case and displays a division-by-zero error.
*/