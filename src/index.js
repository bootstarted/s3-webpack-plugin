import File from 'vinyl';
import s3 from 'vinyl-s3';

export default class S3WebpackPlugin {
  constructor(s3) {
    this.s3 = s3;
  }

  apply(compiler) {
    compiler.plugin('after-emit', (compilation, done) => {
      const stream = s3.dest(this.s3);

      stream.on('readable', () => {
        let entry;
        while ((entry = stream.read()) !== null) {
          console.log(`Uploaded: ${entry.path}`);
        }
      }).on('error', (err) => {
        compilation.errors.push(err);
        done();
      }).on('finish', () => {
        done();
      });

      Object.keys(compilation.assets).forEach((name) => {
        const asset = compilation.assets[name];
        const source = asset.source();
        stream.write(new File({
          base: '',
          path: name,
          contents: typeof source === 'string' ? new Buffer(source) : source,
        }));
      });
      stream.end();
    });
  }
}
