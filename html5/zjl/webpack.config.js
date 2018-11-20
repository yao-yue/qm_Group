const path = require('path')
// ndoe common.js es6
module.exports = {
    //入口
    entry: './src/main.js',
    output: {
        // 打包,
        filename: 'bundle.js',
        path: path.resolve(__dirname, '.')
    }, 
    module: {
        rules: [
            {
                test: /\.js/,
                // 配置loader
                use: {
                    loader: 'babel-loader'
                },
                excluder: '/node_modules/'
            }
        ]
    },
    resolve: {
        extensions: ['.js']
      },    
    devServer: {
        contentBase: '.'
    }
}