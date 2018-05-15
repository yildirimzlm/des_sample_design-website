$(document).ready(function () {
   $(window).scroll(function () {
       if($(window).scrollTop()>100){

           $(".text-block").style({
               display:'inline-flex'
           });

       }

   })
});

