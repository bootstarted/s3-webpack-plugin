# s3-webpack-plugin

Simple S3 upload plugin for webpack.

![build status](http://img.shields.io/travis/metalabdesign/css-split-webpack-plugin/master.svg?style=flat)
![coverage](http://img.shields.io/coveralls/metalabdesign/css-split-webpack-plugin/master.svg?style=flat)
![license](http://img.shields.io/npm/l/css-split-webpack-plugin.svg?style=flat)
![version](http://img.shields.io/npm/v/css-split-webpack-plugin.svg?style=flat)
![downloads](http://img.shields.io/npm/dm/css-split-webpack-plugin.svg?style=flat)

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
