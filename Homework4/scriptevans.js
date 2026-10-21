// Exercise 1: Validate the sign-up form and respond to its submit event.
// AI assistance helped explain submit events, email patterns, and DOM error messages.
// Find the form in the HTML by its ID and store it in `form`.
var form = document.getElementById("signup-form");
// Find the element that displays the overall form result.
var formMessage = document.getElementById("form-message");

// Register a function to run whenever the user submits the form.
form.addEventListener("submit", function (event) {
    // Prevent the browser's normal submit behavior, such as reloading the page.
    event.preventDefault();

    // Read the name input and remove whitespace from its beginning and end.
    var name = document.getElementById("name").value.trim();
    // Read the email input and remove whitespace from its beginning and end.
    var email = document.getElementById("email").value.trim();
    // Read the password input; this code does not trim its whitespace.
    var password = document.getElementById("password").value;
    // Start by assuming the form is valid; failed checks below change this to false.
    var valid = true;

    // Clear a name error left over from a previous submission.
    document.getElementById("name-error").textContent = "";
    // Clear an email error left over from a previous submission.
    document.getElementById("email-error").textContent = "";
    // Clear a password error left over from a previous submission.
    document.getElementById("password-error").textContent = "";
    // Clear the overall message left over from a previous submission.
    formMessage.textContent = "";

    // Check whether the trimmed name has no characters.
    if (name === "") {
        // Display a required-name error next to the name input.
        document.getElementById("name-error").textContent = "Name is required.";
        // Mark the whole form as invalid.
        valid = false;
    }
    // Test the email using a basic pattern: text, @, text, a dot, then more text.
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        // Display this message if the email does not match the basic pattern.
        document.getElementById("email-error").textContent = "Enter a valid email, such as name@example.com.";
        // Mark the whole form as invalid.
        valid = false;
    }
    // Fail if the password is too short OR has none of the required symbols (#, $, %).
    if (password.length < 5 || !/[#$%]/.test(password)) {
        // Explain the password rules next to the password input.
        document.getElementById("password-error").textContent = "Use at least 5 characters and include #, $, or %.";
        // Mark the whole form as invalid.
        valid = false;
    }

    // If all checks passed, show success feedback.
    if (valid) {
        // Set the overall message to a success sentence.
        formMessage.textContent = "Form submitted successfully!";
        // Make the success message green.
        formMessage.style.color = "#26734d";
    // If any check failed, show a general error instead.
    } else {
        // Tell the user to fix the field-specific errors above.
        formMessage.textContent = "Please correct the errors above.";
        // Make the error message red.
        formMessage.style.color = "#b42318";
    }
// Close the submit callback and finish registering the event listener.
});

//questions and Answers:
// 1. event.preventDefault() cancels the browser's default form submission, so this
//    handler can validate the inputs and show feedback without a page reload.
// 2. A regular expression checks whether text follows a pattern. The expression
//    below checks for non-space text before and after @, followed by a dot and
//    more non-space text. It is a basic format check, not proof the address exists.
// 3. To display errors dynamically, select the relevant DOM element and assign
//    its textContent. This script clears old messages, then updates each field's
//    error element and the overall form message based on the validation results.
// 4. Password strength can be checked with rules such as minimum length and
//    required character types. Here, the password must be at least 5 characters
//    and contain #, $, or %; the regular expression tests for one of those symbols.


// Exercise 2: Navigate between pages in the card gallery.
// AI assistance helped explain button events and moving through gallery pages.

// Find and store the gallery's scrollable viewport element.
var gallery = document.getElementById("gallery-window");
// Track the current gallery page; page 0 is the starting page.
var page = 0;
// Find the right button and register a function to run when it is clicked.
document.getElementById("right-button").addEventListener("click", function () {
    // Advance to the next page; modulo 2 wraps page 1 back to page 0.
    page = (page + 1) % 2;
    // Scroll by one viewport width per page, with a smooth animation.
    gallery.scrollTo({ left: page * gallery.clientWidth, behavior: "smooth" });
// Close the right-button callback and finish registering its listener.
});
// Find the left button and register a function to run when it is clicked.
document.getElementById("left-button").addEventListener("click", function () {
    // This also advances and wraps between pages; it currently matches the right button behavior.
    page = (page + 1) % 2;
    // Scroll to the horizontal position for the current page, smoothly.
    gallery.scrollTo({ left: page * gallery.clientWidth, behavior: "smooth" });
// Close the left-button callback and finish registering its listener.
});

// Questions and Answers:
// 1. Make the card container a flex row (display: flex) and place it inside a
//    viewport with overflow-x: auto. Give each card a fixed or minimum width so
//    cards line up horizontally and can scroll when wider than the viewport.
// 2. addEventListener("click", callback) registers a function that runs when a
//    button is clicked. The function can update the current page and move the
//    gallery, as shown in the button handlers above.
// 3. A transform such as translateX(-100%) shifts an element horizontally. A
//    CSS transition on the transform animates that shift to create a slide;
//    JavaScript can trigger it by changing a class or the transform value.
// 4. Select the cards and loop through the collection, for example with
//    cards.forEach(function (card) { ... }). Inside the callback, you can inspect
//    each card, update its content or classes, or attach an event listener.

