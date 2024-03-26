document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (username === 'spravneUzivatelskeJmeno' && password === 'spravneHeslo') {
        alert('Přihlášení úspěšné');
    } else {
        document.getElementById('message').innerText = 'Nesprávné uživatelské jméno nebo heslo';
    }
});