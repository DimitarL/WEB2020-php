function validate() {
    let usernameIsValid = checkUsername();
    let passwordIsValid = checkPasswd();
    let confirmedPasswordComplies = checkSecondPasswd();

    return usernameIsValid && passwordIsValid && confirmedPasswordComplies;
}

function checkUsername() {
    let username = document.getElementById("Username").value;
    let usernameRegex = RegExp('^[0-9a-zA-Z_]+$');
    let usernameLength = username.length;

    if (usernameLength >= 3 && usernameLength <= 10 && usernameRegex.test(username))// || /^[a-zA-Z_]+$/.test(username))
    {
        //alert('Username is OK!');
        return true;
    } else {
        let invalidUsername = document.getElementById("invalidUsername");
        invalidUsername.innerHTML = "Invalid username";
        invalidUsername.style.color = "red";

        return false;
    }
}

function checkPasswd() {
    let password = document.getElementById("Password").value;
    let passwordCapitalRegex = RegExp('.*[A-Z]+.*');
    let passwordLowerRegex = RegExp('.*[a-z]+.*');
    let passwordDigitRegex = RegExp('.*\\d.*');
    let invalidPasswordElement = document.getElementById("invalidPassword");

    if (password.length >= 6 && passwordCapitalRegex.test(password) && passwordLowerRegex.test(password) && passwordDigitRegex.test(password)) {
        //alert("Password does not have at least 1 upper character, 1 lower character and 1 digit!");
        invalidPasswordElement.innerHTML = "";
        return true;
	} else {
        invalidPasswordElement.innerHTML = "Password is too short or does not have at least 1 upper character, 1 lower character and 1 digit!";
        invalidPasswordElement.style.color = "red";
        //alert('Your password is OK!');
        return false;
    }
}

function checkSecondPasswd() {
    let password = document.getElementById("Password").value;
    let confirmedPassword = document.getElementById("Confirm_Password").value;
	if (password.localeCompare(confirmedPassword) === 0 && password.length !== 0) {
        //alert('Your password is OK!');
        return true;
    } else {
        let invalidConfirmPassword = document.getElementById("invalidConfirmPassword");
        invalidConfirmPassword.innerHTML = "The two passwords should be the same!";
        invalidConfirmPassword.style.color = "red";
        //alert("Password does not have at least 1 upper character, 1 lower character and 1 digit!");
        return false;
    }
}
