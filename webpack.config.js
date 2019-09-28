const path = require('path')

var ADMIN_SRC_DIR = path.join(__dirname, '/client/admin/src')
var PUBLIC_SRC_DIR = path.join(__dirname, '/client/public/src')

module.exports = {
  entry: {
    admin: `${ADMIN_SRC_DIR}/index.jsx`,
    public: `${PUBLIC_SRC_DIR}/index.jsx`
  },
  output: {
    filename: '../client/[name]/dist/[name].bundle.js'
  },
  module: {
    rules: [{
        test: /\.jsx?/,
        include: __dirname + '/client',
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }],
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    ],
  },
  
}