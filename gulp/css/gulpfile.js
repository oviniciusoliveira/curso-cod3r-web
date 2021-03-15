const gulp = require('gulp')
const { series, dest, parallel } = require('gulp')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function transformacaoSASS() {
    return gulp.src('src/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({
            "uglyComments" : true
        }))
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('build/css'))
}

function copiarHtml() {
    return gulp.src('src/index.html')
        .pipe(dest('build')) 
}

exports.default = parallel(transformacaoSASS, copiarHtml)