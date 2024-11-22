$(document).ready(function () {
//Main___
let mFadeContainar = $('main .rel'),
mFadeImage = mFadeContainar.find('.main_images img'),
mOldidx = 0,
mIdx = 0,
mFadeCount = mFadeImage.length,
mInterval = 4000;

function mFadeAni(mIdx) {
if (mOldidx != mIdx) {
    mFadeImage.eq(mIdx).fadeIn('500');
    mFadeImage.eq(mOldidx).fadeOut('600');
    $('.main_text .text').text(mFadeImage.eq(mIdx).attr('alt'));
}
mOldidx = mIdx;
}

function mFadeAuto() {
mFadeTimer = setInterval(function () {
    mIdx = (mOldidx + 1) % mFadeCount;
    mFadeAni(mIdx);
}, mInterval);
}

if ($(window).width() < 1300) {
clearInterval(mFadeAuto);
} else {
mFadeAuto();
}

let secChaBtn = $('#section02 .menu_btn>p'),
secCap = $('#section02 .s2_content');

secChaBtn.click(function () {
let result = $(this).attr('data-alt');

secCap.removeClass('active');
$('#' + result).addClass('active');
});

let secMove = $('#section02 .content .caption'),
secImg = $('#section02 .images img');

secMove
.mouseenter(function () {
    let result = $(this).attr('data-alt');

    secImg.removeClass('active');
    $('#' + result)
    .addClass('active')
    .hide()
    .fadeIn();
})
.mouseleave(function () {
    secImg.removeClass('active');
    secImg.eq(0).addClass('active').hide().fadeIn();
});

let secBtn = $('#section02 div.card');

secBtn.click(function () {
$(this).find('.item').addClass('active');
$(this).siblings().find('.item').removeClass('active');
});

if ($(window).width() > 600) {
let colneElement = $('#section03 .swiper-wrapper').clone(true);
$(colneElement).appendTo('#section03 .swiper-container');
}

let faqTeb = $('#section04 .accordion div.title');

faqTeb.click(function () {
$(this).siblings('.title').removeClass('active');
$(this).toggleClass('active');
$(this).siblings('.content').stop().slideUp();
$(this).next().stop().slideToggle();
});

$(window).resize(function () {
document.location.reload();
});

var delay = 300;
var timer = null;
$(window).on('resize', function () {
clearTimeout(timer);
timer = setTimeout(function () {
    document.location.reload();
}, delay);
});
});
