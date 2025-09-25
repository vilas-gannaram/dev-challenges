// UI/UX Design
const design = document.querySelector("#design");
const designBtn = document.querySelector("#designBtn");

design.addEventListener("mouseover", () => {
  designBtn.style.backgroundColor = "#2D9CDB";
  designBtn.style.color = "#F2F2F2";
});

design.addEventListener("mouseout", () => {
  designBtn.style.backgroundColor = "#E0E0E0";
  designBtn.style.color = "#828282";
});

// Front End
const frontEnd = document.querySelector("#frontEnd");
const frontEndBtn = document.querySelector("#frontEndBtn");

frontEnd.addEventListener("mouseover", () => {
  frontEndBtn.style.backgroundColor = "#2D9CDB";
  frontEndBtn.style.color = "#F2F2F2";
});

frontEnd.addEventListener("mouseout", () => {
  frontEndBtn.style.backgroundColor = "#E0E0E0";
  frontEndBtn.style.color = "#828282";
});

// Back End
const backEnd = document.querySelector("#backEnd");
const backEndBtn = document.querySelector("#backEndBtn");

backEnd.addEventListener("mouseover", () => {
  backEndBtn.style.backgroundColor = "#2D9CDB";
  backEndBtn.style.color = "#F2F2F2";
});

backEnd.addEventListener("mouseout", () => {
  backEndBtn.style.backgroundColor = "#E0E0E0";
  backEndBtn.style.color = "#828282";
});



// Get the form element using its ID
const form = document.getElementById('my-dummy-form');

// Add an event listener for the 'submit' action
form.addEventListener('submit', function (event) {
	// 1. PREVENT THE DEFAULT SUBMISSION (THIS STOPS THE URL PARAMETERS)
	event.preventDefault();

	// 2. OPTIONAL: ALERT THE USER TO CLARIFY IT'S A DEMO
	alert(
		'Thank you! This is a non-functional portfolio project and does not process any data.'
	);
});
