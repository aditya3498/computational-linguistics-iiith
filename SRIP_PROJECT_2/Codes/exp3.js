var x, corpus = [], corpus_1, corpus_2, corpus_3, tokens, types, res = [], c, words = {};

$.getJSON("exp3.json", function(data)
{
	for(var i = 0; i < data['Corpus'].length; i++)
	{
		corpus.push(data['Corpus'][i]['Corpus'].join(" "));

		//corpus.push("\n\n");
	}

	//console.log(corpus[1])
});

function selectCorpus()
{
	c = 0, res = [], words = {};

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

		//console.log(corpus_1)

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

		//console.log(pol)

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

	//console.log(c)

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