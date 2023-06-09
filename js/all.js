$(document).ready(function () {
    $('.backtotop').click(function (e) { 
        $('html, body').animate({
          scrollTop : 0
        },800)
    });
    
    $('li, button').hover(function () {
            $(this).addClass('active');           
        }, function () {
            $(this).removeClass('active');
        }
    );

    var swiper = new Swiper(".mySwiper", {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
            renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
          },
        },
      });
});