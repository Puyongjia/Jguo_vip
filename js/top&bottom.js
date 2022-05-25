var back_Top = document.getElementById('back_Top');
var timer;
window.onscroll = function () {
    // 获取滚动的值
    var top_ = document.documentElement.scrollTop || document.body.scrollTop;
    // 获取网页可见区域高
    var height_ = document.documentElement.clientHeight || document.body.clientHeight;
    // 当滚动的距离大于可见区域的值时，显示div 小于就隐藏
    if (top_ > height_) {
        back_Top.style.display = 'block';
    } else {
        back_Top.style.display = 'none';
    }
    // 单机返回顶部
    back_Top.onclick = function () {
        // 加入定时器 每次返回7/1的值
        timer = setInterval(function () {
            // 获取滚动的值
            var top_ = document.documentElement.scrollTop || document.body.scrollTop;
            var back_ = Math.floor(-top_ / 7);
            // 给滚动的值赋值；
            document.documentElement.scrollTop = document.body.scrollTop = top_ + back_;
            // 到顶部清空定时器
            if (top_ == 0) {
                clearInterval(timer);
            }

        }, 50)

    }
}
// 当鼠标滚动时 清除定时器
window.onmousewheel = function () {
    clearInterval(timer);
}
var top_right = document.getElementsByClassName('top_right')[0];

function xx() {
    var top_right = document.getElementsByClassName('top_right')[0];
    top_right.innerHTML = `
    <a href="##" class="seek">
    <a href="../regiht.html" class="login">注册</a>
    <a href="../register.html" class="login">登录</a>
    
    `
}
xx();





// localStorage中传入的ture或false是 string类型,不能作为if判断的条件，要转为boolean类型
var flag = localStorage.getItem('register');
var newFlag = eval(flag.toLowerCase())
if (newFlag) {
    var ate = localStorage.getItem('name');
    top_right.innerHTML = `
<a href="##" class="seek">
<a href="##" class="login" id="logi">登出</a>
<a href="##" class="login">${ate}</a>
`
}

var logi = document.getElementById('logi');
logi.onclick = function () {
    localStorage.setItem('register', false);
    xx();
}