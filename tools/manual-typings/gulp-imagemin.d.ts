declare module 'gulp-imagemin' {

  interface IOptions {
    verbose?: boolean;
    interlaced?: boolean;
    progressive?: boolean;
    optimizationLevel?: number;
    svgoPlugins?: Array<any>;
    multipass?: boolean;
    use?: Array<any>;
  }

  interface IImageMin {
    (opts?: IOptions): NodeJS.ReadWriteStream;
  }

  const imageMin:IImageMin;
  export = imageMin;
}
