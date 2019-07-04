var x, chosenWords = [], index_sentences = [], index_sentences_hindi = [], Hindi_Sentences = [], shuffledEnglishSentences = [], shuffledHindiSentences = [], English_Sentences = [], index, index_hindi, flag = 0, flag_hindi = 0, chosenSentence = [], index_id = [], sen = [], hin_sen = [], r = "", id_1, word, val, random_hindi, truth = true, random;

$.getJSON("index.json", function(data)
{
	for(var i = 0; i < data['English'].length; i++)
	{
		if(Array.isArray(data['English'][i]['Sentence']))
		{
			index_sentences.push(data['English'][i]['Sentence']);
			
			English_Sentences.push(data['English'][i]['Sentence'][0]);
		}

		else
		{
			English_Sentences.push(data['English'][i]['Sentence']);
		}
	}
});

$.getJSON("index_hindi.json", function(data)
{
	for(var i = 0; i < data['Hindi'].length; i++)
	{
		if(Array.isArray(data['Hindi'][i]['Sentence']))
		{
			index_sentences_hindi.push(data['Hindi'][i]['Sentence']);
			
			Hindi_Sentences.push(data['Hindi'][i]['Sentence'][0]);

			//	console.log(index_sentences_hindi)
		}

		else
		{
			Hindi_Sentences.push(data['Hindi'][i]['Sentence']);
		}
	}
});

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
		
		var res = shuffledEnglishSentences[random].split(" ");

		sen = English_Sentences[random];

		for(var i = 0; i < index_sentences.length; i++)
		{
			if(sen == index_sentences[i][0])
			{
				index = i;
			}
		}
		
		s = "";
		
		for(var i = 0; i < res.length; i++) 
		{
			s += '<button class = "button" id = "' + i  + '" value = "' + res[i] + '" name = "' + res.length + '" onclick = "buttonselected(this.id)">' + res[i] + '</button>';

			for(var j = 0; j < 40; j++)
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
		
		random_hindi = getRandomHindi();
		
		var res = shuffledHindiSentences[random_hindi].split(" ");

		hin_sen = Hindi_Sentences[random_hindi];

		for(var i = 0; i < index_sentences_hindi.length; i++)
		{
			if(hin_sen == index_sentences_hindi[i][0])
			{
				index_hindi = i;

				console.log(index_hindi)
			}
		}
		
		s = "";
		
		for(var i = 0; i < res.length; i++) 
		{
			s += '<button class = "button" id = "' + i  + '" value = "' + res[i] + '" name = "' + res.length + '" onclick = "buttonselected(this.id)">' + res[i] + '</button>';

			for(var j = 0; j < 40; j++)
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

	id_1 = document.getElementById(text).id;

	index_id.push(id_1);	

	chosenWords.push(word);

	if(chosenWords.length == val)
	{
		var final = chosenWords.join(' ');

		chosenSentence.push(final);	

		document.getElementById("check-correct").style.display = "block";	
	}

	displaychosen(word, id_1);
};

function displaychosen(word, id)
{
	document.getElementById("demo3").style.display = "block";

	document.getElementById("re-form").style.display = "block";

	r += '<p id = "' + id + '" style = "display: inline" value = "' + chosenWords.length + '">' + word + "&nbsp;&nbsp;&nbsp;&nbsp;" + '</p>';

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
		flag = 0;

		if(index == random)
		{
			for(var i = 0; i < index_sentences.length; i++)
			{
				if(chosenSentence[0] == index_sentences[index][i])
				{
					$('#right').show();

					flag = 1;
				}
			}

			if(flag == 0)
			{
				$('#wrong').show();

				$('#gettingcorrectans').show();
			}	

		}

		else
		{
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
		}
	}

	else
	{
		flag_hindi = 0;

		if(index_hindi == random_hindi)
		{
			var condition1 = function () 
			{
				for(var i = 0; i < index_sentences_hindi.length; i++)
				{
					if(chosenSentence[0] == index_sentences_hindi[index_hindi][i])
					{	
						$('#right').show();

						flag_hindi = 1;
	
						console.log(flag_hindi);

						break;
					}
				}

				return flag_hindi;
			}

			var condition2 = function ()
			{
				if(flag_hindi === 0)
				{	
					$('#wrong').show();

					$('#gettingcorrectans').show();
				}
			}
			
			$.when(test).then(test1);

		}

		else
		{
			for(var i = 0; i < chosenSentence.length; i++)
			{
				if(chosenSentence[i] == hin_sen)
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