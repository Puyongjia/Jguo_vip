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
    yanzheng();
}
var arr = [];
function yanzheng() {
    clearInterval(timer);
    ti.onclick = null;
    var ax = 60;
    var timer = setInterval(function () {
        ti.innerHTML = ax + '秒后重试';
        ax--;
        if (ax == 56) {
            for (var i = 0; i < 4; i++) {
                arr.push(Math.floor(Math.random() * 10));
            }
            arr = arr.join('');
            alert('验证码为：' + arr);
        }
        if (ax < 0) {
            clearInterval(timer);
            ax = 60;
            ti.innerHTML = '重新发送';
            ti.onclick = function () {
                yanzheng();
            }
        }
    }, 1000)

}
input_[2].oninput = function () {
    if (input_[2].value == arr) {
        p_[2].innerHTML = '输入正确';
        p_[2].style.color = 'aquamarine'
    } else {
        p_[2].innerHTML = '验证码错误';
        p_[2].style.color = 'red'
    }
}

var inp_3 = /^[a-zA-Z0-9_-]{4,8}$/
input_[3].oninput = function () {
    if (inp_3.test(input_[3].value)) {
        p_[3].innerHTML = '输入正确';
        p_[3].style.color = 'aquamarine'
    } else {
        p_[3].innerHTML = '用户名:4到8位/字母/数字/下划线/减号';
        p_[3].style.color = 'red'
    }
}
var inp_4 = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,8}$/
input_[4].oninput = function () {
    if (inp_4.test(input_[4].value)) {
        p_[4].innerHTML = '输入正确';
        p_[4].style.color = 'aquamarine'
    } else {
        p_[4].innerHTML = '6-8位/必须包含字母和数字两种';
        p_[4].style.color = 'red'
    }
}
input_[5].oninput = function () {
    if (input_[5].value == input_[4].value) {
        p_[5].innerHTML = '输入正确';
        p_[5].style.color = 'aquamarine'
    } else {
        p_[5].innerHTML = '必须和上方输入的密码一致';
        p_[5].style.color = 'red'
    }
}

var t2 = document.getElementById('t2');
t2.onclick = function () {
    if (input_[2].value.length == 0) {
        alert('请获取验证码并正确输入');
    } else if (inp_1.test(input_[0].value) && (input_[1].value == 'r2b7' || input_[1].value == 'R2B7' || input_[1].value == 'r2B7' || input_[1].value == 'R2b7') && input_[2].value == arr && inp_3.test(input_[3].value) && inp_4.test(input_[4].value) && input_[5].value == input_[4].value) {
        if (confirm('注册成功,是否自动登录---自动登录后将自动保存账号密码---')) {
            window.location.href = '../index/index.html';
            localStorage.setItem('auto', true);//是否自动登录
            localStorage.setItem('register', true);//是否已经登录
        } else {
            window.location.href = '../index/register.html';
            localStorage.setItem('auto', false);//是否自动登录
            localStorage.setItem('register', false);//是否已经登录
        }
        localStorage.setItem('cellphone', input_[0].value);//手机号
        localStorage.setItem('name', input_[3].value);//用户名
        localStorage.setItem('password', input_[4].value);//密码

    } else {
        alert('请完成所有项目');
    }
}

