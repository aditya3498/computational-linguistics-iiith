var x, y, select, pos, i, EnglishSentences = [], HindiSentences = [], HindiTags = [], CorrectHindiTags = [], Tags = [], EngTags = [], HindiSentences = [], x, y, row, flag = 0;

define(['require'], ['lexicon'], function(require)
{
	var POS = require('lexicon');
});

$.getJSON("expEng.json", function(data)
{
	for(i = 0; i < data["English"].length; i++)
	{
		EnglishSentences.push(data["English"][i]["Sentence"]);
	}

	for(i = 0; i < data["POSTAGS"].length; i++)
	{
		Tags.push(data["POSTAGS"][i]);
	}
});

$.getJSON("expHindi.json", function(data)
{
	for(i = 0; i < data["Hindi"].length; i++)
	{
		HindiSentences.push(data["Hindi"][i]["Sentence"]);	

		CorrectHindiTags.push(data["Hindi"][i]["postags"].split(" "))
	}

	for(i = 0; i < data["POSTAGS"].length; i++)
	{
		HindiTags.push(data["POSTAGS"][i]);
	}

	//console.log(HindiSentences)

	//console.log(HindiTags)
});

function addoptionsEnglish()
{
	for(i = 0; i < EnglishSentences.length; i++)
	{
		select.options[select.options.length] = new Option(EnglishSentences[i], i)
	}
}

function addoptionsHindi()
{
	for(i = 0; i < HindiSentences.length; i++)
	{
		select.options[select.options.length] = new Option(HindiSentences[i], i)
	}
}

function displayOptionsHindi()
{
	for(i = 0; i < HindiTags.length; i++)
	{
		pos.options[pos.options.length] = new Option(HindiTags[i]['tag'], HindiTags[i]['value'])
	}
}

function displayOptionsEnglish()
{
	for(i = 0; i < Tags.length; i++)
	{
		pos.options[pos.options.length] = new Option(Tags[i]['tag'], Tags[i]['value'])
	}
}

function filltableEnglish(value)
{
	pos = document.getElementById("postag");

	pos.options.length = 1;

	displayOptionsEnglish();

	var chosen = EnglishSentences[value];

	split = chosen.split(" ")

	//var dropdown = document.getElementById('postag');

	//$("#postag").show();

	for(var i = 0; i < split.length; i++)
	{
		//const z = i;
		$('#postag').show();
		
		$('#table').append('<tr id = "' + i + '"><td>' + split[i] + '</td>' + '<td id = "' + i + '">' + pos.outerHTML + '</td></tr>');
	}

	$("#table").show();

	$("#submit").show();
}

function filltableHindi(value)
{
	pos = document.getElementById("postag");

	pos.options.length = 1;

	displayOptionsHindi();

	var chosen = HindiSentences[value];

	split = chosen.split(" ")

	//var dropdown = document.getElementById('postag');

	//$("#postag").show();

	for(var i = 0; i < split.length - 1; i++)
	{
		//const z = i;
		$('#postag').show();
		
		$('#table').append('<tr id = "' + i + '"><td>' + split[i] + '</td>' + '<td id = "' + i + '">' + pos.outerHTML + '</td></tr>');
	}

	$("#table").show();

	$("#submit").show();
}

function selectLanguage()
{
	x = document.getElementById("selectedlanguage").value;

	pos = document.getElementById('EngorHinSen');

	select = document.getElementById("EngorHinSen");

	if(x === "English")
	{
		$(".button1").text("Get Answers");

		pos.options.length = 1;

		addoptionsEnglish();

		document.getElementById('possen').style.display = "none";

		document.getElementById('table').style.display = "none";

		document.getElementById('postag').style.display = "none";

		document.getElementById('submit').style.display = "none";

		document.getElementById('getanswers').style.display = "none";		

		$("#EngorHinSen").show();
	}

	else if(x === "Hindi")
	{
		$(".button1").text("Get Answers");

		pos.options.length = 1;

		addoptionsHindi();

		document.getElementById('possen').style.display = "none";

		document.getElementById('table').style.display = "none";

		document.getElementById('postag').style.display = "none";

		document.getElementById('submit').style.display = "none";

		document.getElementById('getanswers').style.display = "none";

		$("#EngorHinSen").show();
	}

	else
	{
		alert("Please choose a valid Language");

		document.getElementById('EngorHinSen').style.display = "none";

		document.getElementById('possen').style.display = "none";

		document.getElementById('table').style.display = "none";

		document.getElementById('postag').style.display = "none";

		document.getElementById('submit').style.display = "none";

		document.getElementById('getanswers').style.display = "none";
	}

	document.getElementById('postag').style.display = "none"
}

function selectsentence()
{
	value = document.getElementById("EngorHinSen").value;

	lang = document.getElementById("selectedlanguage").value;

	console.log(value + " " + lang);

	if(value !== "" && lang == "English")
	{
		//pos = document.getElementById("postag");

		$('#possen').show();

		$('#table tbody').find('tr').remove();

		$('#table tbody').find('td').remove();

		//$('#')

		filltableEnglish(value);
	}

	if(value !== "" && lang == "Hindi")
	{
		//pos = document.getElementById("postag");

		$('#possen').show();

		$('#table tbody').find('tr').remove();

		$('#table tbody').find('td').remove();

		//$('#')

		filltableHindi(value);
	}
}

function check()
{
	lang = document.getElementById("selectedlanguage").value;

	if(lang == "English")
	{
		for(i = 0; i < split.length; i++)
		{
			var row = document.getElementById(i);

			console.log(row.childElementCount)

			if(row.childElementCount == 4)
			{
				var x = row.deleteCell(2);

				row.childElementCount = 3;
			}

			else if(row.childElementCount == 3)
			{
			//row.childElementCount = 2;
				var x = row.deleteCell(2);

				row.childElementCount = 2;
			}

			else
			{
				break;
			}
		
		}

		var words = new Lexer().lex(EnglishSentences[value]);
		
		var taggedWords = new POSTagger().tag(words);
	
		var result = "";

		for (i in taggedWords) 
		{
  			var taggedWord = taggedWords[i];
  		
  			var word = taggedWord[0];

  			if(word == "baked")
  			{
  				EngTags.push("Verb")
  			}

  			else if(word == "his")
  			{
  				EngTags.push("Determiner")
  			}

  			else
  			{
  				var tag = taggedWord[1];
  	
  				result = (tag + " ");
		
	  			result = result.split(" ")
	
	  			if(result[0] == "CC")
	  			{
					EngTags.push("Conjunction")
				}
	
				else if(result[0] == "DT" || result[0] == "WDT" || result[0] == "PDT")
				{
					EngTags.push("Determiner")
	
				}	
	
	  			else if(result[0] == "IN")
	  			{
	  				EngTags.push("Preposition")
	  			}
			
				else if(result[0] == "JJ" || result[0] == "JJR" || result[0] == "JJS")
				{
			  		EngTags.push("Adjective")
				}
			
				else if(result[0] == "NN" || result[0] == "NNP" || result[0] == "NNPS" || result[0] == "NNS")
				{
					EngTags.push("Noun")
				}
					
				else if(result[0] == "RB" || result[0] == "RBR" || result[0] == "RBS" || result[0] == "NNS" || result[0] == "WRB")
				{
		  			EngTags.push("Adverb")
				}
		
		  		else if(result[0] == "VB" || result[0] == "VBD" || result[0] == "VBG" || result[0] == "VBN" || result[0] == "VBP" || result[0] == "VBZ")
		  		{
		  			EngTags.push("Verb")
				}
			
	  			else if(result[0] == "UH")
	  			{
	  				EngTags.push("Interjection")
  				}
	
	  			else if(result[0] == "PP$" || result[0] == "PRP" || result[0] == "WP" || result[0] == "WP$")
	  			{
	  				EngTags.push("Pronoun")
  				}
  			}
  		}
		
		for(i = 0; i < split.length; i++)
		{
			var row = document.getElementById(i);

			var x = row.insertCell(2);

			if(row.childNodes[1].children.postag.value == EngTags[i])
			{
				x.innerHTML += '&#9989;'
			}

			else
			{
				x.innerHTML += '&#10060;'
			}
		}

		$('#getanswers').show();
	}

	else
	{
		//value = value.split(" ");

		for(i = 0; i < split.length - 1; i++)
		{
			var row = document.getElementById(i);

			console.log(row.childElementCount)

			if(row.childElementCount == 4)
			{
				var x = row.deleteCell(2);

				row.childElementCount = 3;
			}

			else if(row.childElementCount == 3)
			{
			//row.childElementCount = 2;
				var x = row.deleteCell(2);

				row.childElementCount = 2;
			}

			else
			{
				break;
			}
		
		}

		for(i = 0; i < split.length - 1; i++)
		{
			var row = document.getElementById(i);

			//console.log(row)

			var x = row.insertCell(2);

			//console.log(row.childNodes[1].children.postag.value + " " + CorrectHindiTags[value][i])

			if(row.childNodes[1].children.postag.value == CorrectHindiTags[value][i])
			{
				x.innerHTML += '&#9989;'
			}

			else
			{
				x.innerHTML += '&#10060;'
			}
		}

		$('#getanswers').show();
	}
}	