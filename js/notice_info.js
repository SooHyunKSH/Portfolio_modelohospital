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
});
