var gulp 		= require('gulp');
var browserSync	= require('browser-sync');

gulp.task('watch', ['browserSync'], function(){
	gulp.watch('app/css/style.css', browserSync.reload);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('browserSync', function(){
	browserSync({
		server:{
			baseDir: './app',
			index: "index.html"
		},
		browser: 'firefox'
	});
});

gulp.task('default', ['browserSync', 'watch'], function(){

});