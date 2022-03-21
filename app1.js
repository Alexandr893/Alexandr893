// ЯКОРНЫЕ ССЫЛКИ
$(function(){
    $("[data-scroll]").on("click",function(event){
        event.preventDefault();
        notid = $(this).data('scroll');
        blockoffset= $(notid).offset().top;
    


        $("html,body").animate({
            
                 scrollTop: blockoffset-30
                  },700);
            });

    });

    