var Sentences = ['the apple is red', 'the car is broken', 'the cat eats the rat', 'the bank of the river', 'the bank of India', 'park the car', 'book the ticket', 'pack of cards'];

var chosenWords = [], shuffledSentences = [], chosenSentence = [], index = 0, sen = [], r = "";

function selectEngorHin()
{
	var x = document.getElementById("selectedEngorHin").value;

	shufflesentences();

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

		var sen = Sentences[random];

		//console.log(res);

		//console.log(sen);
		
		s = "";
		
		for(var i = 0; i < res.length; i++) 
		{
			s += '<div class = "col-sm-2"><button id = "' + i + '" value = "' + res[i] + '" name = "' + res.length + '" onclick = "buttonselected(this.id)">' + res[i] + '</button></div>';
		}

		s += '<br></br><br></br><br>';

		console.log(s);
		
		$('#buttons').html(s);

		document.getElementById("demo2").style.display = "block";

	}

	else if(x == "Hindi")
	{
		document.getElementById("demo").style.display = "block";
		
		document.getElementById("demo1").style.display = "block";
		
		document.getElementById("buttons").style.display = "none";

		document.getElementById("chosen").style.display = "none";

		document.getElementById("demo2").style.display = "none";
	}

	else
	{
		document.getElementById("demo").style.display = "none";
		
		document.getElementById("demo1").style.display = "none";
		
		document.getElementById("buttons").style.display = "none";

		document.getElementById("chosen").style.display = "none";

		document.getElementById("demo2").style.display = "none";
	}
};

function buttonselected(text)
{
	$('#' + text).hide();

	var val = document.getElementById(text).name;

	var word = document.getElementById(text).value;

	var id = document.getElementById(text).id;

	chosenWords.push(word);

	if(chosenWords.length == val)
	{
		var final = chosenWords.join(' ');

		chosenSentence.push(final);
	}

	displaychosen(word, id);

};

function displaychosen(word, id)
{
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