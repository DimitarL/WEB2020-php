function validate()
{
	let usernameIsValid = checkUsername();
    let passwordIsValid = checkPasswd();
    let confirmedPasswordComplies = checkSecondPasswd();

    return usernameIsValid && passwordIsValid && confirmedPasswordComplies;
}
function checkUsername()
{
	let username = document.getElementById("Username").value;
	let usernameRegex  = RegExp(/^\w{3,10}$/);
	let usernameLength  = username.length;
	
	if(usernameLength  >= 3 && usernameLength  <= 10 && usernameRegex.test(username))
	{
		invalidUsername.innerHTML = "";
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
    let passwd = document.getElementById("Password").value;
    let passwordLowerRegex = /[a-z]+/;
    let passwordCapitalRegex = /[A-Z]+/;
    let passwordDigitRegex = /[0-9]+/;
    let invalidPasswordElement = document.getElementById("invalidPassword");    

    if (passwordLowerRegex.test(passwd) && passwordCapitalRegex.test(passwd) && passwordDigitRegex.test(passwd) && passwordLength >= 6 )
	{
		invalidPassword.innerHTML = "";
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
	let passwd = document.getElementById("Password").value;
	let confirmedPassword = document.getElementById("Confirm_Password").value;
	let passwordLength = passwd.length; 
	
	if(passwd.localeCompare(confirmedPassword) === 0 && passwordLength !== 0)
	{
		invalidConfirmPassword.innerHTML = "";
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