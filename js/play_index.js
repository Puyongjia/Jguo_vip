window.onload = function () {
    ajx();
}
var arr;
function ajx() {
    var ajax = new XMLHttpRequest();
    ajax.open('get', 'http://localhost:3000/play/hot');
    ajax.send();
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4) {
            if (ajax.status == 200) {
                arr = JSON.parse(ajax.responseText);
                // console.log(arr, '0');
                show(arr, 0)
                xin();
            } else {
                console.log('请求失败');
            }
        }
    }
}
var find_Coldplay = document.getElementsByClassName('find_Coldplay')[0]
function show(arry, num) {
    for (var aa = num; aa < num + 2; aa++) {
        // console.log(arry[aa]);
        for (var aaa = 0; aaa < arry[aa].length; aaa++) {
            // console.log(arry[aa][aaa]);

            find_Coldplay.innerHTML += ` <li>
            <a href="#">
                <img src="${arry[aa][aaa].img}" alt="">
                <div class="info">
                    <p class="nam">${arry[aa][aaa].text}
                        <span>${arry[aa][aaa].description}</span>
                    </p>
                    <div class="tip_fix">
                        <span class="price_left">${arry[aa][aaa].price}</span>
                        <div class="right_icon">
                            <span class="xin">${arry[aa][aaa].like}</span>
                            <span class="look">${arry[aa][aaa].words}</span>

                        </div>
                    </div>
                </div>
            </a>
        </li>`


        }
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
            show(arr, 2);
            xin();
        }, 1500)
        axx = false;
    }
}

function xin() {
    var xin = document.getElementsByClassName('xin');
    for (var x = 0; x < xin.length; x++) {
        xin[x].onclick = function () {
            if (this.className == 'xin') {
                this.className = 'xin1';
            } else {
                this.className = 'xin';
            }
            return false;
        }
    }
}
