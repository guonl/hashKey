let webpack = require('webpack');
let path =require("path");
console.log("this is page")
module.exports = {
    resolve: {
        alias: {
            "web-hashKey-imgs": `${path.resolve(__dirname, "static/imgs")}`,
            "web-hashKey-routes": `${path.resolve(__dirname, "routes")}`,
            "web-hashKey-mobx": `${path.resolve(__dirname, "mobx")}`            
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
        })
    ]
}