import * as loginControl from './modules/login.mjs'

window.onload = function () {
    console.log('onload?')
    loginControl.autologin()
    document.querySelector('#loginForm').addEventListener("submit", loginControl.loginRequested, false)
} 



console.log('loading')
