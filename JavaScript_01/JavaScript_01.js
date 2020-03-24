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
	let passwd = document.getElementById("Password").value;
	let confirmedPassword = document.getElementById("Confirm_Password").value;
	let passwordLength = passwd.length; 
	
	if(passwd.localeCompare(confirmedPassword) === 0 && passwordLength !== 0)
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