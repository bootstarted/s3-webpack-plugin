var S3UploadPlugin = require('../../').default;

module.exports = {
  entry: './index.js',
  context: __dirname,
  output: {
    path: __dirname + '/dist',
    publicPath: '/foo',
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  plugins: [
    new S3UploadPlugin('s3://my-bucket'),
  ],
};
