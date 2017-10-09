
// Improt Modules
var gulp = require('gulp');
var del = require('del');
var url = require('url');
var fs = require('fs');
var watch = require('gulp-watch');
var sequence = require('gulp-sequence');
var webserver = require('gulp-webserver');
var typescript = require('gulp-typescript');
var tscConfig = require('./tsconfig.json');

// Define Paths
var path = {
  lib: [
    { dist: 'lib/@angular', src: 'node_modules/@angular/**' },
    { dist: 'lib/angular2-in-memory-web-api', src: 'node_modules/angular2-in-memory-web-api/**' },
    { dist: 'lib/rxjs', src: 'node_modules/rxjs/**' },
  ],
  libjs: [
    { dist: 'lib/zone', src: 'node_modules/zone.js/dist/zone.js' },
    { dist: 'lib/reflect-metadata', src: 'node_modules/reflect-metadata/Reflect.js' },
    { dist: 'lib/reflect-metadata', src: 'node_modules/reflect-metadata/Reflect.js.map' },
    { dist: 'lib/system', src: 'node_modules/systemjs/dist/system.src.js' },
  ],
  libcss: [],
  libfonts: [],
  index: 'src/index.html',
  html: 'src/components/**/*.html',
  css: 'src/components/**/*.css',
  ts: 'src/**/*.ts',
  dist: 'dist',
  distapp: 'dist/components',
  distlib: 'dist/lib',
  distfonts: 'dist/fonts',
  distImg:'dist/assets/img'
};

// Clean the Contents of the Distribution Directory
gulp.task('clean', function () {
  return del(path.dist);
});

// Copy Index
gulp.task('copy:index', function () {
  return gulp.src(path.index)
    .pipe(gulp.dest(path.dist));
});

// Copy Html
gulp.task('copy:html', function () {
  return gulp.src(path.html)
    .pipe(gulp.dest(path.distapp));
});

// Copy Css
gulp.task('copy:css', function () {
  return gulp.src(path.css)
    .pipe(gulp.dest(path.distapp));
});

// Copy fonts from a module outside of our project (like Bower)
gulp.task('copyImages', function() {
	gulp.src('./src/assets/img/**/*')
	.pipe(gulp.dest(path.distImg));
});

// copy Libs
gulp.task('copy:lib', function () {
  path.lib.forEach(function (val, indx) {
    gulp.src(val.src)
      .pipe(gulp.dest(path.dist + '/' + val.dist));
  });
});
gulp.task('copy:libjs', function () {
  path.libjs.forEach(function (val, indx) {
    gulp.src(val.src)
      .pipe(gulp.dest(path.dist + '/' + val.dist));
  });
});
gulp.task('copy:libcss', function () {
  return gulp.src(path.libcss)
    .pipe(gulp.dest(path.distlib));
});

// copy Fonts
gulp.task('copy:fonts', function () {
  return gulp.src(path.libfonts)
    .pipe(gulp.dest(path.distfonts));
});

// Transpile angular2-localstorage
// gulp.task('transpile-angular2-localstorage', function () {
//   return gulp.src('node_modules/angular2-localstorage')
//     .pipe(typescript(tscConfig.compilerOptions))
//     .pipe(gulp.dest('node_modules/angular2-localstorage'));
// })

// TypeScript Transpile
gulp.task('transpile', function () {
  return gulp
    .src(path.ts)
    .pipe(typescript(tscConfig.compilerOptions))
    .pipe(gulp.dest(path.distapp));
});

// Build Project
gulp.task('build', sequence('clean', 'copy:index', 'copy:html', 'copy:css', 'copy:lib', 'copy:libjs', 'copy:libcss', 'copy:fonts','copyImages', 'transpile'));

// Default Task
gulp.task('default', sequence('build', ['serve', 'watch']));

// Serve Task
gulp.task('serve', function () {
  gulp.src('dist')
    .pipe(webserver({
      host: process.env.IP || 'localhost',
      post: process.env.PORT || 8000,
      livereload: true,
      open: true,
      directoryListing: {
        enable: true,
        path: '/index.html'
      },
      middleware: function (req, res, next) {
        var fileName = url.parse(req.url);
        fileName = fileName.href.split(fileName.search).join("");
        var fileExists = fs.existsSync("./dist/" + fileName);
        if (!fileExists) {
          req.url = "/index.html";
        }
        return next();
      }
    }));
});

// Watch Task
gulp.task('watch', ['watchts', 'watchcss', 'watchhtml', 'watchindex']);

// Watch TypeScript
gulp.task('watchts', function () {
  gulp.watch(path.ts, ['transpile'])
  // return watch(path.ts)
  //   .pipe(typescript(tscConfig.compilerOptions))
  //   .pipe(gulp.dest(path.distapp));
});

// Watch Index
gulp.task('watchindex', function () {
  return watch(path.index)
    .pipe(gulp.dest(path.dist));
});

// Watch Html
gulp.task('watchhtml', function () {
  return watch(path.html)
    .pipe(gulp.dest(path.distapp));
});

// Watch CSS
gulp.task('watchcss', function () {
  return watch(path.css)
    .pipe(gulp.dest(path.distapp));
});