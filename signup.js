const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");
const form3 = document.getElementById("form3");

const next1 = document.getElementById("next1");
const back1 = document.getElementById("back1");
const next2 = document.getElementById("next2");
const back2 = document.getElementById("back2");
const submit = document.getElementById("submit")

const email = document.getElementById("email");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");

const linkedin = document.getElementById("linkedin");
const github = document.getElementById("github");
const facebook = document.getElementById("facebook");

const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const mobile = document.getElementById("mobile")

const progress = document.getElementById("progress")

next1.onclick = function() {
    if (isAccountValidate(email, password1, password2)) {
        form1.style.left = "-400px"
        form2.style.left = "0px"
        progress.style.width = "240px"
    }

};

function isAccountValidate(email, password1, password2) {
    var emailvalue = email.value.trim();
    var password1value = password1.value.trim();
    var password2value = password2.value.trim();

    var bool = true;

    if (emailvalue === "") {
        showError(email, "Field can not be Blank");
        bool = false;
    } else if (!isEmailValid(emailvalue)) {
        showError(email, "Email id is not valid");
        bool = false;
    } else {
        showSuccess(email);
    }

    if (password1value === "") {
        showError(password1, "Field can not be Blank");
        bool = false;
    } else {
        showSuccess(password1);
    }

    if (password2value === "") {
        showError(password2, "Field can not be Blank");
        bool = false;
    } else if (password1value != password2value) {
        showError(password2, "Passwords does not match");
    } else {
        showSuccess(password2);
    }

    return bool;
}

function isEmailValid(email) {
    return /^([a-zA-Z0-9\.\-]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,3})$/.test(email);
}

back1.onclick = function() {
    form2.style.left = "400px"
    form1.style.left = "0px"
    progress.style.width = "120px"
};


next2.onclick = function() {
    if (isDataValidate(linkedin, github, facebook)) {
        form2.style.left = "-400px"
        form3.style.left = "0px"
        progress.style.width = "360px"
    }
};


back2.onclick = function() {
    form3.style.left = "400px"
    form2.style.left = "0px"
    progress.style.width = "240px"
};

submit.onclick = function() {
    isDataValidate(fname, lname, mobile)
}

function isDataValidate(input1, input2, input3) {
    var input1value = input1.value.trim();
    var input2value = input2.value.trim();
    var input3value = input3.value.trim();

    var bool = true;

    if (input1value === "") {
        showError(input1, "Field can not be Blank");
        bool = false;
    } else {
        showSuccess(input1);
    }

    if (input2value === "") {
        showError(input2, "Field can not be Blank");
        bool = false;
    } else {
        showSuccess(input2);
    }

    if (input3value === "") {
        showError(input3, "Field can not be Blank");
        bool = false;
    } else {
        showSuccess(input3);
    }

    return bool;
}

function showError(input, msg) {
    const formControl = input.parentNode;
    formControl.className = "form-data error";
    const small = formControl.querySelector("small")
    small.innerHTML = msg

}

function showSuccess(input) {
    const formControl = input.parentNode;
    formControl.className = "form-data success";
}