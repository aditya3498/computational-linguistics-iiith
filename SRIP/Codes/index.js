var Sentences = ['the apple is red', 'the car is broken', 'the cat eats the rat', 'the bank of the river', 'the bank of India', 'park the car', 'book the ticket', 'pack of cards'];

var chosenWords = [], shuffledSentences = [], chosenSentence = [], index_id = [], sen = [], r = "", id1, word, val, truth = true, value = true;

function selectEngorHin()
{
	var x = document.getElementById("selectedEngorHin").value;

	if(truth == true)
	{
		shufflesentences();

		truth = false;
	}

	if(x == "English")
	{
		r = "";

		$('#chosen').html(r);

		chosenWords = [], chosenSentence = [];
		
		document.getElementById("demo").style.display = "block";
		
		document.getElementById("demo1").style.display = "block";		
		
		document.getElementById("buttons").style.display = "block";

		document.getElementById("chosen").style.display = "block";
		
		var random = getRandomNumber();
		
		var res = shuffledSentences[random].split(" ");

		sen = Sentences[random];
		
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

		console.log(shuffledSentences.length);

		console.log(random);

		console.log(sen);
		
		$('#buttons').html(s);
	}

	else if(x == "Hindi")
	{
		document.getElementById("demo").style.display = "block";
		
		document.getElementById("demo1").style.display = "block";
		
		document.getElementById("buttons").style.display = "none";

		document.getElementById("chosen").style.display = "none";

		document.getElementById("demo3").style.display = "none";

		document.getElementById("re-form").style.display = "none";

		document.getElementById("check-correct").style.display = "none";

		document.getElementById("right").style.display = "none";

		document.getElementById("wrong").style.display = "none";

		document.getElementById("rightsentence").style.display = "none";

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

	id1 = document.getElementById(text).id;

	index_id.push(id1);	

	console.log(index_id);

	chosenWords.push(word);

	if(chosenWords.length == val)
	{
		var final = chosenWords.join(' ');

		chosenSentence.push(final);	

		document.getElementById("check-correct").style.display = "block";	

		console.log(chosenSentence);
	}

	displaychosen(word, id1);
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
	var random = Math.floor(Math.random() * shuffledSentences.length);

	return random;
};

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

function shufflesentences()
{
	for(var i = 0; i < Sentences.length; i++)
	{
		var shuffle = Sentences[i].split(' ').shuffled().join(' ');

		shuffledSentences.push(shuffle);
	}

	return shuffledSentences;
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
	$('#rightsentence').html(sen);

	for(var i = 0; i < chosenSentence.length; i++)
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

	chosenSentence = [];
}