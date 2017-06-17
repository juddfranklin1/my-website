function animationSpeedByDistance (currentOffset,destinationOffset){
  return Math.abs(currentOffset-destinationOffset) < 1000 ? 1200: 2400;
}

$(document).ready(function () {

  $('[data-toggle="offcanvas"]').click(function () {
    $('.row-offcanvas').toggleClass('active');
    $('.section-content').toggleClass('pull-xs-6');
  });

  $('.nav-item').click(function(e){
    $('.nav-link').removeClass('active');
    $(this).find('.nav-link').addClass('active');
    if ($(window).width() < 768){
      $('[data-toggle="offcanvas"]').click();
    }
  });

  $('a[href^="#"]').click(function(e){
    var destination = $(this)[0].hash.substring(1);
    var destinationOffset = $(this).offset().top;
    var currentOffset = $(window).scrollTop();

    $('html,body').animate({
      scrollTop: $("#"+destination).offset().top - 60
    }, animationSpeedByDistance(currentOffset,destinationOffset),'swing',function(){
        $('article').removeClass('js-targeted');
        $('article#' + destination).addClass('js-targeted');
    });
    return false;
  });
});

var scrollTimer = null;
$(window).scroll(function () {
    if (scrollTimer) {
        clearTimeout(scrollTimer);   // clear any previous pending timer
    }
    scrollTimer = setTimeout(handleScroll, 5);   // set new timer
});

var handleScroll = function(){
  /* potentially use this https://github.com/leafo/sticky-kit/issues */
  var topOffset = $('#top').offset();
  if ($(window).scrollTop() > $('.banner-block').outerHeight() + 230){
    /* Toggle on "transition" class
     * animate via css3 transitions
     * then callback that toggles "transition" off and "sticky" on.
     * pull-md-3 toggle needs to happen asyncronously,
     * because it changes the layout.
     */
    $('.sidebar-offcanvas').addClass('sticky');
    $('.main-content-column').removeClass('pull-md-3');
  } else {
    /* Toggle on "transition" class
     * animate via css3 transitions
     * then callback that toggles "transition" and "sticky" off.
     * pull-md-3 toggle needs to happen asyncronously,
     * because it changes the layout.
     */
    $('.sidebar-offcanvas').removeClass('sticky');
    $('.main-content-column').addClass('pull-md-3');
  };
};

var currentDate = new Date(), currentYear = currentDate.getFullYear();
$('.copyright-year').html(currentYear);
