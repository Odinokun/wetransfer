module.exports = function () {

  // begin menu & burger
  $('#burger').on('click', function () {
    $('#burger, #menu__list').toggleClass('active');
    $('body').toggleClass('no-scroll');
  });

  $('.menu__link').on('click', function () {
    $('#burger, #menu__list').toggleClass('active');
  });
  // end menu & burger

};