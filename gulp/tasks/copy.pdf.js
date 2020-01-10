'use strict';

module.exports = function() {

  $.gulp.task('copy:pdf', function() {
    return $.gulp.src('./src/pdf/**/*.*')
      .pipe($.gulp.dest($.config.root + '/assets/pdf'));
  });

};