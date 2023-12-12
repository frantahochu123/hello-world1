function login() {
 const username = document.getElementById("username").value;
 const password = document.getElementById("password").value;

 const loginData = username + "." + password

    for (let i = 0; i < database.leght; i++) {
        if(loginData == database[i]) {
            console.log("login seccessful")
        }
    }

 console.log("username, password")

}