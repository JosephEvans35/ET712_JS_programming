console.log("\n ------ Class Example 1: Arrays ------")
let sports = ["soccer", "baseball", "football", "hockey"];
console.log(sports);
console.log(sports[0]);

console.log("\n ------ Class Example 2: Looping Through Arrays ------")
let cars = ["Toyota", "Honda", "Ford", "Chevy"];
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

console.log("\n ------ Class Example 3: Function ------")
function square(num) {
    return num * num;
}
console.log(square(15));

console.log("\n ------ Lab Exercise: Students Scores Analyzer ------")

// This section creates an empty array called scores and asks the user to enter
let scores = [];

// five test scores, one for each student. Each score is converted to a number and
// then added to the scores array so the data can be processed later.

for (let i = 0; i < 5; i++) {
    const score = Number(prompt(`Enter score for student ${i + 1}:`));
    scores.push(score);
}

// This function calculates the average of all numbers stored in the scores array.
// It adds every score together and divides by the number of scores in the array.
function calculateAverage() {
    let total = 0;
    for (let i = 0; i < scores.length; i++) {
        total += scores[i];
    }
    return total / scores.length;
}

// After the average is calculated, the program prints the list of scores and the
// average, then checks whether the class average is at least 65 to decide if the
// class passed or failed.
const averageScore = calculateAverage();
console.log("Scores: " + scores.join(","));
console.log("Average Score: " + averageScore);

if (averageScore >= 65) {
    console.log("Class Passed");
} else {
    console.log("Class Failed");
}

// AI helped organize the score-collection loop and average calculation
// The AI also helped explain the code in comments and added a check for class passing or failing based on the average score.