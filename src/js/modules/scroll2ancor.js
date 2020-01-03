module.exports = function() {

  // begin scroll 2 ancor desktop menu
  $(function() {
    $('.menu__link[href*=\\#], .aside__logo[href*=\\#], .aside-nav__link[href*=\\#]').on("click", function(e){
       // e.preventDefault();
       var anchor = $(this);
       $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top - 0 + 'px'
       }, 800);
    });
    return false;
  });
  // end scroll 2 ancor desktop menu

};