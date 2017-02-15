import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import config from './webpack.config';
import path from 'path';

let filePath = path.resolve(__dirname, 'public/assets/index.html');
let app = express();
let compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}));

app.use(express.static(__dirname + '/public/assets/'));

app.get('*', (req, res, next) => {
  res.sendFile(filePath);
  if (req.url === "/files") {
    return next();
  }
});

app.get('/files', (req, res, next) => {
  const fileName = 'test.zip';
  res.setHeader('Content-disposition', 'attachment; filename=' + fileName + '');
  res.setHeader('Content-Type', 'application/zip');
  res.sendFile(path.join(__dirname, '/images/1487052884828398506.zip'))
});


app.listen(3500, () => {
  console.log('listen on 3500')
})