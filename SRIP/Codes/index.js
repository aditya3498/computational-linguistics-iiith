var Sentences = ['the apple is red', 'the car is broken', 'the cat eats the rat', 'the bank of the river', 'the bank of India', 'park the car', 'book the ticket', 'pack of cards'];

var chosenSentences = [], shuffledSentences = [], chosenSentence = [], len = 0;

function selectEngorHin()
{
	var x = document.getElementById("selectedEngorHin").value;

	shufflesentences();

	if(x == "English")
	{
		chosenSentences = [];
		
		document.getElementById("demo").style.display = "block";
		
		document.getElementById("demo1").style.display = "block";		
		
		document.getElementById("buttons").style.display = "block";
		
		var random = getRandomNumber();
		
		var res = shuffledSentences[random].split(" ");
		
		s = "";
		
		for(var i = 0; i < res.length; i++) 
		{
			s += '<button id = "' + i + '" value = "' + res[i] + '" name = " ' + res.length + '" onclick = "buttonselected(this.id)">' + res[i] + '</button><br></br><br></br>';
		}
		
		$('#buttons').html(s);
	}

	else if(x == "Hindi")
	{
		document.getElementById("demo").style.display = "block";
		
		document.getElementById("demo1").style.display = "block";
		
		document.getElementById("buttons").style.display = "none";
	}

	else
	{
		document.getElementById("demo").style.display = "none";
		
		document.getElementById("demo1").style.display = "none";
		
		document.getElementById("buttons").style.display = "none";
	}
};

function buttonselected(text)
{
	$('#' + text).hide();

	var val = document.getElementById(text).name;

	var word = document.getElementById(text).value;

	chosenSentences.push(word);

	if(chosenSentences.length == val)
	{
		var final = chosenSentences.join(' ');

		chosenSentence.push(final);
	}

};

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