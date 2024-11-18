let funcObj={ 
  f_0:function(){ 
    const tl = gsap.timeline();

    tl.to("main .main_text > *", {
      opacity: 1,
      stagger: 0.3,
      y:-30,
    });
  },
  f_1:function(){ 
    const tl = gsap.timeline();

    tl.to("#section01 .cap1", {
      opacity: 1,
      x: 5,
    });
    tl.to("#section01 .cap2", {
      opacity: 1,
      x: -5,
    });
  },
  f_2:function(){ 
    const tl = gsap.timeline();

    tl.to("#section02 .itmes div[class*=key]", {
      opacity: 1,
      stagger: 0.3,
      y:-30,
    });
  },
  f_3:function(){ 
    const tl = gsap.timeline();

    tl.to("#section03 table tr", {
      opacity: 1,
      stagger: 0.3,
      y:-10,
    });
  },
};

let section = document.querySelectorAll('section');

funcObj['f_0']();

window.addEventListener('scroll',function(){
  let scroll = document.scrollingElement.scrollTop;
  let outHeight = this.window.outerHeight + 200;

  for(let i = 0; i < section.length; i++){

    if(scroll > section[i].offsetTop - outHeight &&
      scroll < section[i].offsetTop - outHeight + section[i].offsetHeight){
        funcObj['f_'+i]();
        // console.log(i);
    };
  };
});

$(document).ready(function(){

  //Main___
  let mFadeContainar = $("main .rel"),
      mFadeImage = mFadeContainar.find(".main_images img"),
      mOldidx = 0, 
      mIdx = 0,
      mFadeCount = mFadeImage.length,
      mInterval =4000;

  function mFadeAni(mIdx){
    if(mOldidx != mIdx){ 
      mFadeImage.eq(mIdx).fadeIn("500");
      mFadeImage.eq(mOldidx).fadeOut("600");
      $(".main_text .text").text(mFadeImage.eq(mIdx).attr("alt"));
    };
    mOldidx = mIdx;
  };

  function mFadeAuto(){
    mFadeTimer = setInterval(function(){
    mIdx = (mOldidx + 1) % mFadeCount;
    mFadeAni(mIdx);
    },mInterval);
  };

  if($(window).width() < 1300) {
    clearInterval(mFadeAuto);
  } else {
    mFadeAuto();
  }

  let secChaBtn = $("#section02 .menu_btn>p"),
      secCap = $("#section02 .s2_content");

  secChaBtn.click(function(){
    let result = $(this).attr("data-alt");

    secCap.removeClass("active");
    $("#"+result).addClass("active");

  });

  let secMove =  $("#section02 .content .caption"),
      secImg = $("#section02 .images img");

  secMove.mouseenter(function(){

    let result = $(this).attr("data-alt");

    secImg.removeClass("active");
    $("#"+result).addClass("active").hide().fadeIn();
  })
  .mouseleave(function(){
    secImg.removeClass("active");
    secImg.eq(0).addClass("active").hide().fadeIn();
  });

  let secBtn = $("#section02 div.card");

  secBtn.click(function(){
    $(this).find(".item").addClass("active");
    $(this).siblings().find(".item").removeClass("active");
  });

  if($(window).width() > 760) {
    let colneElement = $("#section03 .swiper-wrapper").clone(true);
    $(colneElement).appendTo("#section03 .swiper-container");
  } 

  let faqTeb = $("#section04 .accordion div.title");

  faqTeb.click(function(){
    $(this).siblings(".title").removeClass("active");
    $(this).toggleClass("active");
    $(this).siblings(".content").stop().slideUp();
    $(this).next().stop().slideToggle();
  });

  var cachedWidth = $(window).width();
  $(window).resize(function () {
    var newWidth = $(window).width();
    if (newWidth !== cachedWidth) {
      cachedWidth = newWidth;
    }
  });

  $(window).resize(function () {
    document.location.reload();
  });

  var cachedWidth = $(window).width();
  $(window).resize(function () {
    var newWidth = $(window).width();
    if (newWidth !== cachedWidth) {
      var delay = 300;
      var re_timer = null;
      $(window).on('resize', function () {
        clearTimeout(re_timer);
        re_timer = setTimeout(function () {
          document.location.reload();
        }, delay);
      });
      cachedWidth = newWidth;
    }
  });
  
  });




