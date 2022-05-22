var input_ = document.getElementsByTagName('input');
var p_ = document.getElementsByClassName('ts')[0].children;


var inp_1 = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;//手机号
input_[0].oninput = function () {
    if (inp_1.test(this.value)) {
        p_[0].innerHTML = '输入正确';
        p_[0].style.color = 'aquamarine'
    } else if (this.value.length == 0) {
        p_[0].innerHTML = '手机号不能为空~';
        p_[0].style.color = 'red'
    } else {
        p_[0].innerHTML = '请输入正确的手机号哦~';
        p_[0].style.color = 'red'
    }
}
input_[1].oninput = function () {
    if (this.value == 'r2b7' || this.value == 'R2B7' || this.value == 'r2B7' || this.value == 'R2b7') {
        p_[1].innerHTML = '输入正确';
        p_[1].style.color = 'aquamarine'
    } else if (this.value.length == 0) {
        p_[1].innerHTML = '验证码不能为空~';
        p_[1].style.color = 'red'
    } else {
        p_[1].innerHTML = '验证码错误~';
        p_[1].style.color = 'red'
    }
}
var ti = document.getElementsByClassName('ti')[0];
ti.onclick = function () {
    var arr = []
    var ax = 60;
    var timer = setInterval(function () {
        ti.innerHTML = ax + '秒后重试';
        ax--;
        if (ax == 58) {
            for (var i = 0; i < 4; i++) {
                arr.push(Math.floor(Math.random() * 10));
            }
            alert('验证码为：' + arr.join(''));
        }
        if (ax == 0) {
            clearInterval(timer);
            ax = 60;
            this.innerHTML = '重新发送';
        }
    }, 1000)


}
