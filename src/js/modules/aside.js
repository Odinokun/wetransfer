module.exports = function () {

  // begin aside

  // В каком положении полосы прокрутки начинать показ бокового меню
  var top_show = 300;

  function asideView() {
    if ($(this).scrollTop() > top_show) {
      $('#aside').addClass('active');
    }
    else {
      $('#aside').removeClass('active');
      $('#aside').removeClass('open');
      $('#aside__burger').removeClass('open');
    }
  }

  $(document).ready(function () {
    asideView();
  });

  $(window).scroll(function () {
    asideView();
  });

  // end aside

  // begin aside menu
  $('#aside__burger, .aside-nav__item, .main').on('click', function () {
    $('#aside').toggleClass('open');
    $('#aside__burger').toggleClass('open');
  });
  $('.main').on('click', function () {
    $('#aside').removeClass('open');
    $('#aside__burger').removeClass('open');
  });
  // end aside menu

};
