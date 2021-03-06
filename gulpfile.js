var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('watch', function() {
	browserSync.init({
		server: {
			baseDir: './'
		}
	});
	gulp.watch(['*.html', 'js/*.js']).on('change', browserSync.reload)
});