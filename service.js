import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack.config';
import path from 'path';

let filePath = path.resolve(__dirname,'public/assets/index.html');
let app = express();
let compiler = webpack(config);

app.use(webpackDevMiddleware(compiler,{noInfo:true,publicPath:config.output.publicPath}));

app.use(express.static(__dirname+'/public/assets/'));

app.get('*',(req,res)=>{
  res.sendFile(filePath);
});

app.listen(3500,()=>{
  console.log('listen on 3500')
})