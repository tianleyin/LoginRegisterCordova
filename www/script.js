var users = []

function login() {
    var loginUser = document.querySelector("#loginUser").value
    var loginPassword = document.querySelector("#loginPassword").value
    var indexUser = users.indexOf(loginUser)

    if (indexUser==-1) {
        alert("Login Incorrecto")
    } else {
        alert("Login Correcto")
    }
}

function register() {
    var registerUser = document.querySelector("#registerUser").value
    var password1 = document.querySelector("#registerPassword1").value
    var password2 = document.querySelector("#registerPassword2").value
    if (password1 == password2) {
        alert("Registro Correcto")
        var nuevoUsuario = {
            usuario: registerUser,
            contra: password1
        }

        users.push(nuevoUsuario)
        console.log(users)
    } else {
        alert("Registro Incorrecto")
    }
}