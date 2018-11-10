const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, options) => {
    // Javascript entry file
    return { 
        entry: './src/index.js',
        // Where our compiled code will go
        output: {
            path: path.join(__dirname, '/dist'),
            filename: 'index_bundle.js',
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                    }
                }
            ]
        },
        plugins: [
            // Specify index.html as template
            new HtmlWebpackPlugin({
                template: './src/public/index.html'
            })
        ]
    }   
}