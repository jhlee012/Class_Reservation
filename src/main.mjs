import * as loginControl from './modules/login.mjs'

var req = document.querySelector('#reqForm')

window.onload = function (){
    document.getElementById('mainTitle').textContent = "OnLoad Function()"
    loginControl.checkLogin()  
    get_reqed()
}






function get_reqed() {
    let info_json = JSON.parse(window.localStorage.getItem('reqs'))

    if (!info_json) {
        let div = document.getElementById('reqClass1')
        div.innerHTML = 
            '<i>Not Requested..</i>'
        return;
    }

    let jsonid = info_json.id

    if (jsonid !== window.localStorage.getItem('id')) {
        window.localStorage.removeItem('id')
        window.localStorage.removeItem('pw')
        window.localStorage.removeItem('reqs')

        alert('정보가 현재 로그인 된 아이디와 일치하지 않아 초기화되었습니다. 재로그인이 필요합니다.')
        location.href = 'login.html?infoNotMatch'
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
        5: req.b05.checked,
        'id':localStorage.getItem('id')
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

req.addEventListener("submit", request, false)

document.getElementById('logoutT').onclick = loginControl.logout