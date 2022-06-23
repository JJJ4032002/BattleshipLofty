const webpackCommon = require("./webpack.common");
const { merge } = require("webpack-merge");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const cssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
const terserPlugin = require("terser-webpack-plugin");

module.exports = merge(webpackCommon, {
	mode: "production",
	optimization: {
		minimizer: [
			new terserPlugin(),
			new cssMinimizerWebpackPlugin({
				minimizerOptions: {
					preset: [
						"default",
						{
							discardComments: { removeAll: true }
						}
					]
				}
			})
		]
	},
	plugins: [
		new miniCssExtractPlugin(),
	],
	module: {
		rules: [
			{
				test: /s[ca]ss$/i,
				use: [
					miniCssExtractPlugin.loader,
					"css-loader",
					"resolve-url-loader",
					{
						loader: "sass-loader",
						options: {
							sourceMap: true
						}
					}
				]
			},
			{
				test: /\.m?js$/i,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [["@babel/preset-env", { targets: "defaults" }]]
					}
				}
			}
		]
	}
});