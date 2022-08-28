
export function setCookie(name, value, expdate) {
    var expire = new Date();

    expire.setDate(expire.getDate() + expdate)

    var cookie_value = escape(value) + ((expdate==null) ? '' : '; expires='+ expire.toUTCString())
    document.cookie = name + '=' + cookie_value;
}


export function getCookie(cookie_name) {
    var x, y;
    var val = document.cookie.split(';');
  
    for (var i = 0; i < val.length; i++) {
      x = val[i].substr(0, val[i].indexOf('='));
      y = val[i].substr(val[i].indexOf('=') + 1);
      x = x.replace(/^\s+|\s+$/g, ''); // 앞과 뒤의 공백 제거하기
      if (x == cookie_name) {
        return unescape(y); // unescape로 디코딩 후 값 리턴
      }
    }
}
