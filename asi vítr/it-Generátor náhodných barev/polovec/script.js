function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;


    if (username === "" && password === "") {
        document.getElementById("message").innerHTML = "Přihlášení úspěšné!";
    } else {
        document.getElementById("message").innerHTML = "Nesprávné uživatelské jméno nebo heslo!";
    }
}