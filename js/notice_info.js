$(function(){
    let header = $("#header_wrap");
    $(window).scroll(function(){
        let num = 0;
        let scTop = $(this).scrollTop();
        /*gnb 스크롤 애니메이션*/
        if(scTop > num ){
            header.addClass('gnb_bg');
            $(".login").css("display","none")
        }else if(scTop <= num ){
            header.removeClass('gnb_bg');
            $(".login").css("display","block")
        }
    });

    /* all menu 클릭시 나타나기 */
    let allMenu = $("#all_menu");
    $(".all_menu").click(function(){
        allMenu.css("display","block");
    });
    $(".all_menu_close").on("click",function(){
        allMenu.css("display","none");
    })

      /* common : submenu 노출 */
  header.on("mouseenter", function() {
    $(this).addClass("change_hight");
    $(".gnb_wrap .main_gnb > li").siblings().children(".sub_gnb").removeClass("is_show");
    $(".gnb_wrap .main_gnb > li:nth-of-type(1)").children(".sub_gnb").addClass("is_show");
  });
  header.on("mouseleave", function() {
    $(this).removeClass("change_hight");
    $(".gnb_wrap .main_gnb > li:nth-of-type(1)").children(".sub_gnb").removeClass("is_show");
  });

  $(".gnb_wrap .main_gnb > li").mouseover(function() {
    $(this).siblings().children(".sub_gnb").removeClass("is_show");
    $(this).children(".sub_gnb").addClass("is_show");
  });

    /* join checkbox */
    $("#allck").click(function(){
      if($("#allck").prop("checked")){
        $(".ck").prop("checked", true);
      }else{
        $(".ck").prop("checked", false);
      }
    })
});
