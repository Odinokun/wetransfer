module.exports = function() {

  // begin Slick slider

  $('.slider-top').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-bottom',
    draggable: false
  });

  $('.slider-bottom').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-top',
    centerMode: true,
    focusOnSelect: true
  });

  $('.channel-slider').slick({
    arrows: false,
    dots: true
  });

  // end Slick slider

};