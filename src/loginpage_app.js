
function EnterLogin() {
    let loginform = document.getElementById("loginForm")
    let key = window.event.keyCode

    if (key == 13) {
        loginform.submit()
        return;
    } else return;
}

function submitLogin() {
    let loginform = document.getElementById("loginForm")
    loginform.submit()
    return;
}