import S3WebpackPlugin from '../../src';
import _webpack from 'webpack';
import MemoryFileSystem from 'memory-fs';
import {expect} from 'chai';
import path from 'path';
import sinon from 'sinon';
import s3 from 'vinyl-s3';
import streams from 'stream';

const basic = path.join('.', 'basic', 'index.js');

const config = (options, entry = basic, extra) => {
  return {
    entry: path.join(__dirname, '..', '..', 'example', entry),
    context: path.join(__dirname, '..', '..', 'example'),
    output: {
      path: path.join(__dirname, 'dist'),
      publicPath: '/foo',
      filename: 'bundle.js',
    },
    devtool: 'source-map',
    plugins: [
      new S3WebpackPlugin(options),
    ],
    ...extra,
  };
};

const webpack = (options, inst, extra) => {
  const configuration = config(options, inst, extra);
  const compiler = _webpack(configuration);
  compiler.outputFileSystem = new MemoryFileSystem();
  return new Promise((resolve) => {
    compiler.run((err, _stats) => {
      expect(err).to.be.null;
      const stats = _stats.toJson();
      resolve({stats});
    });
  });
};

describe('S3WebpackPlugin', () => {
  let sandbox;
  let dest;
  let stream;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    dest = sandbox.stub(s3, 'dest');
    stream = new streams.PassThrough({objectMode: true});
    dest.returns(stream);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should not error horribly', () =>
    webpack('s3://test-bucket').then(({stats}) => {
      expect(stats).to.not.be.null;
    })
  );
});
