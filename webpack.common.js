const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const dotenv = require("dotenv");

module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"),
		assetModuleFilename: "assets/[name][ext]",
		clean: true
	},
	plugins: [
		new HtmlWebpackPlugin(
			{
				title: "Battleship!",
				meta: {
					viewport: "width=device-width, initial-scale=1, shrink-to-fit=no"
				}
			}
		),
		new webpack.DefinePlugin({
			"process.env": JSON.stringify(dotenv.config().parsed)
		})
	],
	module: {
		rules: [
			{
				test: /\.(svg|png|gif|webp|jpe?g)/i,
				type: "asset/resource"
			}
		]
	}
}