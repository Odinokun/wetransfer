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
    }
  }

  $(document).ready(function () {
    asideView();
  });

  $(window).scroll(function () {
    asideView();
  });

  // end aside

};
