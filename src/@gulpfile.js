// instanciando módulos
var gulp = require('gulp');
var notify = require('gulp-notify');
var changed = require('gulp-changed');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');


gulp.task('sass', function() {
    return gulp.src('../wp-content/themes/atratis/assets/sass/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', notify.onError(function(error) {
            return 'Erro ao compilar CSS: ' + error.message;
        })))
        .pipe(postcss([autoprefixer]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('../wp-content/themes/atratis/build/css'))
        .pipe(notify({ message: 'CSS concluído', onLast: true }));
});


gulp.task('babel', function() {
    return gulp.src([



        '../wp-content/themes/atratis/assets/js/jquery-1.12.4.min.js',
        '../wp-content/themes/atratis/assets/js/popper.js',
        '../wp-content/themes/atratis/assets/js/owl.carousel.min.js',
        '../wp-content/themes/atratis/assets/js/bootstrap.min.js',
        '../wp-content/themes/atratis/assets/js/aos.js',
        '../wp-content/themes/atratis/assets/js/jquery-migrate-1.4.1.min.js',
        '../wp-content/themes/atratis/assets/js/touchTouch.jquery.js',
        '../wp-content/themes/atratis/assets/js/jquery.maskedinput.js',
        '../wp-content/themes/atratis/assets/js/modal-video.min.js',
        '../wp-content/themes/atratis/assets/js/jquery.chained.min.js',
        '../wp-content/themes/atratis/assets/js/sweetalert2.min.js',
        '../wp-content/themes/atratis/assets/js/site.js'
    ])


        .pipe(concat('scripts.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('../wp-content/themes/atratis/build/js'))
        .pipe(notify({ message: 'Scripts concluídos', onLast: true }));
});


gulp.task('images', function() {
    return gulp.src('../wp-content/themes/atratis/assets/images/**')
        .pipe(changed('../wp-content/themes/atratis/build/images'))
        .pipe(gulp.dest('../wp-content/themes/atratis/build/images'))
});


gulp.task('watch', ['sass', 'babel', 'images'], function() {
    gulp.watch('../wp-content/themes/atratis/assets/sass/**/*.scss', ['sass']);
    gulp.watch('../wp-content/themes/atratis/assets/js/**/*.js', ['babel']);
    gulp.watch('../wp-content/themes/atratis/assets/images/*', ['images']);
});

gulp.task('default', ['sass', 'babel', 'images', 'watch']);