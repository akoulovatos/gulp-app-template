// animate css
$(document).ready(function() {
  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }
  $(window).scroll(function() {
    $('.scroll-animations .animated').each(function() {
      if (isScrolledIntoView(this) === true) {
        $(this).addClass('fadeIn');
      }
    });
  });
});

// smooth scroll
$('.scroll-link').click(function() {
  var sectionTo = $(this).attr('href');
  $('html, body').animate({
    scrollTop: $(sectionTo).offset().top - 50
}, 1100);
console.log('test');
});

$(document).ready(function() {
  $('.ajax-link').click(function(event) {
      var clickedLink = $(this).attr('id');
      location.hash = clickedLink;
  })
})

