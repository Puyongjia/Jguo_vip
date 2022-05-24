window.onload = function () {
    obj();
}
var arry;
function obj() {
    var aj_ = new XMLHttpRequest();
    aj_.open('get', 'http://localhost:3000/report/new');
    aj_.send();
    aj_.onreadystatechange = function () {
        if (aj_.readyState == 4) {
            if (aj_.status == 200) {
                arry = JSON.parse(aj_.responseText);
                show(arry, '3', '0')
            } else {
                console.log('请求失败');
            }
        }
    }
}
var myDiv = document.getElementById('myDiv');
function show(num, a, b) {
    for (var i = b; i < a; i++) {
        myDiv.innerHTML += `
        <li>
        <a href="../businss/pen.html">
                            <img src="${num[i].img}" alt="" width="700px" height="412px">
                            <div class="inf_">
                                <p class="title_">${num[i].text}</p>
                                <div class="report_4">
                                    <div class="report_5">
                                        <span class="avt"></span>
                                        <span class="name">${num[i].uName}</span>
                                        <span class="time">${num[i].endTime}</span>
                                    </div>
                                    <div class="report_6">
                                        <span class="zan">3</span>
                                        <span class="look">3</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                    <a href="../businss/pen.html">
                            <div class="click_look">关于格林威特空气净化器还有 4 篇报告，点击查看</div>
                        </a>
                        </li>
                </ul>
        `
    }
}
var playMore = document.getElementsByClassName('playMore')[0];
var axx = true;
playMore.firstElementChild.onclick = function () {
    if (axx) {
        // background-image: url();
        playMore.firstElementChild.className = 'bj';
        playMore.firstElementChild.innerHTML = '正在加载中';
        setTimeout(function () {
            playMore.firstElementChild.className = '';
            playMore.firstElementChild.innerHTML = '---已加载完毕---';
            show(arry, '8', '4');
        }, 1500)
        axx = false;
    }
}