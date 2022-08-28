
var req = document.querySelector('#reqForm')

console.log('main_index is here')

window.onload = function (){
    document.getElementById('mainTitle').textContent = "OnLoad Function()"

    
}

/**
 * @brief For ???
 * @returns 
 */
function easteregg() {
    return document.getElementById('mainTitle').textContent = "????????"
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

}

function init() {
    req.addEventListener("submit", request, false)
}

init()