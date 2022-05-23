var anniu = document.getElementsByClassName('anniu')[0];
var anniu_1 = document.getElementsByClassName('anniu_1')[0];
var tf = true;
anniu.onclick = function () {
    if (tf) {
        num1 = 1;
        var timer1 = setInterval(function () {
            anniu_1.style.left = -num1 + 'px';
            num1++;

            if (num1 == 70) {
                clearInterval(timer1);
            }
        }, 8)
        tf = false;
    } else {
        num1 = 70;
        var timer1 = setInterval(function () {
            anniu_1.style.left = -num1 + 'px';
            num1--;

            if (num1 == 0) {
                clearInterval(timer1);
            }
        }, 8)
        tf = true;
    }
}


var t2 = document.getElementById('t2');
var in_1 = document.getElementsByTagName('input');
// localStorage中传入的ture或false是 string类型,不能作为if判断的条件，要转为boolean类型
var flag = localStorage.getItem('auto');
var newFlag = eval(flag.toLowerCase())
if (newFlag) {
    anniu_1.style.left = '-1px';
    console.log(1111);
    xr();
} else {
    console.log(111);
    anniu_1.style.left = '-69px';
}

function xr() {
    in_1[0].value = localStorage.getItem('name')
    in_1[1].value = localStorage.getItem('password')
}

t2.onclick = function () {

    if (in_1[0].value == localStorage.getItem('name') || in_1[0].value == localStorage.getItem('cellphone') && in_1[1].value == localStorage.getItem('password')) {
        alert('登录成功');
        window.location.href = '../index/index.html';
        localStorage.setItem('register', true);
    } else {
        alert('用户名或密码有误，或者还未注册！！！');
    }

    if (anniu_1.style.left == '-1px') {
        localStorage.setItem('auto', true);

    } else {
        localStorage.setItem('auto', false);
    }
}