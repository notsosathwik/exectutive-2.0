	//Validtion Code For Inputs

	var username = document.forms['form']['username'];
	var password = document.forms['form']['password'];
	
	var email_error = document.getElementById('username_error');
	var password_error = document.getElementById('password_error');
	
	username.addEventListener('textInput', username_Verify);
	password.addEventListener('textInput', password_Verify);
	
	function validated(){
		if (username.value=='test@1') {
			username.style.border = "3px solid red";
			username_error.style.display = "block";
			username.focus();
			return false;
		}
		if (password.value.length < 6) {
			password.style.border = "3px solid red";
			password_error.style.display = "block";
			password.focus();
			return false;
		}
	
	}
	function username_Verify(){
		if (username.value.length >= 8) {
			username.style.border = "3px solid green";
			username_error.style.display = "none";
			return true;
		}
	}
	function password_Verify(){
		if (password.value.length >= 5) {
			password.style.border = "3px solid green";
			password_error.style.display = "none";
			return true;
		}
	}