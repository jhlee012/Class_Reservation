import * as loginControl from './modules/login.mjs'

window.onload = function () {
    loginControl.autologin()
    console.log('onload!')
} 

function loginRequested(event) {
    alert('requested!')

    let a = loginControl.login()

    if (a == true) {
        alert('Success')
        window.location.href('loggedin.html')
    } else {
        alert("Id or Password does not match!")
        window.location.reload()
    }
}

document.getElementById('loginForm').addEventListener("submit", loginRequested, false)
console.log('ha')
