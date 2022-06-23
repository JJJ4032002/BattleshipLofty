const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
		)
	],
	module: {
		rules: [
			{
				test: /\.(svg|png|gif|webp|jpe?g)/i,
				type: "asset/resource"
			},
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							['@babel/preset-env', { targets: "defaults" }],
							['env', { modules: false }]
						],
						plugins: ["syntax-dynamic-import"],
						env: {
							test: {
								plugins: [
									"transform-es2015-modules-commonjs",
									"dynamic-import-node"
								]
							}
						}
					}
				}
			}
		]
	}
}