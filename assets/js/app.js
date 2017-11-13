$(document).ready(function () {
    $('.slider')
    .on('init', function(slick) {
        console.log('fired!');
        $('.slider').fadeIn(3000);
    })
    .slick({
      autoplay: true,
      autoplaySpeed: 2000,
      fade: true,
      cssEase: 'linear'
    });
});
