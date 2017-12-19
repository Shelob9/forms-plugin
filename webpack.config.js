
const path = require("path");
const fs = require("fs");
const webpack = require( 'webpack' );
const BLOCKS = require('./blocks.json');

const ENTRIES = [];
Object.keys( BLOCKS.blocks ).forEach( block => {ENTRIES.push(BLOCKS.blocks[block].entry);});

module.exports = {
	entry: ENTRIES,
    output: {
        path: path.join(__dirname, "client/blocks/dist"),
        filename: "[name].js"
    },
	module: {
		loaders: [
			{
				test: /.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
		],
	},
    plugins: [
        new webpack.DefinePlugin({
            VERSION: JSON.stringify(require("./package.json").version)
        })
    ]
};
