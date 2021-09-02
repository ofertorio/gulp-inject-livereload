# gulp-inject-livereload
A gulp stream / task to inject livereload-js into Javascript files.

---

## Installation
Use your favorite package manager to install gulp-inject-livereload.
```
yarn add gulp-inject-livereload -D
```

```
npm i gulp-inject-livereload --save-dev
```

## But why?
There's a lot of gulp plugins that do the same thing, but none of them injects into *javascript*, they usually inject into *html*.

## How to use
```javascript
const injector = require("gulp-inject-livereload");

// Pipe it to the livereload injector
gulp.task("example", () => {
    gulp.src("index.js")
        .pipe(injector())
        .pipe(gulp.dest("build"));
```

## Options
| Option   | Description                                                                         | Type              |
|----------|-------------------------------------------------------------------------------------|-------------------|
| port     | The livereload server port                                                          | number            |
| host     | The livereload server host                                                          | string            |
| protocol | The livereload server protocol                                                      | "http" \| "https" |
| inject   | Defines if it ill be injected or not; useful for injecting only when in debug mode. | boolean           |