function ajax(url, settings)
{
	var xhr = new XMLHttpRequest();
	xhr.onload = function()
	{
		if (xhr.status == 200) 
		{
			settings.success(xhr.responseText);
		} 
		else 
		{
			console.error(xhr.responseText);
		}
	}
	xhr.open('POST', url);
	xhr.send(settings.data);
}

var callback = function(text) 
{
  console.log(text);
}

function validate()
{
	var url = 'register.php';	
	
	let username = document.getElementById("Username").value;
	let passwd = document.getElementById("Password").value;
	let confirmPassword = document.getElementById("Confirm_Password").value;

	let collection = { username, passwd, confirmPassword };

	let jsonData = JSON.stringify(collection);
	
	ajax(url, { data: jsonData, success: callback });	
}
