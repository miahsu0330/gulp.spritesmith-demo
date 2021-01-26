const { src, dest, series, parallel } = require("gulp");
var spritesmith = require("gulp.spritesmith");

function config(fileType) {
  var cssName = "";
  if (fileType === "css") {
    cssName = "sprite.css";
  }
  if (fileType === "scss") {
    cssName = "_sprite.scss";
  }
  return {
    retinaSrcFilter: ["./original-images/*@2x.png"],
    imgName: "sprite.png",
    retinaImgName: "sprite@2x.png",
    imgPath: "../images/sprite.png", // file url:images
    retinaImgPath: "../images/sprite@2x.png", // same imgPath
    cssName: cssName,
    algorithm: "binary-tree", // binary-tree, left-right, top-down
    padding: 1,
  };
}

function spriteSCSS() {
  return src("./original-images/*.png")
    .pipe(spritesmith(config("scss")))
    .pipe(dest("./sprite"));
}

function spriteCSS() {
  return src("./original-images/*.png")
    .pipe(spritesmith(config("css")))
    .pipe(dest("./sprite"));
}

exports.spriteSCSS = spriteSCSS;
exports.spriteCSS = spriteCSS;
exports.default = parallel(spriteSCSS, spriteCSS);
