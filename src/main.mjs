var req = document.querySelector('#reqForm')

console.log('main_index is here')

window.onload = function (){
    document.getElementById('mainTitle').textContent = "OnLoad Function()"
    checkLogin()    
    get_reqed()
}

/**
 * @brief For ???
 * @returns 
 */
function easteregg() {
    return document.getElementById('mainTitle').textContent = "????????"
}

function checkLogin() {
    let id = window.localStorage.getItem('id')
    let pw = window.localStorage.getItem('pw')

    if (!window.localStorage.getItem('id') && !window.localStorage.getItem('pw')) {
        document.location.href = 'login.html?login=false'
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


function get_reqed() {
    let info_json = JSON.parse(window.localStorage.getItem('reqs'))

    if (!info_json) {
        let div = document.getElementById('reqClass1')
        div.innerHTML = 
            '<span style="font-size: 25px" color="#ff0000"><i>Not Requested..</i></span>'
        return;
    }

    let a1 = document.querySelector('.a01')
    let a2 = document.querySelector('.a02')
    let a3 = document.querySelector('.a03')
    let a4 = document.querySelector('.a04')
    let a5 = document.querySelector('.a05')

    let arr = [a1, a2, a3, a4, a5]

    for (let i = 0; i < 5; i++) {
        let indicator = (info_json[i+1] == true) ? 'O' : 'X'

        arr[i].textContent = indicator;
        indicator = '' //clear indicator
    }
    
}

/**
 * @param none
 * @brief When event Requested;; 
 */
function request(event) {
    event.preventDefault();
    let reqform = {
        1: req.b01.checked,
        2: req.b02.checked,
        3: req.b03.checked,
        4: req.b04.checked,
        5: req.b05.checked
    }

    console.log(reqform)

    let counter = 0;
    for (let i = 0; i <= 5; i ++) {
        if (reqform[i] == true) counter++;
        if (counter > 3) {
            alert('최대 3일까지 신청할 수 있습니다.')
            req.reset()
            return false;
            break;
        }
    }

    if (window.localStorage.getItem('reqs')) {
        window.localStorage.removeItem('reqs')
        window.localStorage.setItem('reqs', JSON.stringify(reqform)) //when you re-request this object, you should use JSON.parse(item)
    } else {
        window.localStorage.setItem('reqs', JSON.stringify(reqform)) // "
    }

    alert('Successfully Requested')
    window.location.reload()

}

function init() {
    req.addEventListener("submit", request, false)
}

init()