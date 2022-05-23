window.onload = function () {
    ajx();
}
var arr;
function ajx() {
    var ajax = new XMLHttpRequest();
    ajax.open('get', 'http://localhost:3000/useing/public');
    ajax.send();
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4) {
            if (ajax.status == 200) {
                arr = JSON.parse(ajax.responseText);
                // console.log(arr, '0');
                show(arr, 0, 8)
            } else {
                console.log('请求失败');
            }
        }
    }
}

var dl = document.getElementById('dl');
function show(arry, num, num1) {
    for (var aa = num; aa < num1; aa++) {
        if (arry[aa].info_ty == '首发') {
            dl.innerHTML += `
            <dt>
            <a href="#">
                <span class="span_ span_Y">首发</span>
                <img src="${arry[aa].img}" alt="">
                <div class="hot_con">
                    <h2 class="name">${arry[aa].text}</h2>
                    <p class="tabs hei">
                        <span>${arry[aa].totalnum}</span>
                        <span>${arry[aa].num}</span>
                    </p>
                    <p class="sq">
                        <span>${arry[aa].endTime}</span>申请
                    </p>
                    <p class="hei">剩余${arry[aa].apply}天</p>
                </div>
            </a>
        </dt>
            
            `
        } else {
            dl.innerHTML += `
                <dt>
                        <a href="#">
                            <span class="span_ span_S">体验师专享</span>
                            <img src="${arry[aa].img}" alt="">
                            <div class="hot_con">
                                <h2 class="name">${arry[aa].text}</h2>
                                <p class="tabs hei">
                                    <span>${arry[aa].totalnum}</span>
                                    <span>${arry[aa].num}</span>
                                </p>
                                <p class="sq">
                                    <span>${arry[aa].endTime}</span>申请
                                </p>
                                <p class="hei">查看试用名单</p>
                            </div>
                        </a>
                    </dt>
                `
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
            show(arr, 8, 13);
        }, 1500)
        axx = false;
    }
}