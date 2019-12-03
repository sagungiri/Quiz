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

// var question = document.getElementById('question');
// question.innerHTML = questions[0].question;

// var answers = document.getElementById('answer');
// var ansBtn = document.getElementById('ans1');

// for (var i = 0; i < questions[0].answers.length; i++) {

// 	ansBtn.innerHTML = questions[0].array.forEach(answers => {
// 		ansBtn.innerHTML = 
// 	});
// }


//console.log(questions[0].answers.length)

const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('questionsTime')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer')
var scoreText = document.getElementById("score");
var score = 0

let shuffledQuestions, currentQuestionIndex
startGame();
nextButton.addEventListener('click', () => {
	currentQuestionIndex++
	setNextQuestion()
})

function startGame() {
	shuffledQuestions = questions.sort(() => Math.random() - .5)
	currentQuestionIndex = 0
	questionContainerElement.classList.remove('hide')
	setNextQuestion()
}

function setNextQuestion() {
	resetState()
	showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
	questionElement.innerText = question.question
	question.answers.forEach(answer => {
		const button = document.createElement('button')
		button.innerText = answer.text
		button.classList.add('btn')
		if (answer.correct) {
			button.dataset.correct = answer.correct
		}
		button.addEventListener('click', selectAnswer)
		answerButtonsElement.appendChild(button)

		if (answer.correct == true) {
			score += 5;
			scoreText.innerText = "your current score is " + score;
		}
	})

}

function resetState() {
	clearStatusClass(document.body)
	nextButton.classList.add('hide')
	while (answerButtonsElement.firstChild) {
		answerButtonsElement.removeChild(answerButtonsElement.firstChild)
	}
}

function selectAnswer(e) {
	const selectedButton = e.target
	const correct = selectedButton.dataset.correct
	setStatusClass(document.body, correct)
	Array.from(answerButtonsElement.children).forEach(button => {
		setStatusClass(button, button.dataset.correct)
	})
	if (shuffledQuestions.length > currentQuestionIndex + 1) {
		nextButton.classList.remove('hide')
	}
}

function setStatusClass(element, correct) {
	clearStatusClass(element)
	if (correct) {
		element.classList.add('correct')
	} else {
		element.classList.add('wrong')

	}
}

function clearStatusClass(element) {
	element.classList.remove('correct')
	element.classList.remove('wrong')
}


