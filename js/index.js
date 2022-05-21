var slideshow_1 = document.getElementsByClassName('slideshow_1')[0];
var num = 0;
function fu() {
    var time = setInterval(function () {
        num += -10;
        slideshow_1.firstElementChild.style.marginLeft = num + 'px'
        if (num == -1000) {
            slideshow_1.firstElementChild.style.marginLeft = 0 + 'px'
            slideshow_1.appendChild(slideshow_1.firstElementChild);
            num = 0;
            clearInterval(time);
            setTimeout(function () {
                fu()
            }, 1000)
        }
    }, 18)
}
fu()