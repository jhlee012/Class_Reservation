/**
 * @file login.js
 * @author DevJh
 * @brief for Login Function
 *
 */
const idarr =["jhlee12", "10626", "dev"]
const passarr = ["admin", "10626", "dev"]

function autologin() {
    if (window.localStorage.getItem('id') && window.localStorage.getItem('pw')) {
        document.getElementById('id').value = atob(window.localStorage.getItem('id'))
        document.getElementById('pw').value = atob(window.localStorage.getItem('pw'))
        return;
    } else return;
}

/* window.onload = function() {
    autologin()
    document.getElementById('userinfo').value = "Logged In as " + atob(window.localStorage.getItem('id'))
    console.log('onload!')
} */

//moved to individual html

function loginStorage(id, pw) {
    let bid = btoa(id)
    let bpw = btoa(pw)

    window.localStorage.setItem('id', bid)
    window.localStorage.setItem('pw', bpw)
}

function onEnterLogin() {
    var keyCode = window.event.keyCode;

    if (keyCode == 13) return login();
    else return;

}

function login() {

    var $id = document.getElementById('id').value;
    var $pw = document.getElementById('pw').value

    console.log($id)
    console.log($pw)

    if (idarr.includes($id)) {
        let index = idarr.indexOf($id)

        if ($pw == passarr[index]) {
            loginStorage($id, $pw)
            console.log('login successful')
            window.location.href = 'loggedin.html';
            return;
        }

        else return alert("Id or Password does not match.")
    } else return alert("Id or Password does not match.")
    
}

function logout() {
    let id = window.localStorage.getItem('id')
    let pw = window.localStorage.getItem('pw')
    if (id && pw) {
        window.localStorage.removeItem('id');
        window.localStorage.removeItem('pw')
        alert("Successfully Logged-Out")
        window.location.href = 'main.html'
        return;
    }

    else return alert("아니이게뭔데!!!")
}