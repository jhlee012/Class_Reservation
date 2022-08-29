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

export function login(id, pw, refresh) {

    var $id = id || document.getElementById('id').value;
    var $pw = pw || document.getElementById('pw').value

    console.log($id)
    console.log($pw)

    if (idarr.includes($id)) {
        let index = idarr.indexOf($id)

        if ($pw == passarr[index]) {
            loginStorage($id, $pw)
            console.log('login successful')

            if (refresh == (true || undefined)) {
                alert('Successfully log-in')
                window.location.href = 'loggedin.html'
            }
            return true;
        }

        else {
            if (refresh == (true || undefined)) {
                alert("Id or Password does not match.")
                window.location.href = 'login.html?loginFailed'
            }
            return false
        }
    } else {
        if(refresh == (true || undefined)) {
            alert("Id or Password does not match.")
            window.location.href = 'login.html?loginFailed'
        }
        return false
    }
    
}

function logout() {
    let id = window.localStorage.getItem('id')
    let pw = window.localStorage.getItem('pw')
    if (id && pw) {
        window.localStorage.removeItem('id');
        window.localStorage.removeItem('pw')
        alert("Successfully Logged-Out")
        window.location.href = 'login.html'
        return;
    }

    else return alert("아니이게뭔데!!!")
}


function login2(event) {
    alert('Submitting..')
    event.preventDefault()
    let query = document.querySelector('#loginForm')

    let id = query.id.value
    let pw = query.pw.value

    login(id, pw, true)
}

function listenerLogin() {
    document.querySelector('#loginForm').addEventListener('submit', login2, false)
}

listenerLogin()