module.exports = function () {

  // begin Slick slider

  $('.slider-top').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-bottom',
    draggable: false,
    swipe:false,
    swipeToSlide:false,
    touchMove:false
  });

  $('.slider-bottom').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-top',
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 941,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 761,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 556,
        settings: {
          centerMode: false,
          slidesToShow: 2
        }
      }
    ]
  });

  $('.channel-slider').slick({
    arrows: false,
    dots: true
  });

  // end Slick slider

};