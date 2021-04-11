const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin');

// We need Nodes fs module to read directory contents
const fs = require('fs')

//product charts of the education line  
var entry1 = [
    'CommingSoon',
    'about',
    'publications',
    'workGroup-Sciences',
    'workGroup-Engineers',
    'future-Tech',
    'brochure11',
    'brochure12',
    'brochure21',
    'brochure22',
  ];
   // Call our function on our views directory.
var entryHtmlPlugins = entry1.map(function (entryName) {
    return new HtmlWebpackPlugin({
      filename: entryName + '.html',
      template: __dirname + `/src/raw-pages/${entryName}.html`,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        conservativeCollapse: true
      },
    })
  });
  
 

module.exports = {
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        // publicPath: '/dist'     module loadding exceptions
    },
    mode: 'development',
    devtool: 'eval-cheap-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude:path.resolve(__dirname, "node_modules"),
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [      "@babel/react" , 
                                            "@babel/env"
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.(scss|css)$/,
                use: [
                  MiniCssExtractPlugin.loader,
                  {
                    loader: "css-loader",
                    options: {
                      modules: false,
                      sourceMap: true,
                      importLoaders: 2
                    },
                  },
                  "sass-loader"
                ]
            },
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'img/',
                            publicPath: 'img/'
                        }
                    }
                ]
            }
    
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "style.css",
            chunkFilename: "[name].css"
        }),
        new CopyWebpackPlugin( {
            patterns: [ 
                { from: 'src/img', to: 'images',toType:"dir", force: true },
                { from: 'src/sitemap.xml', to: 'sitemap.xml', toType:"file", force: true },
            ]
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                conservativeCollapse: true
              },
        }),
        new WorkboxPlugin.GenerateSW({
        // these options encourage the ServiceWorkers to get in there fast 
        // and not allow any straggling "old" SWs to hang around
        clientsClaim: true,
        skipWaiting: true,
        }),
        new CleanWebpackPlugin(
            {
                cleanAfterEveryBuildPatterns: ['dist']
            }
        )
    ].concat(entryHtmlPlugins)
};