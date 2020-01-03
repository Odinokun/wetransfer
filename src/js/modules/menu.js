module.exports = function () {

  // begin menu & burger
  $('#burger, .menu__link').on('click', function () {
    $('#burger, #menu__list').toggleClass('active');
    $('body').toggleClass('no-scroll');
  });
  // end menu & burger

};