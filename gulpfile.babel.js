'use strict';

//Load node module
import gulp            from "gulp"
import pug             from "gulp-pug"
import pretty          from "gulp-pretty-html"
import server          from "gulp-webserver"
// import server          from 'browser-sync'
import del             from "del"
import autoprefixer    from "gulp-autoprefixer"
import sourcemaps      from 'gulp-sourcemaps'
import bro             from "gulp-bro"
import babelify        from "babelify"
import concat          from "gulp-concat"

const sass = require('gulp-sass')(require('sass'))

//directory
const root = 'dist';
const paths = {
  html: {
    src: "src/*.pug",
    dist: root,
    watch: "src/**/*.pug"
  },
  font: {
    src: "src/fonts", 
    dist: root + "/assets/fonts"
  },
  img: {
    src: "src/images/**/*.{png,jpg,jpeg,gif,svg}",
    dist: root + "/assets/images"
  },
  scss: {
    src: "src/stylesheets/*.scss",
    dist: root + "/assets/",
    watch: "src/stylesheets/**/*.scss"
  },
  js: {
    src: "src/scripts",
    dist: root + "/assets/",
    watch: "src/scripts/*.js"
  }
}

/* tasks */
//fonts
const fonts = () =>
  gulp
  .src(paths.font.src + '/*.{ttf,woff,woff2}')
  .pipe(gulp.dest(paths.font.dist))

//images
const imaging = () => 
  gulp
  .src(paths.img.src)
  // .pipe(image())
  .pipe(gulp.dest(paths.img.dist))

//htmls
const htmls = () => 
  gulp
  .src(paths.html.src)
  .pipe(pug())
  .pipe(pretty())
  .pipe(gulp.dest(paths.html.dist))

//scss
const styles = () => 
  gulp
  .src(paths.scss.src)
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({
    "overrideBrowserslist": ["last 2 versions"]
  }))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest(paths.scss.dist))

// 배포용 스타일 시트 소스맵 삭제
const stylesDeploy = () => 
  gulp
  .src(paths.scss.src)
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({
    "overrideBrowserslist": ["last 2 versions"]
  }))
  .pipe(gulp.dest(paths.scss.dist))
  
//script
const js = () => 
  gulp
  .src([
    paths.js.src + '/*.js',
    '!' + paths.js.src + '/_*.js'
  ])
  .pipe(bro({
    transform: [
      babelify.configure({ presets: ['@babel/preset-env'] }),
      [ 'uglifyify', { global: true } ]
    ]
  }))
  .pipe(concat('ui.js'))
  .pipe(gulp.dest(paths.js.dist))

//webserver
const serving = () => 
  gulp
  .src(root)
  .pipe(server({
    livereload: true,
    open: true,
    port: 8800
  }))
  // server.init({
  //     server:{
  //       baseDir :root
  //   }
  // })

//clean
const clean = () => del([root])

//watch
const watch = () => {
  gulp.watch([paths.html.src, paths.html.watch], htmls)
  gulp.watch(paths.img.src, imaging)
  gulp.watch([paths.scss.src, paths.scss.watch], styles)
  gulp.watch(paths.js.watch, js)
}

//running tasks
const resourece = gulp.series([clean, fonts])
const assets = gulp.parallel([htmls, styles, imaging, js])
const publish = gulp.parallel([htmls, stylesDeploy, imaging, js])
const live = gulp.parallel([serving, watch])

exports.default = gulp.series([resourece, assets, live])
export const build = gulp.series([resourece, publish])
export const deploy = gulp.series([resourece, publish])
