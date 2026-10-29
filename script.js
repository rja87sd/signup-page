let clubName = "After Hours Book Club";
console.log("Welcome to " + clubName);

let meetingDay = "Sunday";
console.log("We meet on the first and third " + meetingDay + " of each month.");

// Define function
function sayHi() {
  console.log("Hi! Thanks for visiting.");
}

// Call function
sayHi();

function sayBye() {
  console.log("Goodbye.");
}

sayBye();
sayBye();

let nextButton = document.querySelector("#next-btn");
let nextMeeting = document.querySelector("#next-meeting");

function showNextMeeting() {
  nextMeeting.textContent = "Our next meeting is Sunday, November 1 at 5 PM.";
}

nextButton.addEventListener("click", showNextMeeting);