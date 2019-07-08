var x;

function displaycorpussize()
{
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
	}
}