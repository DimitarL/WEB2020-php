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
	};
	xhr.open('POST', url);
	xhr.send(settings.data);
}

var callback = function(text) 
{
  console.log(text);
};

function validate()
{
	var url = 'register.php';	
	
	var username = document.getElementById("username").value;
	var passwd = document.getElementById("Password").value;
	var confirmPassword = document.getElementById("Confirm_Password").value;

	let collection = { username, passwd, confirmPassword };

	var jsonData = JSON.stringify(collection);
	
	ajax(url, { data: jsonData, success: callback });	
	
	let usernameIsValid = checkUsername();
    let passwordIsValid = checkPasswd();
    let confirmedPasswordComplies = checkSecondPasswd();

    return usernameIsValid && passwordIsValid && confirmedPasswordComplies;
}
function checkUsername()
{
	let usernameRegex  = RegExp(/^\w{3,10}$/);
	let usernameLength  = username.length;
	
	if(usernameLength  >= 3 && usernameLength  <= 10 && usernameRegex.test(username))
	{
		return true;
	}
	else 
	{
		let invalidUsername = document.getElementById("invalidUsername");
		invalidUsername.innerHTML = "Invalid username";
		invalidUsername.style.color = "red";
		
		return false;
	}
}
function checkPasswd()
{	
	let passwordLength = passwd.length;
	
	let passwordLowerRegex = RegExp('.*[a-z]+.*');
	let passwordCapitalRegex = RegExp('.*[A-Z]+.*');
    let passwordDigitRegex = RegExp('.*\\d.*');
	 
	let invalidPasswordElement = document.getElementById("invalidPassword");

    if (passwordLowerRegex.test(password) && passwordCapitalRegex.test(password) && passwordDigitRegex.test(password) && passwordLength >= 6 ) {
	{
		invalidPasswordElement.innerHTML = "";
		return true;
	}
	else
	{ 
		let invalidPassword = document.getElementById("invalidPassword");
		invalidPassword.innerHTML = "Password is too short or does not have at least 1 upper character, 1 lower character and 1 digit!";
		invalidPassword.style.color = "red";
		
		return false;
	}
}
function checkSecondPasswd()
{
	let passwordLength = passwd.length; 
	
	if(passwd.localeCompare(confirmPassword) === 0 && passwordLength !== 0)
	{
		return true;
	}
	else
	{ 
		let invalidPassword = document.getElementById("invalidConfirmPassword");
		invalidConfirmPassword.innerHTML = "The two passwords should be the same!";
		invalidConfirmPassword.style.color = "red";

		return false;
	}
}