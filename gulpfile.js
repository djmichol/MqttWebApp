var gulp = require('gulp');
var del = require('del');
var uglify = require('gulp-uglify');
var usemin = require('gulp-usemin');
var minifyHtml = require('gulp-minify-html');
var uglifycss = require('gulp-uglifycss');
var rev = require('gulp-rev');

gulp.task('clean', function (cb) {
    del.sync(['src/dist/**/*'], cb);
});

gulp.task('usemin', function () {
    return gulp.src('src/webapp/*.html')
        .pipe(usemin({
            html: [minifyHtml({empty: true, conditionals:true})],
            js: [uglify(), 'concat', rev()],
            appjs: [uglify({ mangle: false }), 'concat', rev()],
            css: [uglifycss({"maxLineLen": 120,"uglyComments": true})]
        }))
        .pipe(gulp.dest('src/dist/'));
});

gulp.task('copyHtml', function(){
    return gulp.src('src/webapp/js/directives/html/*.html')
        .pipe(gulp.dest('src/dist/view/'));
});

gulp.task('copyImg', function(){
    return gulp.src('src/webapp/img/*')
        .pipe(gulp.dest('src/dist/img/'));
});

gulp.task('copyPages', function(){
    return gulp.src('src/webapp/pages/*')
        .pipe(gulp.dest('src/dist/view/'));
});

gulp.task('build', function () {
    gulp.start('clean');
    gulp.start('copyHtml');
    gulp.start('copyImg');
    gulp.start('copyPages');
    gulp.start('usemin');
});