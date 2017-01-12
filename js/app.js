$(document).ready(function () {
  $('[data-toggle="offcanvas"]').click(function () {
    $('.row-offcanvas').toggleClass('active');
  });
  $('.nav-item').click(function(e){
    $('.nav-link').removeClass('active');
    $(this).find('.nav-link').addClass('active');
    if ($(window).width() < 768){
      $('[data-toggle="offcanvas"]').click();
    }
  });
});

var scrollTimer = null;
$(window).scroll(function () {
    if (scrollTimer) {
        clearTimeout(scrollTimer);   // clear any previous pending timer
    }
    scrollTimer = setTimeout(handleScroll, 100);   // set new timer
});

var handleScroll = function(){
  var topOffset = $('#top').offset();
  if ($(window).scrollTop() > topOffset.top+140){
    $('.sidebar-offcanvas').addClass('sticky');
    $('.main-content-column').removeClass('pull-md-3');
  } else {
    $('.sidebar-offcanvas').removeClass('sticky');
    $('.main-content-column').addClass('pull-md-3');
  };
};

var currentDate = new Date(), currentYear = currentDate.getFullYear();
$('.copyright-year').html(currentYear);
