var path = require("path");

module.exports = {
	mode: "development",
	context: path.join(__dirname, "./"),
	entry: "./app/index.jsx",
	output: {
		path: path.join(__dirname, "public"),
		filename: "bundle.js"
	},
	devtool: 'cheap-module-eval-source-map',
	resolve: {
		extensions: [".js", ".jsx"]
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: "babel-loader",
				exclude: /node_modules/,
				include: path.join(__dirname, "app"),
				options: {
					presets: ["@babel/react"]
				}
			},
		]
	},
	devServer: {
		contentBase: "./public",
		port: 4001,
		// compress: true,
	}
};
