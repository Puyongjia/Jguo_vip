window.onload = function () {
    act();
}
var arr;
function act() {
    var ajx_ = new XMLHttpRequest();
    ajx_.open('get', 'http://localhost:3000/guid/new');
    ajx_.send();
    ajx_.onreadystatechange = function () {
        if (ajx_.readyState == 4) {
            if (ajx_.status == 200) {
                arr = JSON.parse(ajx_.responseText);
                show(arr, '8', '0');
            } else {
                console.log('请求失败');
            }
        }
    }
}

var myDiv = document.getElementById('myDiv');
function show(num, at, xx) {
    for (var i = xx; i < at; i++) {
        myDiv.innerHTML += `
        <li>
                    <a href="#">
                        <img src="${num[i].img}" alt="" width="213" height="130">
                        <div class="info">
                            <p class="name">${num[i].text}</p>
                            <div class="info_1">
                                <div class="info_2">
                                    <span class="mind">${num[i].like}</span>
                                    <span class="browse">${num[i].words}</span>
                                </div>
                            </div>
                        </div>
                    </a>
                </li>
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
            show(arr, 15, 8);
        }, 1500)
        axx = false;
    }
}