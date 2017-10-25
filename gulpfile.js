const gulp = require('gulp');
const babel = require('gulp-babel');
const browserSync = require('browser-sync');

gulp.task('babel', () => {
  gulp.src('src/app.jsx')
    .pipe(babel({
      presets: ['env', 'react']
    }))
    .pipe(gulp.dest('public/scripts'))
});

gulp.task('serve', () => {
  browserSync({
    server: 'public'
  });
  gulp.watch('public/*.html', ['reload']);
  gulp.watch('public/scripts/*.js', ['reload']);
  gulp.watch('src/app.jsx', ['babel']);
});

gulp.task('reload', () => {
  browserSync.reload();
});

gulp.task('default', ['serve']);
