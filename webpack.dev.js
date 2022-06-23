const webpackCommon = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(webpackCommon, {
	mode: "development",
	devtool: "inline-source-map",
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					"style-loader",
					"css-loader",
					"resolve-url-loader",
					{
						loader: "sass-loader",
						options: {
							sourceMap: true
						}
					}
				]
			}
		]
	}
});