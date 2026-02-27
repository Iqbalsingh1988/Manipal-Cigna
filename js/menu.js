(function ($) {


    //   if ($(window).width() > "992") {
    //     $(".menu_dropdown").on("mouseenter", function (e) {
    //         e.stopImmediatePropagation();
    //         e.stopPropagation();
    //         e.preventDefault();
    //         $(".drop_down_inner > ul > li:first-child").addClass("active_item");
    //     });


    //     $(".drop_down_inner > ul > li").mouseenter(function (e) {
    //         e.stopImmediatePropagation();
    //         e.stopPropagation();
    //         e.preventDefault();
    //         $(this).siblings().removeClass("active_item");
    //         $(this).addClass("active_item");
    //     });

        
    //     $(".drop_down_inner > ul > li").mouseleave(function (e) {
    //         e.stopImmediatePropagation();
    //         e.stopPropagation();
    //         e.preventDefault();
    //         $(this).removeClass("active_item");
    //         $(".drop_down_inner > ul > li:first-child").addClass("active_item");
    //     });
        

    // }
  

         $(".header_menu_toggle").click(function (e) {
            e.preventDefault();
            e.stopPropagation();
            $(".sidebar_menu_main").toggleClass('active');
          });

          $('.cross_sidebar').on('click',function() {
            $(this).parent().parent('.sidebar_menu_main').removeClass('active');
          });






          $('.menu_button').on('click',function() {
            $(this).parent("li").toggleClass('active');
            $(this).parent("li").siblings().removeClass('active');
          });


            $('.menu_button').on('click', function() {
                $(this).parents().eq(2).toggleClass('active'); 
                $(this).parents().eq(2).siblings().removeClass('active'); 
            });

     


            // $(".menu_box_part").click(function(){
            //     $(".left_mega_main ul li").removeClass("active"); 
            // });

         
            $(".left_mega_main").click(function(){
                $(".menu_box_part ul li").removeClass("active"); 
            });


 })(jQuery);