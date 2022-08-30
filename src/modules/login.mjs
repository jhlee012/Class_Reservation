
export function Login_init() {
    document.querySelector('#loginForm').addEventListener("submit", loginRequested, false)
    console.log('EventListener!')
}

export function autologin() {
    console.log('autologin..')
    if (window.localStorage.getItem('id') && window.localStorage.getItem('pw')) {
        document.getElementById('id').value = atob(window.localStorage.getItem('id'))
        document.getElementById('pw').value = atob(window.localStorage.getItem('pw'))
    }
}

export const idarr =["jhlee12", "10626", "dev"]
export const passarr = ["admin", "10626", "dev"]

export function login() {
    let query = document.querySelector('#loginForm')

    let id = query.id.value
    let pw = query.id.value

    if(idarr.includes(id)) {
        if (pw == passarr[idarr.indexOf(id)]) {
            setLoginStorage(id, pw)
            console.log('Successfully logged-in as ' + id)
            return true;
        }
        else return false
    } else return false
}

export function setLoginStorage(id, pw) {
    let bid = btoa(id)
    let bpw = btoa(pw)

    window.localStorage.setItem('id', bid)
    window.localStorage.setItem('pw', bpw)
}

export function loginRequested(event) {
    event.preventDefault()

    let a = login()

    if (a == true) {
        alert('Success')
        window.location.href = 'loggedin.html'
    } else {
        alert("Id or Password does not match!")
        window.location.reload()
    }
}

export function logout() {
    let id = window.localStorage.getItem('id')
    let pw = window.localStorage.getItem('pw')

    if (!id || !pw) return alert("아니이게뭔데!!")

    window.localStorage.removeItem('id')
    window.localStorage.removeItem('pw')

    alert('Successfully Logged-Out!')
    window.location.href = 'login.html'
}

export function checkLogin() {
    let id = window.localStorage.getItem('id')
    let pw = window.localStorage.getItem('pw')

    if (!window.localStorage.getItem('id') && !window.localStorage.getItem('pw')) {
        window.location.href = 'login.html?login=false'
        return alert("Please Log-In first to access!")
    }

/*     let loginres = login(atob(id), atob(pw), false)

    if (loginres == false) {
        window.location.href = 'login.html?login=false'
        alert('Error ; Log-in Failed')
        window.localStorage.removeItem('id')
        window.localStorage.removeItem('pw')
        return; 
    } */

    document.getElementById('userinfo').textContent = "Logged In as " + atob(window.localStorage.getItem('id'))
    console.log('onload!')
    console.log(document.getElementById('userinfo'))
}