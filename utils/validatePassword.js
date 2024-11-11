
function validatePassword(password){
    const passwordValid = "/^(?=.*\d)(?=.*[A-Z])[A-Za-z\d]{8,}$/";
    if(!password.match(passwordValid))
        if(!password.match(passwordValid)){
            return('Пароль должен содержать минимум 8 символов, включая 1 заглавную букву и 1 цифру.');
        }
    return null;
}

module.exports = validatePassword;

// ; function validatePassword2() {
// ;     const passwordField = document.querySelector('.password'); 
// ;     const password = passwordField.value; 
// ;     const passwordPattern = /^(?=.*\d)(?=.*[A-Z])[A-Za-z\d]{8,}$/;

// ;     const errorLog = document.getElementById("errorMessage"); 

// ;     if (!passwordPattern.test(password)) {
// ;         errorLog.innerHTML = "Пароль должен содержать минимум 8 символов, включая 1 заглавную букву и 1 цифру.";
// ;         return false; 
// ;     }

// ;     errorLog.innerHTML = ""; 
// ;     alert('Данные отправлены'); 
// ;     return true; 
// ; }

// ; function validatePassword() {
// ;     const passwordField = document.getElementsByClassName('password')[0]; 
// ;     const password = passwordField.value; 
// ;     const passwordPattern = /^(?=.*\d)(?=.*[A-Z])[A-Za-z\d]{8,}$/;
    
// ;     const passwordRep = document.getElementById('pass2');
// ;     const passwordRepeat = passwordRep.value;

// ;     const error = document.getElementById("error-message"); 

// ;     if (!passwordPattern.test(password)) {
// ;         error.innerHTML = "Пароль должен содержать минимум 8 символов, включая 1 заглавную букву и 1 цифру.";
// ;         return false; 
// ;     }

// ;     if (password !== passwordRepeat) {
// ;         error.innerHTML = "Пароли не совпадают"; 
// ;         return false; 
// ;     }

// ;     error.innerHTML = ""; 
// ;     alert('Данные отправлены'); 
// ;     return true; 
// ; }
