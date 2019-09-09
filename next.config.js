require("dotenv").config();

const path = require("path");
const Dotenv = require("dotenv-webpack");

const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");

/* Without CSS Modules, with PostCSS */
module.exports = withSass(
  withCSS({
    // cssModules: true,
    webpack: config => {
      config.plugins = config.plugins || [];

      config.plugins = [
        ...config.plugins,

        // Read the .env file
        new Dotenv({
          path: path.join(__dirname, ".env"),
          systemvars: true
        })
      ];
      return config;
    }
  })
);
