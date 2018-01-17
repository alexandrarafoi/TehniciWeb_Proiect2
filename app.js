//questions
function Question(text, choices, answer,image){
	this.text=text;
	this.choices=choices;
	this.answer=answer;
	this.image=image;
	
};
Question.prototype.correctAnswer= function(choice){
	return choice == this.answer;
};

//controller
function Quiz (questions){
	this.scor=0;
	this.questions = questions;
	this.questionIndex =0;
	
	
};
Quiz.prototype.getQuestionIndex = function(){
	return this.questions[this.questionIndex];
};
Quiz.prototype.isEnded = function(){
	return this.questions.length === this.questionIndex;
};
Quiz.prototype.guess = function (answer){

	if(this.getQuestionIndex().correctAnswer(answer)){
		this.scor++;
	}
		this.questionIndex++;
};

//app
function populate(){
	if(quiz.isEnded() ){
		showScores();
	}
	else{
		// show question
		var element = document.getElementById("question");
		element.innerHTML = quiz.getQuestionIndex().text;
		
	
		//show choices
		var choices = quiz.getQuestionIndex().choices;
		for(var i=0; i< choices.length; i++){
			var element = document.getElementById("aleg"+i);
			element.innerHTML = choices[i];
			guess("but"+i,choices[i]);
			
		//show image
		var imag = document.getElementById("image");
		imag.src = quiz.getQuestionIndex().image;
		
		}
		//show progress
		showProgress();
		
	}
};
function guess(id, guess){
	var button = document.getElementById(id);
	button.onclick = function(){
		quiz.guess(guess);
		populate();
	}
};
function showProgress(){
	var currentQuestionNumber = quiz.questionIndex + 1;
	var element = document.getElementById("progres");
	element.innerHTML = "Intrebarea " + currentQuestionNumber+ " din "+quiz.questions.length;
	
}

function showScores(){
	var gameOverHtml = "<h1> Rezultat </h1>";
		gameOverHtml += "<h2 id='scor'> Scorul tau : "+ quiz.scor+ "</h2>";
		if(quiz.scor>=8)
			gameOverHtml += "<h2 id='scor' align='center'> Felicitari! </h2>";
			else
				if(quiz.scor<=7 && quiz.scor>=5)
					gameOverHtml += "<h2 id='scor' align='center'> Puteai mai bine! </h2>";
					else
						gameOverHtml += "<h2 id='scor' align='center'> Cam slabut! </h2>";
						
		gameOverHtml += "<input type='button' style='font-family:courier new;margin-top:50px;text-align: center;font-weight:bold;background-color:#57636e;width:250px;font-size:20px;color:#fff;border: 1px solid #1d3c6a;border-radius: 50px;margin: 10px 40px 10px 0px;padding:10px 10px;position: relative;left: 15%;' value='Restarteaza jocul' onclick=window.location.href='start.html' />";
		gameOverHtml += "<br><br>"
		gameOverHtml += "<h2 style='text-align: center;'>Vrei sa primesti newsletter?</h2>"
		gameOverHtml += "<input type='button' style='font-family:courier new;margin-top:50px;text-align: center;font-weight:bold;background-color:#57636e;width:250px;font-size:20px;color:#fff;border: 1px solid #1d3c6a;border-radius: 50px;margin: 10px 40px 10px 0px;padding:10px 10px;position: relative;left: 15%;' value='Inregistrare' onclick=window.location.href='form.html' />";
		
		var element = document.getElementById("quiz");
		element.innerHTML = gameOverHtml;
};

var questions = [
	new Question("Care este capitala statului Coreea de Sud?", ["a.Phenian","b.Hanoi", "c.Seoul", "d.Kyoto"],"c.Seoul","seul.jpg"),
	new Question("Care este numele celui mai intins lac din Ungaria?", ["a.Aral","b.Caspic", "c.Baikal", "d.Balaton"],"d.Balaton","balaton.jpg"),
	new Question("Cum se numeste fluviul cu cel mai mare debit de pe Glob?", ["a.Amazon","b.Nil", "c.Fluviul Galben", "d.Volga"],"a.Amazon","amazon.jpg"),
	new Question("Care este a doua planeta ca marime din sistemul nostru solar?", ["a.Jupiter","b.Saturn", "c.Uranus", "d.Marte"],"b.Saturn","saturn.jpg"),
	new Question("Cum se numeste stramtoarea ce separa peninsula Iberica de Africa? ", ["a.Bosfor","b.Gibraltar", "c.Magellan", "d.Dardanele"],"b.Gibraltar","gibraltar.jpg"),
	new Question("Care este numele megacontinentului ce ocupa initial suprafata Terrei?", ["a.Gondwana","b.Laurasia", "c.Tethys", "d.Pangea"],"d.Pangea","pangea.jpg"),
	new Question("In ce emisfera a globului se afla Thailanda, din punct de vedere latitudinal?", ["a.Estica","b.Nordica", "c.Vestica", "d.Sudica"],"d.Sudica","thai.jpg"),
	new Question("Steagul carei tari este reprezentat in imagine?", ["a.Nepal","b.Mongolia", "c.Kazasthan", "d.Uzbekisthan"],"a.Nepal","nepal.jpg"),
	new Question("In ce orogeneza s-au format Muntii Carpati?", ["a.Hercinica","b.Caledoniana", "c.Alpina", "d.Precambiana"],"c.Alpina","carpati.jpg"),
	new Question("Care este capitala Eritreei?", ["a.Asmara","b.Addis Abeba", "c.Saana", "d.Mogadishu"],"b.Addis Abeba","eritreea.jpg"),


];

var quiz = new Quiz(questions);
populate();






