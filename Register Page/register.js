const test = document.getElementById('btn-submit-registration');

function validateInputs() {
    const isValidFirstName = validateFirstName();
    const isValidLastName = validateLastName();
    const isValidGender = validateGender();
    const isValidAddress = validateAddress();
    const isValidEmail = validateEmailComposition();

    if (isValidFirstName && isValidLastName && isValidGender && isValidAddress && isValidEmail) {
        
        console.log("All inputs are valid.");
        const firstName = document.getElementById('input-first-name').value;
        const lastName = document.getElementById('input-last-name').value;
        let userName = firstName.slice(0, 3);
        if(lastName.charAt(0) != '-'){
            userName = userName.concat(lastName.slice(0, 3));
        }
        console.log(userName);
        change(userName);
        return true;
    } else {
        
        console.log("Please correct the input errors.");
        return false;
    }
}

function isAlpha(str) {
    for (let i = 0; i < str.length; i++) {
        if ((str.charAt(i) < 'A' || str.charAt(i) > 'Z') && (str.charAt(i) < 'a' || str.charAt(i) > 'z')) {
            return false;
        }
    }
    return true;
}

function isNumeric(str) {
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) < '0' || str.charAt(i) > '9') {
            return false;
        }
    }
    return true;
}

function correctAddress(str) {
    for (let i = 0; i < str.length; i++) {
        if ((str.charAt(i) < 'A' || str.charAt(i) > 'Z') && (str.charAt(i) < 'a' || str.charAt(i) > 'z') && (str.charAt(i) < '0' || str.charAt(i) > '9') && str.charAt(i) !== ' ' && str.charAt(i) !== '.' && str.charAt(i) !== ',' && str.charAt(i) !== '/') {
            return false;
        }
    }
    return true;
}

let emailErrorText = "";function validateEmail(email) {
    if (!email) {
        emailErrorText = "*Please enter your email!";
        return false;
    }
    email = email.trim();

    if (email.length === 0) {
        emailErrorText = "*Please enter your email!";
        return false;
    }

    const atIndex = email.indexOf('@');
    if (atIndex === -1 || email.indexOf('@', atIndex + 1) !== -1) {
        emailErrorText = "*Email must contain exactly one @ symbol!";
        return false;
    }

    const [localPart, domain] = email.split('@');

    if (localPart.length === 0 || domain.length === 0) {
        emailErrorText = "*Part before and after @ can't be empty!";
        return false;
    }

    if (localPart.includes('..') || domain.includes('..')) {
        emailErrorText = "*Email can't contain double dot(.)!";
        return false;
    }

    if (localPart.startsWith('.') || localPart.endsWith('.') || domain.startsWith('.') || domain.endsWith('.')) {
        emailErrorText = "*Email can't start or end with dot(.)!";
        return false;
    }
    // EMAILPRINTABLE CHARACTERS FROM GOOGLE
    const printableCharacters = "!#$%&'*+-/=?^_`{|}~0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let char of localPart) {
        if (!printableCharacters.includes(char) && char !== '.') {
            emailErrorText = "*Email can't contain double @!";
            return false;
        }
    }

    for (let char of domain) {
        if (!printableCharacters.includes(char) && char !== '.') {
            emailErrorText = "*Email can't contain double @!";
            return false;
        }
    }

    // Check domain extension
    const validExtensions = ['.com', '.ac.id', '.co.id'];
    const domainExtension = domain.substring(domain.lastIndexOf('.'));
    if (!validExtensions.includes(domainExtension)) {
        emailErrorText = "*Invalid domain extension. Allowed extensions are .com, .ac.id, .co.id";
        return false;
    }

    return true;
}


function validateEmailComposition(){
    const email = document.getElementById('input-email').value;
    const emailError = document.getElementById('email-error');
    if (!validateEmail(email) || email.charAt(0) == '@' || email.charAt(0) == '.' || !email.search("@") || email === "@.com" || email.includes("..") || email.endsWith("@") || email.endsWith(".")) {
        emailError.innerHTML = emailErrorText;
        emailError.style.visibility = "visible";
        return false;
    } else {
        emailError.style.visibility = "hidden";
        return true;
    }
}

function validateAddress() {
    const adr = document.getElementById('input-address').value;
    const adrError = document.getElementById('address-error');
    if (!adr || !correctAddress(adr) || !adr.startsWith("Jalan") || adr == "Jalan") {
        if (!correctAddress(adr)) {
            adrError.innerHTML = "*Address can only contain letters, numbers, dot, and slash!";
        } else if (!adr.startsWith("Jalan")) {
            adrError.innerHTML = "*Address must start with 'Jalan'";
        } else if(adr == "Jalan"){
            adrError.innerHTML = "*Address can't be 'Jalan' only";
        }
        adrError.style.visibility = "visible";
        return false;
    } else {
        adrError.style.visibility = "hidden";
        return true;
    }
}

function validateGender() {
    const gender = document.getElementById('input-gender').value;
    const genderError = document.getElementById('gender-error');
    if (gender !== "Male" && gender !== "Female") {
        genderError.style.visibility = "visible";
        return false;
    } else {
        genderError.style.visibility = "hidden";
        return true;
    }
}

function validateFirstName(){
    const firstName = document.getElementById('input-first-name').value
    const firstNameError = document.getElementById('first-name-error')
    if(!firstName){
        firstNameError.innerHTML = "*Please enter your first name!";
        firstNameError.style.visibility = "visible"
        return false;
    }else {
        if(firstName.charAt(0) < 'A' || firstName.charAt(0) > 'Z' || !isAlpha(firstName) || isNumeric(firstName)){
            if(firstName.charAt(0) < 'A' || firstName.charAt(0) > 'Z') firstNameError.innerHTML = "*First name must started with capital!";
            if(!isAlpha(firstName) || isNumeric(firstName)) firstNameError.innerHTML = "*Name must contain alphabets only!";
            firstNameError.style.visibility = "visible";
            return false;
        } else{
            firstNameError.style.visibility = "hidden";
            return true;
        }
    }
}

function validateLastName() {
    const lastName = document.getElementById('input-last-name').value.trim();
    const lastNameError = document.getElementById('last-name-error');
    if (!lastName) {
        lastNameError.innerHTML = "*Last name cannot be empty!";
        lastNameError.style.visibility = "visible";
        return false;
    } else {
        if (lastName.charAt(0) < 'A' || lastName.charAt(0) > 'Z' || !isAlpha(lastName) || isNumeric(lastName)) {
            if (lastName.charAt(0) < 'A' || lastName.charAt(0) > 'Z') error = error.concat("*Last name must start with a capital letter!<br>");
            if (!isAlpha(lastName) || isNumeric(lastName)) lastNameError.innerHTML = "*Last name must contain alphabets only!";
            lastNameError.style.visibility = "visible";
            return false;
        } else {
            lastNameError.style.visibility = "hidden";
            return true;
        }
    }
}

function change(str) {
    sessionStorage.setItem('username', str);
}