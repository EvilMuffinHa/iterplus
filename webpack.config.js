const path = require("path");

module.exports = {
    entry: "./dest/src/index.js",
    output: {
        path: path.join(__dirname, "bundle"),
        filename: "index.min.js",
        library: "iterplusLib",
        libraryTarget: "var"
    },
    mode: "production"
};
