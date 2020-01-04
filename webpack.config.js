var path = require("path");

const es6SourcePath = `${__dirname}/public/javascripts`;
const outputPath = `${__dirname}/public/dist`;

module.exports = {
	mode: "development",
	context: __dirname,
	// entry: "./app/index.jsx",
	entry: `${es6SourcePath}/index.jsx`,
	output: {
        // path: path.join(__dirname, "public"),
        path: outputPath,
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
				// include: path.join(__dirname, "app"),
				include: es6SourcePath,
				options: {
					presets: ["@babel/react"]
				}
			},
		]
    },
	devServer: {
		// contentBase: "./public",
		contentBase: outputPath,
		port: 4001,
		// compress: true,
	}
};
