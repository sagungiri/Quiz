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
function quiz (){
  var element = document.getElementById("wrapper");
   		element.classList.add("hide");
   		var nextElement = document.getElementById("quiz")
   		nextElement.classList.remove("hide");
}


function getInfo() {
	var username = document.getElementById('name').value
var password = document.getElementById('password').value
	
	for(var i = 0; i < objPeople.length; i++) {
		if(username === objPeople[i].username && password === objPeople[i].password) {
			alert("Welcome "+ username);
			quiz();
			return
}
	}
	alert('Invalid Username and Password')
	}


var hello = document.querySelector('#submit');
hello.addEventListener("click", function(){
  getInfo();
});
// This is quiz time
var questions = [
 {
    question:
    answers: [
      { text: '4', correct: true },
      { text: '22', correct: false }
    ]
  },
]

