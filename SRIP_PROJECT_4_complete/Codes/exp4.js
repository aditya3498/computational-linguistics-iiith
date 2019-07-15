var x, y;

function displaycorpussize()
{
	y = document.getElementById("selectedcorpus").value;

	$("#selectedcorpus").show();

	$("#generate").show();
}

function selectLanguage()
{
	x = document.getElementById("selectedlanguage").value;

	if(x === "English")
	{
		displaycorpussize();
	}

	else
	{
		alert("Please Select a Language");

		$("#selectedcorpus").hide();

		$("#generate").hide();

		$("#img").hide();
	}
}

function generate()
{
	document.getElementById("img").innerHTML += " ";

	if(y === "")
	{
		alert("Select the Number of Tokens")
	}

	else
	{
		if(y === "100000")
		{
			document.getElementById("img").innerHTML = "<img src = 'images/100000.jpg'/>";
		}

		else if(y === "500000")
		{
			document.getElementById("img").innerHTML = "<img src = 'images/500000.jpg'/>";
		}

		else if(y === "1000000")
		{
			document.getElementById("img").innerHTML = "<img src = 'images/1000000.jpg'/>";
		}
	}
}