/**
 * Created by ttnd on 13/10/16.
 */

import express from 'express'
import path from 'path'
import webpack from 'webpack'
import config from '../webpack.config'

let app = express()
let compile = webpack(config)

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use('*', function (req, res){
  res.sendFile(path.join(__dirname , '../src/index.html'))
})
app.listen(4000, function() {

})
