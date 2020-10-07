const autoprefixer = require("autoprefixer");

const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./**/*.html", "./static/css/*.scss"]
});

const cssnano = require("cssnano")({
  preset: "default",
});

module.exports = {
  plugins: [
    require("autoprefixer"),
    ...(process.env.NODE_ENV === "production" ? [cssnano, purgecss] : []),
  ],
};
