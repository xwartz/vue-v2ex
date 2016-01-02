var config = require('./webpack.base.conf')

config.devtool = 'source-map'
// config.node = {
//   fs: 'empty',
//   net: 'empty',
//   tls: 'empty',
//   dns: 'empty'
// }

module.exports = config
