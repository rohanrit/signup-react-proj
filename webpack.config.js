const path = require("path");

module.exports = {
  // Entry point and other configuration options...
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  devServer: {
    static: path.join(__dirname, "public"),
    setupMiddlewares: function (middlewares, devServer) {
      // Example of middleware that logs requests
      middlewares.unshift({
        name: "log-requests",
        path: "/logs",
        middleware: (req, res, next) => {
          console.log("Request:", req.method, req.url);
          next();
        },
      });

      return middlewares;
    },
    // Other devServer options...
  },
  // Other Webpack configuration options...
};
