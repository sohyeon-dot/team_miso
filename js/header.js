$(document).ready(function(){

  const BODY = $("body");
  const mobBtn = $(".mob_btn");
  const scrollTopBtn = $(".goto-top");

  mobBtn.click(function(){
    BODY.toggleClass("mOpen");
  });

  scrollTopBtn.on("click",function(){
    window.scrollTo({
      top:0,
      behavior:"smooth"
    });
  });

  $(window).on("scroll",function(){
    let scroll = $(this).scrollTop();
    let wB = $(window).innerWidth();
    // console.log(scroll);

    if (scroll > 300) {
      scrollTopBtn.addClass('On');
    } else {
      scrollTopBtn.removeClass('On');
    }
    
    if (scroll > 300 && wB > 1300) {
      scrollTopBtn.addClass('On');
      $('.header_left .nav').css({ display: 'none' });
      $('.header_left img').css({ display: 'none' });
    } if(scroll < 300 && wB > 1300) {
      scrollTopBtn.removeClass('On');
      $('.header_left .nav').css({ display: 'inline-block' });
      $('.header_left img').css({ display: 'inline-block' });
    }

    if (scroll > 900 && wB >1300) {
      BODY.addClass('scrolling');
      $('.header_left img').css({ display: 'inline-block' });
    } else {
      BODY.removeClass('scrolling');
    }
  });

  //Desktop Navigation_____________
  $(".subNav .dask_menu").hover(function(){
    $(this).find(".sub_menu").stop().slideDown();
  },function(){
    $(this).find(".sub_menu").stop().slideUp();
  });

  $(window).on("load resize", function(){
    let w = $(window).innerWidth();

    if(w < 1300){
      BODY.removeClass("mOpen")
      $(".subNav").removeAttr("style");
    }
  });

});