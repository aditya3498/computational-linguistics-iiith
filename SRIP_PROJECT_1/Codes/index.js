var i, j, s = "", x, res, chosenWords = [], indexSentences = [], indexSentencesHindi = [], HindiSentences = [], shuffledEnglishSentences = [], shuffledHindiSentences = [], count = 0, countHindi = 0, EnglishSentences = [], index, indexHindi, flag = 0, flagHindi = 0, chosenSentence = [], indexId = [], sen = [], hinSen = [], r = "", id1, word, val, randomHindi, truth = true, random;

$.getJSON("index.json", function(data)
{
	for(i = 0; i < data["English"].length; i++)
	{
		if(Array.isArray(data["English"][i]["Sentence"]))
		{
			indexSentences.push(data["English"][i]["Sentence"]);
			
			EnglishSentences.push(data["English"][i]["Sentence"][0]);
		}

		else
		{
			EnglishSentences.push(data["English"][i]["Sentence"]);
		}
	}
});

$.getJSON("index_hindi.json", function(data)
{
	for(i = 0; i < data["Hindi"].length; i++)
	{
		if(Array.isArray(data["Hindi"][i]["Sentence"]))
		{
			indexSentencesHindi.push(data["Hindi"][i]["Sentence"]);
			
			HindiSentences.push(data["Hindi"][i]["Sentence"][0]);
		}

		else
		{
			HindiSentences.push(data["Hindi"][i]["Sentence"]);
		}
	}
});

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
		$(".button1").text("Get Correct Sentence");

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
		
		res = shuffledEnglishSentences[random].split(" ");

		sen = EnglishSentences[random];

		for(i = 0; i < indexSentences.length; i++)
		{
			if(sen === indexSentences[i][0])
			{
				index = i;
			}
		}
		
		s = "";
		
		for(i = 0; i < res.length; i++) 
		{
			s += '<button class = "button" id = "' + i  + '" value = "' + res[i] + '" name = "' + res.length + '" onclick = "buttonselected(this.id)">' + res[i] + '</button>';

			for(j = 0; j < 40; j++)
			{
				s += '&nbsp;';
			}
		}

		$('#buttons').html(s);
	}

	else if(x == "Hindi")
	{
		$(".button1").text("Get Correct Sentence");

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
		
		randomHindi = getRandomHindi();
		
		res = shuffledHindiSentences[randomHindi].split(" ");

		hinSen = HindiSentences[randomHindi];

		for(i = 0; i < indexSentencesHindi.length; i++)
		{
			if(hinSen === indexSentencesHindi[i][0])
			{
				indexHindi = i;
			}
		}

		s = "";
		
		for(i = 0; i < res.length; i++) 
		{
			s += '<button class = "button" id = "' + i  + '" value = "' + res[i] + '" name = "' + res.length + '" onclick = "buttonselected(this.id)">' + res[i] + '</button>';

			for(j = 0; j < 40; j++)
			{
				s += '&nbsp;';
			}
		}

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

	id1 = document.getElementById(text).id;

	indexId.push(id1);	

	chosenWords.push(word);

	if(chosenWords.length == val)
	{
		var final = chosenWords.join(' ');

		chosenSentence.push(final);	

		document.getElementById("check-correct").style.display = "block";	
	}

	displaychosen(word, id1);
};

function displaychosen(word, id)
{
	document.getElementById("demo3").style.display = "block";

	document.getElementById("re-form").style.display = "block";

	r += '<p id = "' + id + '" style = "display: inline" value = "' + chosenWords.length + '">' + word + "&nbsp;&nbsp;&nbsp;&nbsp;" + '</p>';

	$('#chosen').html(r);	
}

Array.prototype.shuffled = function() 
{
    var tr = this.length;
    
    if (tr === 0)
    {
    	return this;
    }

    while (--tr) 
    {
        var j = Math.floor(Math.random() * (tr + 1));
        
        var a = this[tr];
        
        var b = this[tr];
        
        this[tr] = b;
        
        this[tr] = a;
    }

    return this;
};

function shuffleEnglishsentences()
{
	for(i = 0; i < EnglishSentences.length; i++)
	{
		var shuffle = EnglishSentences[i].split(' ').shuffled().join(' ');

		shuffledEnglishSentences.push(shuffle);
	}

	return shuffledEnglishSentences;
};

function shuffleHindisentences()
{
	for(i = 0; i < HindiSentences.length; i++)
	{
		var shuffle = HindiSentences[i].split(' ').shuffled().join(' ');

		shuffledHindiSentences.push(shuffle);
	}

	return shuffledHindiSentences;
};

function reformsentence()
{
	document.getElementById("re-form").style.display = "block";

	document.getElementById("demo3").style.display = "block";

	var x = chosenWords.length;

	for(i = 0; i < x; i++)
	{
		$('#' + indexId[i]).show();
	}

	r = "";

	$('#chosen').html(r);

	chosenWords = [];

	if(x == val)
	{
		chosenSentence = [];
	}

	indexId = [];

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
		flag = 0;

		if(index == random)
		{
			if(chosenSentence.length === 0 && count === 1)
			{
				$('#right').show();

				flag = 1;
			}

			for(i = 0; i < indexSentences[index].length; i++)
			{
				if(chosenSentence[0] == indexSentences[index][i])
				{
					$('#right').show();

					flag = 1;

					count = 1;

					break;
				}
			}

			if(flag === 0)
			{
				count = 0;

				$('#wrong').show();

				$('#gettingcorrectans').show();
			}	

		}

		else
		{
			for(i = 0; i < chosenSentence.length; i++)
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
		flagHindi = 0;

		if(indexHindi == randomHindi)
		{
			if(chosenSentence.length === 0 && countHindi === 1)
			{
				$('#right').show();

				flagHindi = 1;
			}

			else
			{

				for(i = 0; i < indexSentencesHindi[indexHindi].length; i++)
				{
					if(chosenSentence[0] == indexSentencesHindi[indexHindi][i])
					{
						$('#right').show();

						flagHindi = 1;

						countHindi = 1;

						break;
					}
				}

				if(flagHindi === 0)
				{
					$('#wrong').show();

					$('#gettingcorrectans').show();
				}
			}
		}

		else
		{
			for(i = 0; i < chosenSentence.length; i++)
			{
				if(chosenSentence[i] == hinSen)
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