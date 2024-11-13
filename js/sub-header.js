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
    // console.log(scroll);

    if(scroll >100){
      scrollTopBtn.addClass("On")
    }else{
      scrollTopBtn.removeClass("On");
    };
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