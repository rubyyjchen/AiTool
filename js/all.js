$(document).ready(function () {
    $('#scrollToTop').click(function (e) { 
        $('html, body').animate({
          scrollTop : 0
        },800)
    });
    
    $('li').hover(function () {
            $(this).addClass('active');           
        }, function () {
            $(this).removeClass('active');
        }
    );
});
