const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, options) => {
    // Javascript entry file
    return { 
        entry: './src/index.js',
        devServer: {
            port: 3000,
            // Allow for refreshes
            historyApiFallback: true,
        },
        // Where our compiled code will go
        output: {
            path: path.join(__dirname, '/dist'),
            filename: 'index_bundle.js',
            publicPath: "/",
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                    }
                },
                {
                    test: /\.css$/,
                    // Puts styles in the <head></head> - Use different set up for stylesheet
                    use: ['style-loader', 'css-loader'],   
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