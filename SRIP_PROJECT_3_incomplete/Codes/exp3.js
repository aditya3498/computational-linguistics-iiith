var x, corpus = [], stemmer, corpus_1, corpus_2, corpus_3, tokens, types, res = [], c, words = {};

define(['require', 'snowball'], function(require)
{
	var Snow = require('snowball')

	stemmer = new Snowball('English');
	/*stemmer.setCurrent('abbreviations');
	stemmer.stem();
	console.log(stemmer.getCurrent());*/
})

$.getJSON("exp3.json", function(data)
{
	for(var i = 0; i < data['Corpus'].length; i++)
	{
		corpus.push(data['Corpus'][i]['Corpus'].join(" "));
	}
});

function selectCorpus()
{
	c = 0, d = 0, res = [], words = {}, root_word = [], root_similar = {};

	x = document.getElementById("selectedcorpus").value;

	if(x == "Corpus 1")
	{
		$('#table_new').hide();

		$('#buttons_new').hide();

		$('#new').hide();

		document.getElementById('tokens').style.background = "white"

		document.getElementById('types').style.background = "white"

		var mytable = document.getElementById('table');

		var inputs = mytable.getElementsByTagName('input')

		for(var i = 0; i < inputs.length; i++)
		{
			inputs[i].value = " ";
		}

		console.log(corpus[0])

		corpus_1 = corpus[0];

		$('#displaycorpus').html(corpus_1);

		$('#displaycorpus').show();

		res = corpus_1.replace(/[^a-zA-Z ]/g, "").toLowerCase().split(" ");

		console.log(res)

		for(var i = 0; i < res.length; i++)
		{
			stemmer.setCurrent(res[i]);
			
			stemmer.stem()
			
			root_word.push(stemmer.getCurrent())
		}

		console.log(root_word)

		for(var i = 0; i < root_word.length; i++)
		{
			if(root_similar[root_word[i]])
			{
				//console.log(root_similar)
				root_similar[root_word[i]]++;
			}

			else
			{
				console.log(root_similar)
				d++;

				root_similar[root_word[i]] = 1;
			}
		}

		for(var i = 0; i < res.length; i++)
		{
			if(words[res[i]])
			{
				console.log(words)
				words[res[i]]++;
			}

			else
			{
				c++;

				words[res[i]] = 1;
			}
		}

		console.log(c)

		console.log(d)

		$('#demo1').show();

		$('#table').show();

		$('#buttons').show();
	}

	else if(x == "Corpus 2")
	{
		$('#table_new').hide();

		$('#buttons_new').hide();

		$('#new').hide();

		document.getElementById('tokens').style.background = "white"

		document.getElementById('types').style.background = "white"

		c = 0, res = [], words = {};

		var mytable = document.getElementById('table');

		var inputs = mytable.getElementsByTagName('input')

		for(var i = 0; i < inputs.length; i++)
		{
			inputs[i].value = " ";
		}

		document.getElementById("displaycorpus").style.display = "none"

		document.getElementById("demo1").style.display = "none";

		document.getElementById("buttons").style.display = "none";

		document.getElementById("table").style.display = "none";

		corpus_1 = corpus[1];

		$('#displaycorpus').html(corpus_1);

		$('#displaycorpus').show();

		res = corpus_1.replace(/[^a-zA-Z ]/g, "").toLowerCase().split(" ");

		console.log(res)

		for(var i = 0; i < res.length; i++)
		{
			if(words[res[i]])
			{
				words[res[i]]++;
			}

			else
			{
				c++;

				words[res[i]] = 1;
			}
		}

		console.log(c)

		$('#demo1').show();

		$('#table').show();

		$('#buttons').show();
	}

	else
	{
		$('#table_new').hide();

		$('#buttons_new').hide();

		$('#new').hide();

		document.getElementById('tokens').style.background = "white"

		document.getElementById('types').style.background = "white"

		c = 0, res = [], words = {};
		
		var mytable = document.getElementById('table');

		var inputs = mytable.getElementsByTagName('input')

		for(var i = 0; i < inputs.length; i++)
		{
			inputs[i].value = " ";
		}

		document.getElementById("table").style.display = "none";

		document.getElementById("displaycorpus").style.display = "none"

		document.getElementById("demo1").style.display = "none";

		document.getElementById("buttons").style.display = "none";

		corpus_1 = corpus[2];

		$('#displaycorpus').html(corpus_1);

		$('#displaycorpus').show();

		res = corpus_1.replace(/[^a-zA-Z ]/g, "").toLowerCase().split(" ");

		console.log(res)

		for(var i = 0; i < res.length; i++)
		{
			if(words[res[i]])
			{
				words[res[i]]++;
			}

			else
			{
				c++;

				words[res[i]] = 1;
			}
		}

		console.log(c)

		$('#demo1').show();

		$('#table').show();

		$('#buttons').show();
	}
}

function check()
{
	var mytable = document.getElementById('table');

	var inputs = mytable.getElementsByTagName('input')

	if(inputs[0].value != " " && inputs[1].value != " ")
	{
		if(inputs[0].name == "Tokens" && inputs[0].value == res.length && inputs[1].name == "Types" && inputs[1].value == c)
		{
			document.getElementById('tokens').style.background = "green";

			document.getElementById('types').style.background = "green";

			$('#right').show();

			$('#wrong').hide();

			$('#continue').show();
		}

		if(inputs[0].name == "Tokens" && inputs[0].value != res.length && inputs[1].name == "Types" && inputs[1].value == c)
		{
			document.getElementById('tokens').style.background = "red";

			document.getElementById('types').style.background = "green";

			$('#wrong').show();

			$('#right').hide();
		}

		if(inputs[0].name == "Tokens" && inputs[0].value == res.length && inputs[1].name == "Types" && inputs[1].value != c)
		{
			document.getElementById('tokens').style.background = "green";

			document.getElementById('types').style.background = "red";

			$('#wrong').show();

			$('#right').hide();
		}

		if(inputs[0].name == "Tokens" && inputs[0].value != res.length && inputs[1].name == "Types" && inputs[1].value != c)
		{
			document.getElementById('tokens').style.background = "red";

			document.getElementById('types').style.background = "red";

			$('#wrong').show();

			$('#right').hide();
		}
	}

	else
	{
		alert("Please Enter Both Values");
	}
}

function display()
{
	$('#buttons').hide();

	$('#right').hide();

	$('#continue').hide();

	$('#new').show();

	$('#table_new').show();

	$('#buttons_new').show();
}