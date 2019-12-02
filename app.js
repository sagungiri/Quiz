var objPeople = [
	{
		username: "sagun",
		password: "nugas"
	},
	{
		username: "bikram",
		password: "bikram1"
	},
	{
		username: "prabesh",
		password: "prabesh"
	}

]
//all about LogIn Form
function quiz() {
	var element = document.getElementById("wrapper");
	element.classList.add("hide");
	var nextElement = document.getElementById("quiz")
	nextElement.classList.remove("hide");
}


function getInfo() {
	var username = document.getElementById('name').value
	var password = document.getElementById('password').value

	for (var i = 0; i < objPeople.length; i++) {
		if (username === objPeople[i].username && password === objPeople[i].password) {
			alert("Welcome " + username);
			quiz();
			return
		}
	}
	alert('Invalid Username and Password')
}


var hello = document.querySelector('#submit');
hello.addEventListener("click", function () {
	getInfo();
});
// This is quiz time
var questions = [
	{
		question: 'How do you look?',
		answers: [
			{ text: 'handsome', correct: true },
			{ text: 'ugly', correct: false },
			{ text: 'not bad', correct: false },
			{ text: 'repulsive', correct: false },
		]
	},
	{
		question: 'What is always coming, but never arrives?',
		answers: [
			{ text: 'melamchi project', correct: false },
			{ text: 'tomorrow', correct: true },
			{ text: 'money with friends', correct: false },
			{ text: 'happiness', correct: false },
		]
	},
	{
		question: 'What can be broken, but is never held?',
		answers: [
			{ text: 'trust', correct: false },
			{ text: 'glass', correct: false },
			{ text: 'stone', correct: false },
			{ text: 'promise', correct: true },
		]
	},
	{
		question: 'Which room has no walls?',
		answers: [
			{ text: 'bedroom', correct: false },
			{ text: 'mushroom', correct: true },
			{ text: 'classroom', correct: false },
			{ text: 'darkroom', correct: false },
		]
	},
	{
		question: 'What goes up and down, but never moves?',
		answers: [
			{ text: 'aeroplane', correct: false },
			{ text: 'rocket', correct: false },
			{ text: 'lift', correct: false },
			{ text: 'stairs', correct: true },
		]
	}
]


