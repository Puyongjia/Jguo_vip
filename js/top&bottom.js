var back_Top = document.getElementById('back_Top');

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
        var timer = setInterval(function () {
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