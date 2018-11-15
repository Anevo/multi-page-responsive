// $(document).scroll(function(e){
//     e.preventDefault();
//     var scrollTop = $(document).scrollTop();
//     if (scrollTop > 0) {
//         $('.navbar').removeClass('navbar-static-top').addClass('navbar-fixed-top');
//     } else {
//         $('.navbar').removeClass('navbar-fixed-top').addClass('navbar-static-top');
//     }
// });

jQuery(window).bind('scroll', function () {
    if (jQuery(window).scrollTop() > 100) {
        jQuery('#navi').addClass('navbar-fixed-top').removeClass('sticky-top');
        jQuery('body').addClass('bodytopmargin').removeClass('bodynomargin');
    } else {
        jQuery('#navi').removeClass('navbar-fixed-top').addClass('sticky-top');
        jQuery('body').removeClass('bodytopmargin').addClass('bodynomargin');
    }
});