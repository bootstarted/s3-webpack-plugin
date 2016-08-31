# s3-webpack-plugin

Simple S3 upload plugin for webpack.

![build status](http://img.shields.io/travis/metalabdesign/s3-webpack-plugin/master.svg?style=flat)
![coverage](http://img.shields.io/coveralls/metalabdesign/s3-webpack-plugin/master.svg?style=flat)
![license](http://img.shields.io/npm/l/s3-webpack-plugin.svg?style=flat)
![version](http://img.shields.io/npm/v/s3-webpack-plugin.svg?style=flat)
![downloads](http://img.shields.io/npm/dm/s3-webpack-plugin.svg?style=flat)

For something with more bells and whistles, feel free to look [here](https://github.com/MikaAK/s3-plugin-webpack).

Install:

```sh
npm install --save s3-webpack-plugin
```

And configure:

```javascript
module.exports = {
  // ...
  plugins: [
    new S3UploadPlugin('s3://my-bucket'),
  ],
};
```
