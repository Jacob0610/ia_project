function myfunction()
	{
		var x = document.getElementById('Topnav');
		if(x.className === "top_nav")
		{
			x.className += " responsive";
		}
		else
		{
			x.className = "top_nav";
		}
	}

