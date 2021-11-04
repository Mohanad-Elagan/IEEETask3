
$(document).ready(function() {
       $(".menu-toggle").click(function() {
           $('nav').toggleClass('nav-hide')
       });

       $('a[href^="#"]').on('click', function(e) {
           e.preventDefault();
           var target = this.hash;
           var $target = $(target);
           $('html, body').animate({
             'scrollTop': $target.offset().top
           }, 900, 'swing', function() {
             window.location.hash = target;
           });
         });
          $(".show-more-btn").click(function () {
          $(".hidden-gallery").toggle("slow");
          });
   });

   var didScroll;
   var lastScrollTop = 0;
   var delta = 5;
   var navbarHeight = $('#MagicMenu').outerHeight();
   $(window).scroll(function(event){
       didScroll = true;
   });
   setInterval(function() {
       if (didScroll) {
           hasScrolled();
           didScroll = false;
       }
   }, 250);

   function hasScrolled() {
       var st = $(this).scrollTop();
       if(Math.abs(lastScrollTop - st) <= delta)
           return;

       if (st > lastScrollTop && st > navbarHeight){
           $('#MagicMenu').fadeOut(500);
       } else {
           if(st + $(window).height() < $(document).height()) {
               $('#MagicMenu').fadeIn(500);
           }
       }
       lastScrollTop = st;
   }