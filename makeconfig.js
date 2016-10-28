var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var AppCachePlugin = require('appcache-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var StaticSitePlugin = require('react-static-webpack-plugin');

module.exports = function(options){
	var entry, jsLoaders, plugins;

	if (options.prod) {
		entry = [
			path.resolve(__dirname, 'src/index.js')
		];
		plugins = [
			new webpack.optimize.OccurrenceOrderPlugin(),
			new webpack.optimize.UglifyJsPlugin({
				screw_ie8: true,
				compress: {
					warnings: false
				}
			}),
            new ExtractTextPlugin("src/css/style.css", {
                allChunks: false
            }),
			new webpack.DefinePlugin({
				"process.env": {
					NODE_ENV: JSON.stringify('production')
				}
			}),
          new StaticSitePlugin({
            src: 'app',
            stylesheet: 'src/css/style.css',
            favicon: '/favicon.ico',
            template: path.join(__dirname, 'src/template/template.js')
          })
		]

        plugins.push(new AppCachePlugin({
            exclude: ['.htaccess']
        }));
        return {
            entry: {app: entry},
            output: {
                path: path.join(__dirname, 'dist'),
                publicPath: '/portal/',
                filename: 'static/bundle.js',
                libraryTarget: 'umd'
            },
            module: {
                noParse: [/autoit.js/],
                loaders: [
                    {
                        test: /\.(es6|js|jsx)$/,
                        loader: 'babel',
                        query: {compact: false},
                        exclude: /node_modules/
                    },
                    {
                        test: /\.scss$/,
                        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
                    },
                    {
                        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                        loader: "url?limit=10000&mimetype=application/octet-stream"
                    },
                    {
                        test: /\.(jpg|jpeg|gif|png)$/,
                        loader:'url-loader?limit=10000',
                        exclude: /node_modules/
                    },
                    {
                        test: /\.(json|eot|woff|woff2|svg)(\?\S*)?$/,
                        loader: "file-loader?limit=10000&mimetype=image&name=[path][name].[ext]"
                    }
                ]
            },
            plugins: plugins,
            target: "web", // Make web variables accessible to webpack, e.g. window
            stats: false, // Don't show stats in the console
            progress: true
            // quiet: true
        }

		} else {
			entry = [
				'webpack-dev-server/client?http://0.0.0.0:3000/',
				'webpack/hot/only-dev-server',
				path.resolve(__dirname, 'src/index.js')
			];

			plugins = [
                new ExtractTextPlugin("src/css/style.css", {
                    allChunks: false
                }),
				new webpack.HotModuleReplacementPlugin(),
				new HtmlWebpackPlugin({
					template: 'src/template/template.html',
					inject: true
				}),
			]

        plugins.push(new AppCachePlugin({
            exclude: ['.htaccess']
        }));
        return {
            entry: {app: entry},
            output: {
                path: path.join(__dirname, 'dist'),
                publicPath: '/',
                filename: 'static/bundle.js',
                libraryTarget: 'umd'
            },
            module: {
                noParse: [/autoit.js/],
                loaders: [
                    {
                        test: /\.(es6|js|jsx)$/,
                        loader: 'babel',
                        query: {compact: false},
                        exclude: /node_modules/
                    },
                    {
                        test: /\.scss$/,
                        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
                    },
                    {
                        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                        loader: "url?limit=10000&mimetype=application/octet-stream"
                    },
                    {
                        test: /\.(jpg|jpeg|gif|png)$/,
                        loader:'url-loader?limit=10000',
                        exclude: /node_modules/
                    },
                    {
                        test: /\.(json|eot|woff|woff2|svg)(\?\S*)?$/,
                        loader: "file-loader?limit=10000&mimetype=image&name=[path][name].[ext]"
                    }
                ]
            },
            plugins: plugins,
            target: "web", // Make web variables accessible to webpack, e.g. window
            stats: false, // Don't show stats in the console
            progress: true
            // quiet: true
        }
    }
}
