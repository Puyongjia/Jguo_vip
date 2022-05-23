var slideshow_1 = document.getElementsByClassName('slideshow_1')[0];
var num = 0;
var timer;
var time;
function fu() {
    clearInterval(time);
    time = setInterval(function () {
        num += -10;
        slideshow_1.firstElementChild.style.marginLeft = num + 'px'
        if (num == -1000) {
            slideshow_1.firstElementChild.style.marginLeft = 0 + 'px'
            slideshow_1.appendChild(slideshow_1.firstElementChild);
            num = 0;
            clearInterval(time);
            timer = setTimeout(function () {
                fu()
            }, 2000)
        }
    }, 15)
}
fu()

var rig = document.getElementsByClassName('rig')[0]
var let = document.getElementsByClassName('let')[0];
rig.onclick = function () {
    clearTimeout(timer);
    fu();
}
let.onclick = function () {
    clearTimeout(timer);
    clearTimeout(time);

    var timet = setInterval(function () {
        num += 10;
        slideshow_1.firstElementChild.style.marginLeft = num + 'px'
        if (num == 1000) {
            slideshow_1.firstElementChild.style.marginLeft = 0 + 'px'
            slideshow_1.insertBefore(slideshow_1.lastElementChild, slideshow_1.firstElementChild);
            num = 0;
            clearInterval(timet);
            timer = setTimeout(function () {
                fu()
            }, 3000)
        }
    }, 15)
}