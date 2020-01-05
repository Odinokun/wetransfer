module.exports = function() {

  // begin 3 dots
  $(function () {
    var textLength = 50;
    var newsItemsChildren = $('.news__items').children();

    for (var i = 0; i < newsItemsChildren.length; i++) {
      var newsContent= $(newsItemsChildren[i]).find('.news-item__descr p');
      var newsText = newsContent.text();

      if(newsText.length > textLength){
        newsContent.text(newsText.slice(0, textLength) + ' ...');
      }
    }
  });
  // end 3 dots

  // begin 3 dots
  $(function () {
    var textLength = 50;
    var newsItemsChildren = $('.all-news__articles').children();

    for (var i = 0; i < newsItemsChildren.length; i++) {
      var newsContent= $(newsItemsChildren[i]).find('.news-item__descr p');
      var newsText = newsContent.text();

      if(newsText.length > textLength){
        newsContent.text(newsText.slice(0, textLength) + ' ...');
      }
    }
  });
  // end 3 dots

};