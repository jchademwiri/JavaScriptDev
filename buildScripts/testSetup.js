// this file isn't transpiled, so must use CommonJS and ES5

// Register babel to transpile before our tests run.
require("babel-register")();

//Disable Webpack features that mocha doesnt uderstand
require.extensions[".css"] = function() {};
