
export function Login_init() {
    document.querySelector('#loginForm').addEventListener("submit", loginRequested, false)
    console.log('EventListener!')
}

export function autologin() {
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
    alert('requested!')

    let a = login()

    if (a == true) {
        alert('Success')
        window.location.href('loggedin.html')
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
