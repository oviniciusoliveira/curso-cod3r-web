const gulp = require("gulp");
const webserver = require("gulp-webserver");
const watch = require("gulp-watch");

function servidor() {
  return gulp.src("build").pipe(
    webserver({
      port: 8080,
      open: true,
      livereload: true,
    })
  );
}

function monitorarArquivos(cb) {
  watch("src/paginas/inicio.html", () => gulp.series("appHTML")());
  watch("src/**/*.scss", () => gulp.series("appCSS")());
  watch("src/assets/js/navegacao.js", () => gulp.series("appJS")());
  watch("src/assets/imgs/**/*.*", () => gulp.series("appIMG")());
  return cb();
}

module.exports = {
  monitorarArquivos,
  servidor,
};
