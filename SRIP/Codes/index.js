var English_Sentences = ['the apple is red', 'the car is broken', 'the cat eats the rat', 'the bank of the river', 'the bank of India', 'park the car', 'book the ticket', 'pack of cards'];

var Hindi_Sentences = ['मुझे आपकी बहुत याद आयी', 'क्या आप मेरी मदद कर सकते हैं']

var x, chosenWords = [], shuffledEnglishSentences = [], shuffledHindiSentences = [], chosenSentence = [], index_id = [], sen = [], hin_sen = [], r = "", id_1, word, val, random1, truth = true, random;

function selectEngorHin()
{
	x = document.getElementById("selectedEngorHin").value;

	if(truth == true)
	{
		shuffleEnglishsentences();

		shuffleHindisentences();

		truth = false;
	}

	if(x == "English")
	{
		document.getElementById("right").style.display = "none";

		document.getElementById("wrong").style.display = "none";

		document.getElementById("rightsentence").style.display = "none";

		document.getElementById("check-correct").style.display = "none";

		document.getElementById("demo3").style.display = "none";

		document.getElementById("re-form").style.display = "none";

		document.getElementById("gettingcorrectans").style.display = "none";

		r = "";

		$('#chosen').html(r);

		chosenWords = [], chosenSentence = [];
		
		document.getElementById("demo").style.display = "block";
		
		document.getElementById("demo1").style.display = "block";		
		
		document.getElementById("buttons").style.display = "block";

		document.getElementById("chosen").style.display = "block";
		
		random = getRandomNumber();
		
		var res = shuffledEnglishSentences[random].split(" ");

		sen = English_Sentences[random];
		
		s = "";
		
		for(var i = 0; i < res.length; i++) 
		{
			s += '<button class = "button" id = "' + i  + '" value = "' + res[i] + '" name = "' + res.length + '" onclick = "buttonselected(this.id)">' + res[i] + '</button>';

			for(var j = 0; j < 40; j++)
			{
				s += '&nbsp;';
			}
		}

		console.log(s);

		console.log(shuffledEnglishSentences.length);

		console.log(random);

		console.log(sen);
		
		$('#buttons').html(s);
	}

	else if(x == "Hindi")
	{
		document.getElementById("right").style.display = "none";

		document.getElementById("wrong").style.display = "none";

		document.getElementById("rightsentence").style.display = "none";

		document.getElementById("check-correct").style.display = "none";

		document.getElementById("demo3").style.display = "none";

		document.getElementById("re-form").style.display = "none";

		document.getElementById("gettingcorrectans").style.display = "none";
		
		r = "";

		$('#chosen').html(r);

		chosenWords = [], chosenSentence = [];
		
		document.getElementById("demo").style.display = "block";
		
		document.getElementById("demo1").style.display = "block";		
		
		document.getElementById("buttons").style.display = "block";

		document.getElementById("chosen").style.display = "block";
		
		random1 = getRandomHindi();
		
		var res = shuffledHindiSentences[random1].split(" ");

		hin_sen = Hindi_Sentences[random1];
		
		s = "";
		
		for(var i = 0; i < res.length; i++) 
		{
			s += '<button class = "button" id = "' + i  + '" value = "' + res[i] + '" name = "' + res.length + '" onclick = "buttonselected(this.id)">' + res[i] + '</button>';

			for(var j = 0; j < 40; j++)
			{
				s += '&nbsp;';
			}
		}

		console.log(s);

		console.log(shuffledHindiSentences.length);

		console.log(random1);

		console.log(hin_sen);
		
		$('#buttons').html(s);
	}

	else
	{
		alert("Choose Language");

		document.getElementById("demo").style.display = "none";
		
		document.getElementById("demo1").style.display = "none";
		
		document.getElementById("buttons").style.display = "none";

		document.getElementById("chosen").style.display = "none";

		document.getElementById("demo3").style.display = "none";

		document.getElementById("re-form").style.display = "none";

		document.getElementById("check-correct").style.display = "none";

		document.getElementById("right").style.display = "none";

		document.getElementById("wrong").style.display = "none";

		document.getElementById("rightsentence").style.display = "none";

	}
};

function buttonselected(text)
{
	$('#' + text).hide();

	val = document.getElementById(text).name;

	word = document.getElementById(text).value;

	id_1 = document.getElementById(text).id;

	index_id.push(id_1);	

	console.log(index_id);

	chosenWords.push(word);

	if(chosenWords.length == val)
	{
		var final = chosenWords.join(' ');

		chosenSentence.push(final);	

		document.getElementById("check-correct").style.display = "block";	

		console.log(chosenSentence);
	}

	displaychosen(word, id_1);
};

function displaychosen(word, id)
{
	document.getElementById("demo3").style.display = "block";

	document.getElementById("re-form").style.display = "block";

	r += '<p id = "' + id + '" style = "display: inline" value = "' + chosenWords.length + '">' + word + "&nbsp;&nbsp;&nbsp;&nbsp;" + '</p>';

	console.log(r);

	$('#chosen').html(r);	
}

function getRandomNumber()
{
	var random = Math.floor(Math.random() * shuffledEnglishSentences.length);

	return random;
};

function getRandomHindi()
{
	var random = Math.floor(Math.random() * shuffledHindiSentences.length);

	return random;
}

Array.prototype.shuffled = function() 
{
    var i = this.length;
    
    if (i == 0)
    {
    	return this;
    }

    while (--i) 
    {
        var j = Math.floor(Math.random() * (i + 1));
        
        var a = this[i];
        
        var b = this[j];
        
        this[i] = b;
        
        this[j] = a;
    }

    return this;
};

function shuffleEnglishsentences()
{
	for(var i = 0; i < English_Sentences.length; i++)
	{
		var shuffle = English_Sentences[i].split(' ').shuffled().join(' ');

		shuffledEnglishSentences.push(shuffle);
	}

	return shuffledEnglishSentences;
};

function shuffleHindisentences()
{
	for(var i = 0; i < Hindi_Sentences.length; i++)
	{
		var shuffle = Hindi_Sentences[i].split(' ').shuffled().join(' ');

		shuffledHindiSentences.push(shuffle);
	}

	return shuffledHindiSentences;
};

function reformsentence()
{
	document.getElementById("re-form").style.display = "block";

	document.getElementById("demo3").style.display = "block";

	var x = chosenWords.length;

	for(var i = 0; i < x; i++)
	{
		$('#' + index_id[i]).show();

		console.log(index_id[i]);
	}

	r = "";

	$('#chosen').html(r);

	chosenWords = [];

	if(x == val)
	{
		chosenSentence = [];
	}

	index_id = [];

	document.getElementById("re-form").style.display = "none";

	document.getElementById("demo3").style.display = "none";

	document.getElementById("check-correct").style.display = "none";

	document.getElementById("right").style.display = "none";

	document.getElementById("wrong").style.display = "none";

	document.getElementById("gettingcorrectans").style.display = "none";

	document.getElementById("rightsentence").style.display = "none";

	$(".button1").text("Get Correct Sentence");
}

function checkcorrect()
{
	if(x == "English")
	{
		$('#rightsentence').html(sen);

		for(var i = 0; i < chosenSentence.length; i++)
		{
			if(random == 0)
			{
				if(chosenSentence[i] == sen || chosenSentence[i] == "is the apple red")
				{
					$('#right').show();
				}

				else
				{
					$('#wrong').show();

					$('#gettingcorrectans').show();
				}
			}

			else if(random == 1)
			{
				if(chosenSentence[i] == sen || chosenSentence[i] == "is the car broken")
				{
					$('#right').show();
				}

				else
				{
					$('#wrong').show();

					$('#gettingcorrectans').show();
				}
			}

			else
			{

				if(chosenSentence[i] == sen)
				{
					$('#right').show();
				}

				else
				{
					$('#wrong').show();

					$('#gettingcorrectans').show();
				}
			}
		}
	}

	else
	{
		$('#rightsentence').html(hin_sen);

		for(var i = 0; i < chosenSentence.length; i++)
		{
			console.log(chosenSentence[i]);

			if(random1 == 0)
			{
				if(chosenSentence[i] == hin_sen || chosenSentence[i] == "आपकी बहुत याद आयी मुझे" ||  chosenSentence[i] == "आपकी मुझे बहुत याद आयी")
				{
					$('#right').show();
				}

				else
				{
					$('#wrong').show();

					$('#gettingcorrectans').show();
				}
			}

			else if(random1 == 1)
			{
				if(chosenSentence[i] == hin_sen || chosenSentence[i] == "आप मेरी मदद कर सकते हैं क्या" || chosenSentence[i] == "मेरी मदद क्या आप कर सकते हैं"
					|| chosenSentence[i] == "मेरी मदद कर सकते हैं क्या आप")
				{
					$('#right').show();
				}

				else
				{
					$('#wrong').show();

					$('#gettingcorrectans').show();
				}
			}

			else
			{

				if(chosenSentence[i] == sen)
				{
					$('#right').show();
				}

				else
				{
					$('#wrong').show();

					$('#gettingcorrectans').show();
				}
			}
		}
	}

	chosenSentence = [];
}