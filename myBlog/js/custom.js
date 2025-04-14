
window.onscroll = function () {
    scrollFunction()
};
//当用户从文档顶部向下滚动20px时，显示悬浮按钮
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("movetop").style.display = "block";
    } else {
        document.getElementById("movetop").style.display = "none";
    }
}
// 点击滚动到顶部
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

$(document).ready(function () {

    $(function () {
        $('.navbar-toggler').click(function () {
            $('body').toggleClass('noscroll');
        });
    });

    $('.owl-testimonial').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        responsiveClass: true,
        autoplay: false,
        autoplayTimeout: 5000,
        autoplaySpeed: 1000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            480: {
                items: 1,
                nav: false
            },
            667: {
                items: 1,
                nav: true
            },
            1000: {
                items: 1,
                nav: true
            }
        }
    })
})
