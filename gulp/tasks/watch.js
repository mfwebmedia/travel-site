var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSnyc = require('browser-sync').create();

gulp.task('watch', function() {

    browserSnyc.init({
        notify: false,
        server: {
         baseDir: "app"
        }
    });

    watch('./app/index.html', function() {
       browserSnyc.reload();
    });

    watch('./app/assets/styles/**/*.css', function() {
        gulp.start('cssInject');
    })

});

gulp.task('cssInject', ['styles'], function() {
    return gulp.src('./app/temp/styles/styles.css')
        .pipe(browserSnyc.stream());
});
